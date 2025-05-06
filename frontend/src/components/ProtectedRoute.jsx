import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children}) => {
    const {isauthenticated} = useSelector((store)=>store.auth);

    if(!isauthenticated){
        return <Navigate to="/login"/>
    }

    return children;
}
export const AuthenticatedUser = ({children}) => {
    const {isauthenticated} = useSelector((store)=>store.auth);

    if(isauthenticated){
        return <Navigate to="/"/>
    }

    return children;
}

export const AdminRoute = ({children}) => {
    const {user, isauthenticated} = useSelector((store)=>store.auth);
    if(!isauthenticated){
        return <Navigate to="/login"/>
    }

    if(user?.role !== "instructor"){
        return <Navigate to="/"/>
    }

    return children;
}