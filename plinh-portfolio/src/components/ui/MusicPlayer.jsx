import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Music,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  ChevronDown,
  List,
} from 'lucide-react';
import playlistData from '../../data/playlist.json';

export default function MusicPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [playlist] = useState(playlistData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const audioRef = useRef(null);

  const currentTrack = playlist[currentIndex] || null;

  // Update audio source when track changes
  useEffect(() => {
    if (audioRef.current && currentTrack) {
      audioRef.current.src = currentTrack.src;
      audioRef.current.volume = isMuted ? 0 : volume;
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [currentIndex, currentTrack]);

  // Sync volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = useCallback(() => {
    if (!audioRef.current || !currentTrack) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying, currentTrack]);

  const playNext = useCallback(() => {
    if (playlist.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
  }, [playlist.length]);

  const playPrev = useCallback(() => {
    if (playlist.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  }, [playlist.length]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleSeek = (e) => {
    if (audioRef.current && duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percent = x / rect.width;
      audioRef.current.currentTime = percent * duration;
    }
  };

  const handleTrackSelect = (index) => {
    setCurrentIndex(index);
    setIsPlaying(true);
    setShowPlaylist(false);
  };

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={playNext}
        onLoadedMetadata={handleTimeUpdate}
      />

      {/* Floating toggle button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full
              bg-gradient-to-br from-[#588157] to-[#3A5A40] text-white
              shadow-lg shadow-[#588157]/30 flex items-center justify-center
              border-2 border-[#A3B18A]/50 hover:shadow-xl
              transition-shadow duration-300"
            aria-label="Mở trình phát nhạc"
          >
            <Music size={24} />
            {isPlaying && (
              <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Player popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-[9999] w-80
              bg-white/90 backdrop-blur-xl rounded-2xl
              shadow-2xl shadow-[#3A5A40]/20
              border border-[#A3B18A]/40 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#588157]/10 to-[#A3B18A]/10 border-b border-[#A3B18A]/20">
              <div className="flex items-center gap-2">
                <Music size={16} className="text-[#588157]" />
                <span className="text-sm font-semibold text-[#3A5A40]">
                  Music Player
                </span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setShowPlaylist(!showPlaylist)}
                  className="p-1.5 rounded-lg hover:bg-[#588157]/10 text-[#588157] transition-colors"
                  aria-label="Danh sách phát"
                >
                  <List size={16} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-[#588157]/10 text-[#588157] transition-colors"
                  aria-label="Thu nhỏ"
                >
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>

            {/* Playlist view */}
            <AnimatePresence>
              {showPlaylist && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden border-b border-[#A3B18A]/20"
                >
                  <div className="max-h-40 overflow-y-auto">
                    {playlist.map((track, index) => (
                      <button
                        key={track.id}
                        onClick={() => handleTrackSelect(index)}
                        className={`w-full text-left px-4 py-2.5 flex items-center gap-3
                          hover:bg-[#588157]/10 transition-colors
                          ${index === currentIndex ? 'bg-[#588157]/15 text-[#3A5A40] font-medium' : 'text-[#604653]'}`}
                      >
                        <span className="text-xs w-5 text-center opacity-60">
                          {index === currentIndex && isPlaying ? '♪' : index + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm truncate">{track.title}</p>
                          <p className="text-xs opacity-60 truncate">
                            {track.artist}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Now playing */}
            <div className="px-4 pt-4 pb-2">
              {currentTrack ? (
                <div className="text-center">
                  <p className="text-sm font-semibold text-[#3A5A40] truncate">
                    {currentTrack.title}
                  </p>
                  <p className="text-xs text-[#588157]/70 truncate">
                    {currentTrack.artist}
                  </p>
                </div>
              ) : (
                <p className="text-sm text-center text-[#604653]/60">
                  Chưa có bài hát nào
                </p>
              )}
            </div>

            {/* Progress bar */}
            <div className="px-4 pb-2">
              <div
                className="w-full h-1.5 bg-[#A3B18A]/20 rounded-full cursor-pointer group"
                onClick={handleSeek}
                role="slider"
                aria-label="Tiến trình phát"
                aria-valuemin={0}
                aria-valuemax={duration}
                aria-valuenow={currentTime}
              >
                <div
                  className="h-full bg-gradient-to-r from-[#588157] to-[#3A5A40] rounded-full relative transition-all"
                  style={{
                    width: duration ? `${(currentTime / duration) * 100}%` : '0%',
                  }}
                >
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-[#588157] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[10px] text-[#604653]/50">
                  {formatTime(currentTime)}
                </span>
                <span className="text-[10px] text-[#604653]/50">
                  {formatTime(duration)}
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-3 px-4 pb-3">
              <button
                onClick={playPrev}
                className="p-2 rounded-full hover:bg-[#588157]/10 text-[#3A5A40] transition-colors"
                aria-label="Bài trước"
              >
                <SkipBack size={18} />
              </button>
              <button
                onClick={togglePlay}
                className="p-3 rounded-full bg-gradient-to-br from-[#588157] to-[#3A5A40]
                  text-white shadow-md hover:shadow-lg transition-shadow"
                aria-label={isPlaying ? 'Tạm dừng' : 'Phát'}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <button
                onClick={playNext}
                className="p-2 rounded-full hover:bg-[#588157]/10 text-[#3A5A40] transition-colors"
                aria-label="Bài tiếp"
              >
                <SkipForward size={18} />
              </button>
            </div>

            {/* Volume */}
            <div className="flex items-center gap-2 px-4 pb-4">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-[#588157] hover:text-[#3A5A40] transition-colors"
                aria-label={isMuted ? 'Bật âm' : 'Tắt âm'}
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(parseFloat(e.target.value));
                  setIsMuted(false);
                }}
                className="flex-1 h-1 accent-[#588157] cursor-pointer"
                aria-label="Âm lượng"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
