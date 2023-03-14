import { useEffect, useState } from "react";
import Axios from "axios";

const GetIp = () => {
    // get ip address
    const [ip, setIp] = useState("");
    useEffect(() => {
        getUserIp();
    }, []);

    const getUserIp = async () => {
        const ip = await Axios.get("https://ipapi.co/json");
        console.log(ip.data);
        setIp(ip.data.ip);
    };
    // get ip ends

    return (
        <div>
            <h1>IP Address: {ip}</h1>
        </div>
    );
};
export default GetIp;
