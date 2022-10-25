import { RequiresAuth } from "../components/";
import { Routes, Route } from "react-router-dom";
import { LandingPage, HomePage, ExplorePage, BookmarkPage, NotificationPage, ProfilePage, Auth, SinglePostListingPage, NoRoutesMatchPage } from "../screens/";

const RouteComp = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<RequiresAuth><HomePage /></RequiresAuth>} />
                <Route path="/explore" element={<RequiresAuth><ExplorePage /></RequiresAuth>} />
                <Route path="/bookmark" element={<RequiresAuth><BookmarkPage /></RequiresAuth>} />
                <Route path="/notification" element={<RequiresAuth><NotificationPage /></RequiresAuth>} />
                <Route path="/profile/:profileId" element={<RequiresAuth><ProfilePage /></RequiresAuth>} />
                <Route path="/post/:postId" element={<RequiresAuth><SinglePostListingPage /></RequiresAuth>} />
                <Route path="/signup" element={<Auth.SignUpPage />} />
                <Route path="/login" element={<Auth.LogInPage />} />
                <Route path="/logout" element={<Auth.LogOutPage />} />
                <Route path="*" element={<NoRoutesMatchPage />} />
            </Routes>
        </div>
    );
}

export { RouteComp };