import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext);
    if(loading){
        return <div className="text-center text-xl font-bold mt-4">Loading....</div>
    }
    if(user){
        return children;
    }
    
    return (
        <Navigate to="/login"></Navigate>
    );
};

export default PrivateRoute;