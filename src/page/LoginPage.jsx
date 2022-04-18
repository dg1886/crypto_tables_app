import { useState } from "react";

import MocUsers from "../common/users.json";
import Button from "../components/CommonUI/Button";
import FlexBox from "../components/CommonUI/FlexBox";
import Logo from "../components/CommonUI/Icons/Logo";
import Input from "../components/CommonUI/Input";
import Text from "../components/CommonUI/Text";
import Tittle from "../components/CommonUI/Tittle";
import BackToReg from "../components/Login/backToReg";

const LoginPage = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
    const emailRegexp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const passwordRegexp = /[^A-Z-a-z-0-9]/g;
    setErrors((prev) => {
      const stateObj = {
        ...prev,
        [name]: "",
      };

      switch (name) {
        case "email":
          if (!value) {
            stateObj[name] = "Please enter Email.";
          } else if (!emailRegexp.test(String(value).toLowerCase())) {
            stateObj[name] = "Invalid email. Please check!";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (passwordRegexp.test(String(value).toLowerCase())) {
            stateObj[name] = "Only latin letters and numbers";
          } else if (value.length < 3 || value.length > 10) {
            stateObj[name] = "No less than 3 and more than 10 characters";
          }
          break;

        default:
          break;
      }
      return stateObj;
    });
  };

  const onSubmit = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    const users = Array.isArray(storedUsers) ? storedUsers : [];
    const checkUser = [...users, ...MocUsers].find(
      (item) => item.email === inputs.email,
    );
    if (checkUser?.password === inputs.password) {
      // navigate("") for future routing;
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: inputs.email,
          role: checkUser.role,
        }),
      );
    }
  };

  return (
    <FlexBox
      height="100vh"
      width="100%"
      flexDirection="column"
      backColor="secondary"

    >
      <FlexBox
        width="50%"
        height="60%"
        padding="6.25rem 0"
        flexDirection="column"
        justifyContent="space-evenly"
        backColor="background"
        radius="1.25rem"
      >
        <FlexBox>
          <Logo />
          <Tittle padding="0 0.625rem">Login</Tittle>
        </FlexBox>

        <FlexBox flexDirection="column" height="15.625rem" justifyContent="space-evenly">

          <FlexBox flexDirection="column">
            <Input
              name="email"
              type="email"
              onChange={onChange}
              value={inputs.email}
              placeholder="Email"
            />
            <Text height="1.125rem">{errors.email && errors.email}</Text>
          </FlexBox>

          <FlexBox flexDirection="column">
            <Input
              name="password"
              type="password"
              onChange={onChange}
              value={inputs.password}
              placeholder="Password"
            />
            <Text height="1.125rem">{errors.password && errors.password}</Text>
          </FlexBox>

        </FlexBox>
        <Button onClick={onSubmit}>Submit</Button>
        <BackToReg>to registration</BackToReg>
      </FlexBox>
    </FlexBox>
  );
};

export default LoginPage;
