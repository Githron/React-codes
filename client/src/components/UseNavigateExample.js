import { Link, useNavigate } from "react-router-dom";
import React from "react";

const UseNavigateExample = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log("Div clicked!");
        navigate("/next-page");
    };

    // const handleClick2 = () => {
    //     console.log("Div clicked!");
    //     navigate("/change-style");
    // };

    const handleClick3 = () => {
        console.log("Div clicked!");
        window.location.href = "https://facebook.com";
      };

      const handleClick4 = () => {
        console.log("Div clicked!");
        window.location.href = "/getIp";
      };
      
      

    return (
        <div>

            <div onClick={handleClick}>go NextPage</div>



            <Link to={"/change-style"}>
                <div>go to ChangeStyle</div>
            </Link>

            

            <div onClick={handleClick3}>
                outside link
            </div>

            <div onClick={handleClick4}>
                Get ip
            </div>


        </div>
    );
};

export default UseNavigateExample;
