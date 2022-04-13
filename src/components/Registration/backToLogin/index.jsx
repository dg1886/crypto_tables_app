import Back from "./backToLogin";

const BackToLogin = ({ children }) => {
  return <Back onClick={() => { "navigate(\"\");"; }}>{children}</Back>;
};

export default BackToLogin;
