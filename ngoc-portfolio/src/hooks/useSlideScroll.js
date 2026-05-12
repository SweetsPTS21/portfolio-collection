// src/hooks/useSlideScroll.js
import { useState, useEffect, useCallback, useRef } from 'react';

export function useSlideScroll(totalSlides) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const viewportRef = useRef(null);
  const isScrollingRef = useRef(false);

  const scrollToSlide = useCallback((index) => {
    if (!viewportRef.current) return;
    const clamped = Math.max(0, Math.min(index, totalSlides - 1));
    const slideHeight = viewportRef.current.clientHeight;
    viewportRef.current.scrollTo({
      top: clamped * slideHeight,
      behavior: 'smooth',
    });
    setCurrentSlide(clamped);
  }, [totalSlides]);

  // Sync active slide on scroll
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const handleScroll = () => {
      const slideHeight = viewport.clientHeight;
      const scrollTop = viewport.scrollTop;
      const idx = Math.round(scrollTop / slideHeight);
      setCurrentSlide(Math.max(0, Math.min(idx, totalSlides - 1)));
    };

    viewport.addEventListener('scroll', handleScroll, { passive: true });
    return () => viewport.removeEventListener('scroll', handleScroll);
  }, [totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (isScrollingRef.current) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        setCurrentSlide((prev) => {
          const next = Math.min(prev + 1, totalSlides - 1);
          scrollToSlide(next);
          return next;
        });
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        setCurrentSlide((prev) => {
          const next = Math.max(prev - 1, 0);
          scrollToSlide(next);
          return next;
        });
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [scrollToSlide, totalSlides]);

  return { currentSlide, scrollToSlide, viewportRef };
}
