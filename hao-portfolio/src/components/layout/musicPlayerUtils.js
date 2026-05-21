export function formatTrackTime(value) {
  if (!Number.isFinite(value) || value < 0) return '0:00';

  const totalSeconds = Math.floor(value);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

export function getNextTrackIndex(currentIndex, trackCount) {
  if (trackCount <= 0) return 0;
  return (currentIndex + 1) % trackCount;
}

export function getPreviousTrackIndex(currentIndex, trackCount) {
  if (trackCount <= 0) return 0;
  return (currentIndex - 1 + trackCount) % trackCount;
}
