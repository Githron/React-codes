import { Howl } from "howler";
import soundFile from "./quiz-music.mp3";

export const soundObject = new Howl({
  src: [soundFile],
  autoplay: false,
  loop: true,
});

export function playSound() {
  if (!soundObject.playing()) {
    soundObject.play();
  }
}

export function stopSound() {
  if (soundObject.playing()) {
    soundObject.stop();
  }
}
