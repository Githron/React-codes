import "./App.css";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./components/Welcome";
import NextPage from "./components/NextPage";


function App() {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage />}></Route>
            <Route path="/next-page" element={<NextPage />}></Route>
        </Routes>
    );
}

export default App;
