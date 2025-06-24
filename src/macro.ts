// 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 56 | 64 | 80 | 96

export function hstack(gap: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 56 | 64 | 80 | 96) {
  return ({
    display: 'flex',
    flexDirection: 'row',
    columnGap: gap
  }) as const;
}

export function vstack(gap: 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 56 | 64 | 80 | 96) {
  return ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: gap
  }) as const;
}