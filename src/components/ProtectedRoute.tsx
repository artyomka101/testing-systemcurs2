import { Navigate, Outlet } from "react-router";
import type { Role } from "../types";


type ProtectedRouteProps = {
    role: Role | null;
    allowedRole: Role;
};

export function ProtectedRoute({role,allowedRole}: ProtectedRouteProps) {
    if(!role){
        return <Navigate to="/login" replace />;
    }

    if(role!== allowedRole) {
        return (<Navigate to={role === "admin"? "/admin" : "/student/tests"} replace />);
    }

    return <Outlet/>;
}