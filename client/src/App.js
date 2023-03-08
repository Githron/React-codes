import "./App.css";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./components/Welcome";
import NextPage from "./components/NextPage";
import UseNavigateExample from "./components/UseNavigateExample";
import ChangeStyle from "./components/changeStyle";


function App() {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage />}></Route>
            <Route path="/next-page" element={<NextPage />}></Route>
            <Route path="/navigate" element={<UseNavigateExample />}></Route>
            <Route path="/change-style" element={<ChangeStyle />}></Route>

        </Routes>
    );
}

export default App;
