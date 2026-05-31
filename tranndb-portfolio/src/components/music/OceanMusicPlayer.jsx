import React, { useEffect, useRef, useState } from 'react';
import {
  ListMusic,
  Music,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  X,
} from 'lucide-react';

const PLAYLIST_URL = '/music/playlist.json';

function formatTime(value) {
  if (!Number.isFinite(value) || value <= 0) {
    return '0:00';
  }

  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function getTracks(payload) {
  if (!Array.isArray(payload?.tracks)) {
    return [];
  }

  return payload.tracks.filter((track) => track?.title && track?.src);
}

export default function OceanMusicPlayer() {
  const audioRef = useRef(null);
  const tracksRef = useRef([]);
  const [tracks, setTracks] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState('');

  const activeTrack = tracks[activeIndex];

  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'metadata';
    audioRef.current = audio;

    const handleEnded = () => {
      setActiveIndex((index) => {
        const count = tracksRef.current.length;
        return count > 0 ? (index + 1) % count : index;
      });
      setIsPlaying(true);
    };
    const handleLoadedMetadata = () => {
      setDuration(Number.isFinite(audio.duration) ? audio.duration : 0);
    };
    const handleTimeUpdate = () => {
      setCurrentTime(Number.isFinite(audio.currentTime) ? audio.currentTime : 0);
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.pause();
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    audio.volume = volume;
  }, [volume]);

  useEffect(() => {
    let isMounted = true;

    fetch(PLAYLIST_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Không đọc được playlist');
        }
        return response.json();
      })
      .then((payload) => {
        if (!isMounted) {
          return;
        }
        const nextTracks = getTracks(payload);
        tracksRef.current = nextTracks;
        setTracks(nextTracks);
        setError(nextTracks.length ? '' : 'Playlist trống');
      })
      .catch(() => {
        if (!isMounted) {
          return;
        }
        tracksRef.current = [];
        setTracks([]);
        setError('Chưa đọc được playlist');
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !activeTrack) {
      return;
    }

    audio.src = activeTrack.src;
    setCurrentTime(0);
    setDuration(0);
    audio.load();

    if (isPlaying) {
      audio.play().catch(() => {
        setIsPlaying(false);
        setError('Trình duyệt chặn phát nhạc');
      });
    }
  }, [activeTrack]);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio || !activeTrack) {
      setError('Thêm mp3 vào public/music trước');
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        setError('');
      })
      .catch(() => {
        setIsPlaying(false);
        setError('Không phát được file mp3');
      });
  };

  const skipTrack = (direction) => {
    if (!tracks.length) {
      return;
    }

    setActiveIndex(
      (index) => (index + direction + tracks.length) % tracks.length
    );
  };

  const selectTrack = (index) => {
    setActiveIndex(index);
    setIsPlaying(true);
  };

  const seekTrack = (value) => {
    const nextTime = Number(value);
    const audio = audioRef.current;
    setCurrentTime(nextTime);

    if (audio) {
      audio.currentTime = nextTime;
    }
  };

  return (
    <aside
      className={`ocean-music-player ${isExpanded ? 'expanded' : ''}`}
      aria-label="Trình phát nhạc"
    >
      <button
        className={`music-player-toggle ${isPlaying ? 'playing' : ''}`}
        type="button"
        aria-expanded={isExpanded}
        aria-label={
          isExpanded ? 'Thu gọn trình phát nhạc' : 'Mở trình phát nhạc'
        }
        onClick={() => setIsExpanded((value) => !value)}
      >
        {isExpanded ? <X size={18} /> : <Music size={20} />}
      </button>

      {isExpanded ? (
        <div className="music-player-panel">
          <div className="music-player-main">
            <div
              className={`music-vinyl-disc ${isPlaying ? 'playing' : ''}`}
              aria-hidden="true"
            >
              <span className="music-vinyl-label">
                {isPlaying ? 'Đang phát' : 'Tạm dừng'}
              </span>
            </div>

            <div className="music-player-info">
              <div className="music-player-header">
                <span>
                  <ListMusic size={16} /> Playlist nhạc
                </span>
                <strong>{activeTrack?.title || 'Chưa có bài'}</strong>
                {activeTrack?.artist ? (
                  <small className="music-track-artist">
                    {activeTrack.artist}
                  </small>
                ) : null}
              </div>

              <div className="music-controls">
                <button
                  type="button"
                  aria-label="Bài trước"
                  onClick={() => skipTrack(-1)}
                  disabled={!tracks.length}
                >
                  <SkipBack size={18} />
                </button>
                <button
                  className="music-play-button"
                  type="button"
                  aria-label={isPlaying ? 'Tạm dừng' : 'Phát nhạc'}
                  onClick={togglePlayback}
                  disabled={!tracks.length}
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>
                <button
                  type="button"
                  aria-label="Bài tiếp theo"
                  onClick={() => skipTrack(1)}
                  disabled={!tracks.length}
                >
                  <SkipForward size={18} />
                </button>
              </div>

              <label className="music-seek-control">
                <span>{formatTime(currentTime)}</span>
                <input
                  className="music-seek-slider"
                  type="range"
                  min="0"
                  max={duration || 0}
                  step="0.1"
                  value={Math.min(currentTime, duration || currentTime)}
                  aria-label="Tua bài hát"
                  disabled={!duration}
                  onChange={(event) => seekTrack(event.target.value)}
                />
                <span>{formatTime(duration)}</span>
              </label>

              <label className="music-volume-control">
                <span>
                  <Volume2 size={16} />
                </span>
                <input
                  className="music-volume-slider"
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  aria-label="Âm lượng"
                  onChange={(event) => setVolume(Number(event.target.value))}
                />
              </label>
            </div>
          </div>

          <div
            className="music-playlist"
            role="list"
            aria-label="Danh sách nhạc"
          >
            {tracks.map((track, index) => (
              <button
                className={index === activeIndex ? 'active' : ''}
                key={track.src}
                type="button"
                role="listitem"
                onClick={() => selectTrack(index)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>
                  {track.title}
                  {track.artist ? (
                    <small className="music-track-artist">{track.artist}</small>
                  ) : null}
                </strong>
              </button>
            ))}
          </div>

          {error ? <p className="music-error">{error}</p> : null}
        </div>
      ) : null}
    </aside>
  );
}
