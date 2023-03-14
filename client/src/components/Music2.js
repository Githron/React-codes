import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { playSound, stopSound, soundObject } from "./sound";

const Music2 = () => {
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        playSound();

        // return () => {
        //   pauseSound();
        // };
    }, []);

    const handleCheckPlayingState = () => {
        setIsPlaying(soundObject.playing());
        console.log("Sound is playing: ", soundObject.playing());
    };

    const navigate = useNavigate();

    const goHomebutton = () => {
        navigate("/");
    };

    const goNavigate = () => {
        navigate("/navigate");
    };

    const stopMusic = () => {
        if (soundObject.playing()) {
            stopSound();
            setIsPlaying(false);
        } else {
            playSound();
            setIsPlaying(true);
        }
    };

    return (
        <div>
            <h1>Autoplay music2</h1>
            <button onClick={goHomebutton}>Home</button>

            <button onClick={goNavigate}>go navigate</button>

            <button onClick={handleCheckPlayingState}>
                Check Playing State
            </button>

            <button onClick={stopMusic}>
                {isPlaying ? "Stop" : "Play"}
            </button>
        </div>
    );
};

export default Music2;

