import { Navigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useContext";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};
