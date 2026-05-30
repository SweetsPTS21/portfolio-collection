import React from 'react';
import { WashiTapeSVG } from './SVGs';

export default function WashiTag({
  text,
  color = '#FF75B8',
  pattern = 'caro',
}) {
  return (
    <div
      style={{
        position: 'relative',
        // display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '4px',
      }}
    >
      <WashiTapeSVG
        color={color}
        pattern={pattern}
        style={{ width: '130px', height: '36px' }}
      />
      <span
        style={{
          // position: 'absolute',
          fontFamily: 'var(--font-hand)',
          fontSize: '1.15rem',
          fontWeight: 'bold',
          color: 'var(--ink-soft)',
          transform: 'rotate(-1deg)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      >
        {text}
      </span>
    </div>
  );
}
