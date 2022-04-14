import BackLog from "./backToLogin";

const BackToLogin = ({ children }) => {
  return <BackLog onClick={() => { /* rout to Login page */ }}>{children}</BackLog>;
};

export default BackToLogin;
