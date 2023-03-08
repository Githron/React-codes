import { useNavigate } from "react-router-dom";

import React from "react";

function WelcomePage() {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log("go navigate");
        navigate("/navigate");
    };

    return (
        <div>

          <h1> Welcome</h1>

            <div onClick={handleClick}>
                <h3>go to navigate</h3>
            </div>
        </div>
    );
}

export default WelcomePage;
