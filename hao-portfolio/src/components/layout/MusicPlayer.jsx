import React, { useEffect, useRef, useState } from 'react';
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from 'lucide-react';
import {
  formatTrackTime,
  getNextTrackIndex,
  getPreviousTrackIndex,
} from './musicPlayerUtils';
import { musicPlaylist } from '../../data/musicPlaylist';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.75);
  const [loadError, setLoadError] = useState(false);

  const currentTrack = musicPlaylist[trackIndex];
  const progress = duration ? (currentTime / duration) * 100 : 0;

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    setLoadError(false);
    setCurrentTime(0);
    setDuration(0);

    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [trackIndex, isPlaying]);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setLoadError(true));
  };

  const goToTrack = (index) => {
    setTrackIndex(index);
  };

  const handlePrevious = () => {
    goToTrack(getPreviousTrackIndex(trackIndex, musicPlaylist.length));
  };

  const handleNext = () => {
    goToTrack(getNextTrackIndex(trackIndex, musicPlaylist.length));
  };

  const handleSeek = (event) => {
    const nextTime = Number(event.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = nextTime;
    }
    setCurrentTime(nextTime);
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setDuration(audio.duration);
    setLoadError(false);
  };

  const handleVolumeChange = (event) => {
    setVolume(Number(event.target.value));
  };

  return (
    <aside className="music-player" aria-label="Music player">
      <audio
        ref={audioRef}
        src={currentTrack.src}
        preload="metadata"
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={(event) =>
          setCurrentTime(event.currentTarget.currentTime)
        }
        onEnded={handleNext}
        onError={() => setLoadError(true)}
      />

      <div className="music-player-header">
        <span className="player-eyebrow">Playlist</span>
        <span className="player-count">
          {trackIndex + 1}/{musicPlaylist.length}
        </span>
      </div>

      <div
        className={`vinyl-wrap ${isPlaying ? 'is-playing' : ''}`}
        aria-hidden="true"
      >
        <div className="vinyl-disc">
          <div className="vinyl-label">HAO</div>
        </div>
      </div>

      <div className="track-info">
        <h3>{currentTrack.title}</h3>
        <p>{currentTrack.artist}</p>
      </div>

      <div className="player-controls" aria-label="Playback controls">
        <button
          type="button"
          className="player-icon-btn"
          onClick={handlePrevious}
          aria-label="Previous track"
        >
          <SkipBack size={16} strokeWidth={2.5} />
        </button>
        <button
          type="button"
          className="player-icon-btn play-toggle"
          onClick={handlePlayPause}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause size={18} strokeWidth={2.8} />
          ) : (
            <Play size={18} strokeWidth={2.8} />
          )}
        </button>
        <button
          type="button"
          className="player-icon-btn"
          onClick={handleNext}
          aria-label="Next track"
        >
          <SkipForward size={16} strokeWidth={2.5} />
        </button>
      </div>

      <div className="seek-row">
        <input
          type="range"
          min="0"
          max={duration || 0}
          step="1"
          value={Math.min(currentTime, duration || 0)}
          onChange={handleSeek}
          className="player-slider"
          style={{ '--slider-progress': `${progress}%` }}
          aria-label="Seek track"
        />
        <div className="time-row">
          <span>{formatTrackTime(currentTime)}</span>
          <span>{formatTrackTime(duration)}</span>
        </div>
      </div>

      <div className="volume-row">
        {volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="player-slider volume-slider"
          style={{ '--slider-progress': `${volume * 100}%` }}
          aria-label="Volume"
        />
      </div>

      {loadError && (
        <p className="player-message">
          Chưa tìm thấy file trong <span>/public/music</span>
        </p>
      )}
    </aside>
  );
}
