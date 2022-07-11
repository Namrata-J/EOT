import { Routes, Route } from "react-router-dom";
import { LandingPage, HomePage, ExplorePage, BookmarkPage, NotificationPage, ProfilePage, Auth } from "../screens/";

const RouteComp = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/bookmark" element={<BookmarkPage />} />
                <Route path="/notification" element={<NotificationPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/signup" element={<Auth.SignUpPage />} />
                <Route path="/login" element={<Auth.LogInPage />} />
                <Route path="/logout" element={<Auth.LogOutPage />} />
            </Routes>
        </div>
    );
}

export { RouteComp };