import { Howl } from 'howler';
import soundFile from './quiz-music.mp3';

export const soundObject = new Howl({
  src: [soundFile],
  volume: 0.5,
  autoplay: true,
  once: true,
});
