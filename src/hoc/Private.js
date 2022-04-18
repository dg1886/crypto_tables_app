import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const username = localStorage.getItem("user");
  return username ? children : <Navigate to="/login" />;
};

export default Private;
