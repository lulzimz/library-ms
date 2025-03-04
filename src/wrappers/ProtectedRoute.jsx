import useCurrentUser from "@/store/currentUserStore";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { userId } = useCurrentUser(true);

  if (!userId) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
