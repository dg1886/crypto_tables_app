import { useEffect } from "react";

const useClickOutside = (domNode, handler) => {
  useEffect(() => {
    const handleClick = (event) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  return domNode;
};

export default useClickOutside;
