export function scaleToFit (iw, ih, fw, fh) {
  return Math.min(fw / iw, fh / ih)
}
