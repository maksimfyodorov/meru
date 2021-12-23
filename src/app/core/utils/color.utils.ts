export const RGBToHex = (r: number, g: number, b: number): string => {
  let red = r.toString(16);
  let green = g.toString(16);
  let blue = b.toString(16);
  if (red.length === 1) {
    red = '0' + red;
  }
  if (green.length === 1) {
    green = '0' + green;
  }
  if (blue.length === 1) {
    blue = '0' + blue;
  }
  return '#' + r + g + b;
};
export const hexToRGB = (h: string, o: string = '1'): string => {
  let r = '0';
  let g = '0';
  let b = '0';
  if (h.length === 4) {
    r = '0x' + h[1] + h[1];
    g = '0x' + h[2] + h[2];
    b = '0x' + h[3] + h[3];
  } else if (h.length === 7) {
    r = '0x' + h[1] + h[2];
    g = '0x' + h[3] + h[4];
    b = '0x' + h[5] + h[6];
  }
  return `rgba(${+r}, ${+g}, ${+b}, ${o})`;
};
