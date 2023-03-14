import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { playSound } from "./sound";

const Music2 = () => {
    useEffect(() => {
        playSound();

        // Clean up function to stop the sound when the component unmounts
        // return () => {
        //   pauseSound();
        // };
    }, []);

    // rest of the component code

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
            <button onClick={goHomebutton}>Home</button>

            <button onClick={goNavigate}>go navigate</button>
        </div>
    );
};

export default Music2;
