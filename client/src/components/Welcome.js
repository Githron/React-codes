import { useNavigate } from "react-router-dom";

import React from "react";

function WelcomePage() {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log("go navigate");
        navigate("/navigate");
    };

    const handleClick2 = () => {
        navigate("/music");
    }

    return (
        <div>

          <h1> Welcome</h1>

            <div onClick={handleClick}>
                <h3>go to navigate</h3>
            </div>

            <div onClick={handleClick2} className="music">
                <h3>music</h3>
            </div>
        </div>
    );
}

export default WelcomePage;
