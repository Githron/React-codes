import "./App.css";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./components/Welcome";
import NextPage from "./components/NextPage";
import UseNavigateExample from "./components/UseNavigateExample";
import ChangeStyle from "./components/changeStyle";
import Music from "./components/Music";
import Music2 from "./components/Music2";
import GetIp from "./components/GetIp";


function App() {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage />}></Route>
            <Route path="/next-page" element={<NextPage />}></Route>
            <Route path="/navigate" element={<UseNavigateExample />}></Route>
            <Route path="/change-style" element={<ChangeStyle />}></Route>
            <Route path="/music" element={<Music />}></Route>
            <Route path="/music2" element={<Music2 />}></Route>
            <Route path="/getIp" element={<GetIp />}></Route>
            

        </Routes>
    );
}

export default App;
