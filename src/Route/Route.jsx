import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../screens/";

const RouteComp = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </div>
    );
}

export { RouteComp };