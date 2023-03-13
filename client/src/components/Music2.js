import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { soundObject } from './sound.js';

const Music2 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStopped, setIsStopped] = useState(false);

  useEffect(() => {
    soundObject.play();
    setIsPlaying(true);

    soundObject.on('play', () => {
      setIsPlaying(true);
    });
  
    soundObject.on('stop', () => {
      setIsPlaying(false);
      setIsStopped(true);
    });
  
    soundObject.on('end', () => {
      setIsPlaying(false);
    });

    return () => {
      soundObject.stop();
      setIsPlaying(false);
      setIsStopped(true);
    };
  }, []);

  // rest of the component code



  const logSoundState = () => {
    console.log(`Sound state: ${soundObject.state()}, Playing state: ${isPlaying}`);
  };

  const toggleStop = () => {
    if (isStopped) {
      soundObject.play();
      setIsPlaying(true);
      setIsStopped(false);
    } else {
      soundObject.stop();
      setIsPlaying(false);
      setIsStopped(true);
    }
  };

  const navigate = useNavigate();

  const goHomebutton = () => {
    navigate("/");
  };

  const goNavigate = () => {
    navigate("/navigate");
  };

  return (
    <div>
      <h1>Autoplay music2</h1>
      <button onClick={logSoundState}>Log Sound State</button>
      <button onClick={toggleStop}>{isStopped ? 'Play' : 'Stop'}</button>
      <button onClick={goHomebutton}>Home</button>
     

      <button onClick={goNavigate}>go navigate</button>
    </div>
  );
};

export default Music2;
