import React, { useState } from "react";

function ChangeStyle() {


// using useState
    const [backgroundColor, setBackgroundColor] = useState("white")

    const handleClick = () => {
        setBackgroundColor("lightblue");
    };

    const divStyle = {
        backgroundColor: backgroundColor
    };



// using vanilla like javaacript 
    const handleClick2 = () => {
        const nextDiv = document.getElementById("div2");
        nextDiv.style.backgroundColor = "lightblue";
    };

    return (
        <div>
            <div onClick={handleClick} style={divStyle} >
                <h1>click2 using vanilla like</h1>
            </div>


            <div id="div2" onClick={handleClick2}>
                <h1>click2 using useState</h1>
            </div>
        </div>
    );
}

export default ChangeStyle;
