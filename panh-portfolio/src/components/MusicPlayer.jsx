import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Volume1,
  VolumeX,
  ChevronDown,
  Music,
} from 'lucide-react';
import { playlist } from '../data/playlist';
import { useAppContext } from '../context/AppContext';

function formatTime(sec) {
  if (!sec || isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// Vinyl disc component — square, spins when playing
function VinylDisc({ isPlaying }) {
  return (
    <motion.div
      animate={{ rotate: isPlaying ? 360 : 0 }}
      transition={
        isPlaying
          ? { duration: 3, repeat: Infinity, ease: 'linear' }
          : { duration: 0 }
      }
      style={{
        width: 80,
        height: 80,
        borderRadius: '50%',
        background: 'conic-gradient(from 0deg, #1a1a2e, #2d2040, #1a1a2e, #2d2040, #1a1a2e)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        position: 'relative',
        boxShadow: '0 4px 16px rgba(45, 32, 64, 0.2)',
      }}
    >
      {/* Grooves */}
      <div
        style={{
          position: 'absolute',
          inset: 8,
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 16,
          border: '1px solid rgba(255,255,255,0.04)',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 24,
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '50%',
        }}
      />
      {/* Center label */}
      <div
        style={{
          width: 24,
          height: 24,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #FF6B9D, #7EC8E3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Music size={10} color="white" />
      </div>
    </motion.div>
  );
}

export default function MusicPlayer() {
  const { isPlaying, setIsPlaying } = useAppContext();
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const audioRef = useRef(null);
  const progressRef = useRef(null);
  const autoplayAttempted = useRef(false);
  const autoCloseTimer = useRef(null);

  const currentTrack = playlist[currentIndex];

  // Auto-close panel after 2s if mouse is not hovering
  useEffect(() => {
    if (isExpanded && !isHovered) {
      autoCloseTimer.current = setTimeout(() => {
        setIsExpanded(false);
      }, 2000);
    }
    return () => {
      if (autoCloseTimer.current) clearTimeout(autoCloseTimer.current);
    };
  }, [isExpanded, isHovered]);

  // Autoplay — browsers block audio until user interacts with the page.
  // Strategy: show player immediately, play on first interaction (even mousemove).
  useEffect(() => {
    if (autoplayAttempted.current) return;
    autoplayAttempted.current = true;

    // Show player right away
    setIsExpanded(true);

    const tryPlay = () => {
      if (audioRef.current && !audioRef.current.paused) return; // already playing
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            removeListeners();
          })
          .catch(() => {});
      }
    };

    const removeListeners = () => {
      document.removeEventListener('click', tryPlay);
      document.removeEventListener('touchstart', tryPlay);
      document.removeEventListener('scroll', tryPlay);
      document.removeEventListener('keydown', tryPlay);
      document.removeEventListener('mousemove', tryPlay);
    };

    // Attempt autoplay immediately
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Blocked by browser — attach listeners for first interaction
          document.addEventListener('click', tryPlay, { once: true });
          document.addEventListener('touchstart', tryPlay, { once: true });
          document.addEventListener('scroll', tryPlay, { once: true });
          document.addEventListener('keydown', tryPlay, { once: true });
          document.addEventListener('mousemove', tryPlay, { once: true });
        });
    }

    return () => removeListeners();
  }, []);

  // Sync audio play/pause with context isPlaying state
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Sync volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Time update
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => handleNext();

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentIndex]);

  const togglePlay = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying, setIsPlaying]);

  const handleNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % playlist.length;
    setCurrentIndex(nextIndex);
    setCurrentTime(0);
    if (isPlaying) {
      setTimeout(() => audioRef.current?.play().catch(() => {}), 100);
    }
  }, [currentIndex, isPlaying]);

  const handlePrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    setCurrentIndex(prevIndex);
    setCurrentTime(0);
    if (isPlaying) {
      setTimeout(() => audioRef.current?.play().catch(() => {}), 100);
    }
  }, [currentIndex, isPlaying]);

  const handleSeek = (e) => {
    if (!progressRef.current || !audioRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, x / rect.width));
    audioRef.current.currentTime = pct * duration;
    setCurrentTime(pct * duration);
  };

  const handleVolumeChange = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, x / rect.width));
    setVolume(pct);
    setIsMuted(false);
  };

  const toggleMute = () => setIsMuted(!isMuted);

  const VolumeIcon = isMuted || volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  return (
    <>
      <audio ref={audioRef} src={currentTrack.src} preload="metadata" />

      {/* Collapsed button */}
      <AnimatePresence>
        {!isExpanded && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsExpanded(true)}
            style={{
              position: 'fixed',
              bottom: 24,
              right: 24,
              width: 52,
              height: 52,
              background: 'var(--gradient-accent)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(255, 107, 157, 0.3)',
              zIndex: 999,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Open music player"
          >
            {isPlaying ? (
              <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <motion.rect x="3" width="4" height="24" fill="white" rx="0"
                  animate={{ height: [12, 20, 12], y: [6, 2, 6] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.rect x="10" width="4" height="24" fill="white" rx="0"
                  animate={{ height: [18, 10, 18], y: [3, 7, 3] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                />
                <motion.rect x="17" width="4" height="24" fill="white" rx="0"
                  animate={{ height: [14, 22, 14], y: [5, 1, 5] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                />
              </svg>
            ) : (
              <Play size={22} color="white" fill="white" />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Expanded panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              position: 'fixed',
              bottom: 24,
              right: 24,
              width: 320,
              background: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid transparent',
              borderImage: 'linear-gradient(90deg, #FF6B9D, #7EC8E3) 1',
              boxShadow: '0 8px 32px rgba(45, 32, 64, 0.12)',
              zIndex: 999,
              overflow: 'hidden',
            }}
          >
            {/* Header — collapse button */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px 0' }}>
              <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary)' }}>
                Now Playing
              </span>
              <button
                onClick={() => setIsExpanded(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
                aria-label="Minimize player"
              >
                <ChevronDown size={18} color="var(--color-text-secondary)" />
              </button>
            </div>

            {/* Track info + Vinyl */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 16px' }}>
              <VinylDisc isPlaying={isPlaying} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: 'var(--color-text)',
                  margin: 0,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                  {currentTrack.title}
                </p>
                <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', margin: '4px 0 0' }}>
                  Track {currentIndex + 1} / {playlist.length}
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <div style={{ padding: '0 16px' }}>
              <div
                ref={progressRef}
                onClick={handleSeek}
                style={{
                  width: '100%',
                  height: 6,
                  background: 'var(--color-border)',
                  cursor: 'pointer',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    width: `${duration ? (currentTime / duration) * 100 : 0}%`,
                    height: '100%',
                    background: 'var(--gradient-accent)',
                    transition: 'width 0.1s linear',
                  }}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>{formatTime(currentTime)}</span>
                <span style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, padding: '8px 16px' }}>
              <button onClick={handlePrev} style={btnStyle} aria-label="Previous track">
                <SkipBack size={18} color="var(--color-text)" />
              </button>
              <button
                onClick={togglePlay}
                style={{
                  ...btnStyle,
                  width: 44,
                  height: 44,
                  background: 'var(--gradient-accent)',
                }}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying
                  ? <Pause size={20} color="white" fill="white" />
                  : <Play size={20} color="white" fill="white" style={{ marginLeft: 2 }} />
                }
              </button>
              <button onClick={handleNext} style={btnStyle} aria-label="Next track">
                <SkipForward size={18} color="var(--color-text)" />
              </button>
            </div>

            {/* Volume */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 16px 14px' }}>
              <button onClick={toggleMute} style={{ ...btnStyle, width: 28, height: 28 }} aria-label={isMuted ? 'Unmute' : 'Mute'}>
                <VolumeIcon size={14} color="var(--color-text-secondary)" />
              </button>
              <div
                onClick={handleVolumeChange}
                style={{
                  flex: 1,
                  height: 4,
                  background: 'var(--color-border)',
                  cursor: 'pointer',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    width: `${isMuted ? 0 : volume * 100}%`,
                    height: '100%',
                    background: 'var(--gradient-accent)',
                  }}
                />
              </div>
              <span style={{ fontSize: 11, color: 'var(--color-text-secondary)', minWidth: 28, textAlign: 'right' }}>
                {isMuted ? '0' : Math.round(volume * 100)}%
              </span>
            </div>

            {/* Playlist */}
            <div style={{ borderTop: '1px solid var(--color-border)', maxHeight: 120, overflowY: 'auto' }}>
              {playlist.map((track, idx) => (
                <button
                  key={track.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setCurrentTime(0);
                    setTimeout(() => { audioRef.current?.play().catch(() => {}); setIsPlaying(true); }, 100);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    width: '100%',
                    padding: '10px 16px',
                    background: idx === currentIndex ? 'rgba(255, 107, 157, 0.06)' : 'transparent',
                    border: 'none',
                    borderBottom: '1px solid var(--color-border)',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: idx === currentIndex ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                    minWidth: 20,
                  }}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span style={{
                    fontSize: 14,
                    fontWeight: idx === currentIndex ? 600 : 400,
                    color: idx === currentIndex ? 'var(--color-primary)' : 'var(--color-text)',
                    flex: 1,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>
                    {track.title}
                  </span>
                  {idx === currentIndex && isPlaying && (
                    <Music size={12} color="var(--color-primary)" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const btnStyle = {
  width: 36,
  height: 36,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  border: '1px solid var(--color-border)',
  cursor: 'pointer',
};
