import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import MocUsers from "../../../common/users.json";
import { baseTheme } from "../../../styles/theme";
import Button from "../../UI-compontents/Button";
import FlexWrapper from "../../UI-compontents/FlexWrapper";
import LogoImage from "../../UI-compontents/LogoImage";
import Paragraph from "../../UI-compontents/Paragraph";
import StyledLink from "../../UI-compontents/StyledLink";
import Title from "../../UI-compontents/Title";
import Modal from "../modal";
import { FormInput, FormLabel } from "../styled";

const LoginComponent = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    // eslint-disable-next-line no-use-before-define
    validateInput(e);
  };

  const validateInput = (e) => {
    const { name, value } = e.target;
    const emailRegexp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const passwordRegexp = /[^A-Z-a-z-0-9]/g;
    setError((prev) => {
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
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj.confirmPassword = "Password and Confirm Password does not match.";
          } else {
            stateObj.confirmPassword = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        default:
          break;
      }
      return stateObj;
    });
  };

  const login = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    const users = Array.isArray(storedUsers) ? storedUsers : [];
    const checkUser = [...users, ...MocUsers].find(
      (item) => item.email === input.email,
    );

    if (checkUser?.password === input.password) {
      navigate("/city/London");
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: input.email,
          role: checkUser.role,
        }),
      );
    }
    if (checkUser?.password !== input.password) {
      setShowModal(true);
    }
  };

  return (
    <FlexWrapper height="100vh" backColor={baseTheme.colors.primary}>
      <FlexWrapper flexDirection="row" margin="0 0 20px 0" backColor="none">
        <LogoImage />
        <Title>Weather</Title>
      </FlexWrapper>

      <FlexWrapper
        width="40%"
        height="50%"
        justifyContent="space-evenly"
        backColor={baseTheme.colors.secondary}
      >
        <Paragraph textTransform="uppercase" fontWeight="bold">
          Sign in:
        </Paragraph>

        <FlexWrapper width="70%" position="relative" overflow="initial">
          <FormLabel htmlFor="login-email" />
          <FormInput
            id="login-email"
            name="email"
            type="email"
            placeholder="Email"
            onBlur={validateInput}
            value={input.email}
            onChange={onInputChange}
          />
          {error.email && (
            <Paragraph
              margin="105px 0 0 0"
              position="absolute"
              color={baseTheme.colors.red}
            >
              {error.email}
            </Paragraph>
          )}
        </FlexWrapper>

        <FlexWrapper width="70%" position="relative" overflow="initial">
          <FormLabel htmlFor="login-password" />
          <FormInput
            id="login-password"
            name="password"
            type="password"
            placeholder="Password"
            onBlur={validateInput}
            value={input.password}
            onChange={onInputChange}
          />
          {error.password && (
            <Paragraph
              margin="105px 0 0 0"
              position="absolute"
              color={baseTheme.colors.red}
            >
              {error.password}
            </Paragraph>
          )}
        </FlexWrapper>

        <Button type="submit" onClick={login}>
          Sign in
        </Button>
        <StyledLink href="/registration" content="OR REGISTER" />
      </FlexWrapper>

      <Modal
        active={showModal}
        hideModal={() => setShowModal(false)}
        title="Login failed"
        footer={(
          <Button
            width="170px"
            height="50px"
            onClick={() => setShowModal(false)}
          >
            Accept
          </Button>
        )}
      >
        Please try again or register
      </Modal>
    </FlexWrapper>
  );
};

export default LoginComponent;
