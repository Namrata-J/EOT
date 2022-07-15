import { useAuth } from "../contexts/auth-context";
import { Navigate } from "react-router-dom";

const RequiresAuth = ({ children }) => {
    
    const { isUserLoggedIn } = useAuth();

    return isUserLoggedIn? children : <Navigate to="/login" replace/>
}

export { RequiresAuth };