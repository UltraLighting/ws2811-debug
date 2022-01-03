// eslint-disable-next-line import/no-unresolved
import ledHandler from 'rpi-ws281x';

import allConfig from './config.json';

const config = allConfig.controller.neopixel;
const pixels = new Uint32Array(config.options.leds);

function rgbColor(red, green, blue, orgIntensity) {
  // default value for intensity
  const intensity = orgIntensity || 1;
  // eslint-disable-next-line no-bitwise
  return ((red * intensity) << 16) | ((green * intensity) << 8) | (blue * intensity);
}

function initNeopixels() {
  // initalize config:
  ledHandler.configure(config.options);
  // set pixel val:
  pixels.forEach((plx, i) => pixels[i] = rgbColor(config.dot2Color.red, config.dot2Color.green, config.dot2Color.blue, config.intensity.buttonOn));
}

initNeopixels();
