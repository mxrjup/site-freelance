import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const CREAM = '#F4EDDE';
const FOREST = '#3D5A24';
const LEAF = '#4B8B3B';
const SAGE = '#B7D99A';

export function renderOgImage({ line1, line2, footer }) {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '90px',
        backgroundColor: CREAM,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 84,
          height: 84,
          borderRadius: '50%',
          backgroundColor: SAGE,
          marginBottom: 48,
        }}
      >
        <svg
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          stroke={FOREST}
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      </div>
      <div
        style={{ display: 'flex', fontSize: 60, fontWeight: 700, color: FOREST, lineHeight: 1.2 }}
      >
        {line1}
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          fontWeight: 700,
          color: LEAF,
          lineHeight: 1.2,
          marginBottom: 32,
        }}
      >
        {line2}
      </div>
      <div style={{ display: 'flex', fontSize: 28, fontWeight: 400, color: FOREST, opacity: 0.7 }}>
        {footer}
      </div>
    </div>,
    { ...size }
  );
}
