import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectLoggedInUser } from "../../authSlice";

function Protected({ children }) {
    const user = useSelector(selectLoggedInUser)

    return !user ? <Navigate to='/login' replace={true}></Navigate> : children
}

export default Protected;