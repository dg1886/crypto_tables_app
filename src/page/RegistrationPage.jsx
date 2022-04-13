import { useState } from "react";
import { useTheme } from "styled-components";

import MocUsers from "../common/users.json";
import Button from "../components/CommonUI/Button";
import FlexBox from "../components/CommonUI/FlexBox";
import Logo from "../components/commonUI/Icons/Logo";
import Input from "../components/CommonUI/Input";
import Text from "../components/CommonUI/Text";
import Tittle from "../components/CommonUI/Tittle";
import BackToLogin from "../components/Registration/backToLogin/backToLogin";

const RegistrationPage = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { colors } = useTheme();

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
          } else if (inputs.confirmPassword && value !== inputs.confirmPassword) {
            stateObj.confirmPassword = "Password and Confirm Password does not match.";
          } else {
            stateObj.confirmPassword = inputs.confirmPassword
              ? ""
              : errors.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (passwordRegexp.test(String(value).toLowerCase())) {
            stateObj[name] = "Only latin letters and numbers";
          } else if (value.length < 3 || value.length > 10) {
            stateObj[name] = "No less than 3 and more than 10 characters";
          } else if (inputs.password && value !== inputs.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
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
      backColor={colors.darkGrey}

    >
      <FlexBox
        width="50%"
        height="60%"
        padding="100px 0"
        flexDirection="column"
        justifyContent="space-evenly"
        backColor={colors.dark}
        radius="20px"
      >
        <FlexBox>
          <Logo />
          <Tittle padding="0 10px">Registration</Tittle>
        </FlexBox>

        <FlexBox flexDirection="column" height="250px" justifyContent="space-evenly">

          <FlexBox flexDirection="column">
            <Input
              name="email"
              type="email"
              placeholder="Email"
              onChange={onChange}
              value={inputs.email}

            />
            <Text height="18px">{errors.email && errors.email}</Text>
          </FlexBox>

          <FlexBox flexDirection="column">
            <Input
              name="password"
              type="password"
              placeholder="Password"
              onChange={onChange}
              value={inputs.password}

            />
            <Text height="18px">{errors.password && errors.password}</Text>
          </FlexBox>

          <FlexBox flexDirection="column">
            <Input
              id="confirm_password"
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              onChange={onChange}
              value={inputs.confirmPassword}

            />
            <Text height="18px">{errors.confirmPassword && errors.confirmPassword}</Text>
          </FlexBox>

        </FlexBox>

        <Button onClick={onSubmit}>
          <Text>Submit</Text>
        </Button>

        <BackToLogin>to login</BackToLogin>
      </FlexBox>

    </FlexBox>
  );
};

export default RegistrationPage;
