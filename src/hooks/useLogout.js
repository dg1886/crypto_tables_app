import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useLogout = (navigateTo) => {
  const navigate = useNavigate();

  return useCallback(() => {
    localStorage.setItem("user", "");
    navigate(navigateTo);
  }, [navigateTo]);
};
