import { useNavigate } from "react-router-dom";

export const useLogout = (navigateTo) => {
  const navigate = useNavigate();

  return () => {
    localStorage.setItem("user", "");
    navigate(navigateTo || "/login");
  };
};
