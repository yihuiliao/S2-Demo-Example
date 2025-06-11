export function hstack(gap:  0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 56 | 64 | 80 | 96) {
  return {
    display: 'flex',
    flexDirection: 'row',
    columnGap: gap
  } as const;
}

export function vstack (gap: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 56 | 64 | 80 | 96) {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: gap
  } as const;
}

interface ContainerOptions {
  variant?: 'default' | 'elevated',
  padding?: 8 | 12 | 16 | 24 | 32 | 40,
  borderRadius?: 'default' | 'sm' | 'lg' | 'xl'
}

export const container = ({variant = 'default', padding = 16, borderRadius = 'default'}: ContainerOptions = {}) => ({
  '--s2-container-bg': {
    type: 'backgroundColor',
    value: {
      default: ({
        default: 'layer-1',
        elevated: 'elevated'
      } as const)[variant],
      forcedColors: 'ButtonFace'
    }
  },
  backgroundColor: ({
    default: '--s2-container-bg',
    elevated: '--s2-container-bg',
  } as const)[variant],
  boxShadow: {
    default: ({
      default: 'none',
      elevated: 'elevated',
    } as const)[variant],
    forcedColors: '[0 0 0 1px ButtonBorder]'
  },
  padding,
  boxSizing: 'border-box',
  borderRadius,
  forcedColorAdjust: 'none'
} as const);

