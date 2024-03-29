import { createStitches } from '@stitches/react';

export const { styled } = createStitches({
  theme: {
    colors: {
      black: 'rgba(19, 19, 21, 1)',
      white: 'rgba(255, 255, 255, 1)',
      gray: 'rgba(128, 128, 128, 1)',
      blue: 'rgba(3, 136, 252, 1)',
      red: 'rgba(249, 16, 74, 1)',
      yellow: 'rgba(255, 221, 0, 1)',
      pink: 'rgba(232, 141, 163, 1)',
      turq: 'rgba(0, 245, 196, 1)',
      orange: 'rgba(255, 135, 31, 1)',
    },
    fonts: {
      sans: 'Inter, sans-serif',
    },
    fontSizes: {
      1: '0.75rem',
      2: '1rem',
      3: '1.25rem',
      4: '1.5rem',
      5: '2rem',
      6: '4rem',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
    },
    radii: {
      1: '2px',
      2: '4px',
      3: '8px',
      round: '9999px',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  utils: {
    marginX: (value: number) => ({ marginLeft: value, marginRight: value }),
    paddingX: (value: number) => ({ paddingLeft: value, paddingRight: value }),
  }
});
