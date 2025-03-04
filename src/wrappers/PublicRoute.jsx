import useCurrentUser from "@/store/currentUserStore";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ component }) => {
  const { userId } = useCurrentUser((state) => state.user);

  return userId ? <Navigate to="/" /> : component;
};

export default PublicRoute;
