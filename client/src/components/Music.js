import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Howl } from 'howler';
import soundFile from './quiz-music.mp3';

const Music = () => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStopped, setIsStopped] = useState(false);

  useEffect(() => {
    // create the sound object when the component mounts
    const soundObject = new Howl({
      src: [soundFile],
      autoplay: true,
      loop: true,
    });

    // update the playing state when the sound starts playing
    soundObject.on('play', () => {
      setIsPlaying(true);
    });

    // update the playing state when the sound is stopped
    soundObject.on('stop', () => {
      setIsPlaying(false);
      setIsStopped(true);
    });

    // update the playing state when the sound ends
    soundObject.on('end', () => {
      setIsPlaying(false);
    });

    setSound(soundObject);

    // clean up the sound object when the component unmounts
    return () => {
      soundObject.unload();
    };
  }, []);

  const logSoundState = () => {
    console.log(`Sound state: ${sound.state()}, Playing state: ${isPlaying}`);
  };

  const toggleStop = () => {
    if (isStopped) {
      sound.play();
      setIsPlaying(true);
      setIsStopped(false);
    } else {
      sound.stop();
      setIsPlaying(false);
      setIsStopped(true);
    }
  };

  const navigate = useNavigate();

    const goHomebutton = () => {
        navigate("/");
    };

    const music2 = () => {
      navigate("/music2");
  };
  return (
    <div>
      <h1>Autoplay music</h1>
      <button onClick={logSoundState}>Log Sound State</button>
      <button onClick={toggleStop}>{isStopped ? 'Play' : 'Stop'}</button>
      <button onClick={goHomebutton}>Home</button>
      <button onClick={music2}>Music2</button>

    </div>
  );
};

export default Music;
