const COLOR_BLACK = "black";
const COLOR_WHITE = "white";

export function converHexColorToRGB(hexColor: string) {
  const regex = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/;

  const matches = hexColor.match(regex);

  if (matches?.length === 4) {
    return {
      r: parseInt(matches[1], 16),
      g: parseInt(matches[2], 16),
      b: parseInt(matches[3], 16),
    };
  }

  return {
    r: 0,
    g: 0,
    b: 0,
  };
}
export function getContrastColorFromRGB(color: {
  r: number;
  g: number;
  b: number;
}) {
  const luminance = (0.299 * color.r + 0.587 * color.g + 0.114 * color.b) / 255;

  if (luminance > 0.5) {
    return COLOR_BLACK;
  }

  return COLOR_WHITE;
}
