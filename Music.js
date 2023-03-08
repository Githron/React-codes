import React, { useState } from 'react';


const Music = () => {
  
  function handleButtonClick() {
    sound.play();
    sound.fade(0, 0.5, 1000); // fade in over 1 second
  }

  function handleStopButtonClick() {
    sound.fade(0.5, 0, 1000); // fade out over 1 second
    setTimeout(() => sound.stop(), 1000); // stop after 1 second
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Play Music</button>
      <button onClick={handleStopButtonClick}>Stop Music</button>
    </div>
  );
}

export default Music;