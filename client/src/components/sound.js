import { Howl } from 'howler';
import soundFile from './quiz-music.mp3';

export const soundObject = new Howl({
  src: [soundFile],
  autoplay: false,
  once: true,
});
