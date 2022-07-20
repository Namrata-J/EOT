import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const RequiresAuth = ({ children }) => {

    const { isUserLoggedIn } = useSelector((store) => store.auth);
    const location = useLocation();

    return isUserLoggedIn ? children : <Navigate to="/login" state={{ from: location }} replace />
}

export { RequiresAuth };