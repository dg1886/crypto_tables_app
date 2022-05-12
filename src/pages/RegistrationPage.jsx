import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/CommonUI/Button";
import FlexBox from "../components/CommonUI/FlexBox";
import Logo from "../components/CommonUI/Icons/Logo";
import Input from "../components/CommonUI/Input";
import StyledLink from "../components/CommonUI/StyledLink";
import Modal from "../components/Modal";
import Typography from "../components/Typography";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  function redirect() {
    setShowModal(true);
    setTimeout(() => navigate("/login"), 3000);
  }

  const onInputChange = (e) => {
    const {
      name,
      value,
    } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    const {
      name,
      value,
    } = e.target;
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
          } else if (!emailRegexp.test(String(value)
            .toLowerCase())) {
            stateObj[name] = "Invalid email. Please check!";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (passwordRegexp.test(String(value)
            .toLowerCase())) {
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

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (passwordRegexp.test(String(value)
            .toLowerCase())) {
            stateObj[name] = "Only latin letters and numbers";
          } else if (value.length < 3 || value.length > 10) {
            stateObj[name] = "No less than 3 and more than 10 characters";
          } else if (input.password && value !== input.password) {
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
    const users = Array.isArray(storedUsers)
      ? storedUsers
      : [];

    const newUsers = [
      ...users,
      {
        email: input.email,
        password: input.password,
        role: "user",
      },
    ];
    localStorage.setItem("users", JSON.stringify(newUsers));

    redirect();
  };

  const isDisable = input.email === ""
    || input.password === ""
    || input.confirmPassword === ""
    || error.email
    || error.password
    || error.confirmPassword;

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
        padding="2rem 0"
        flexDirection="column"
        justifyContent="space-evenly"
        backColor="background"
        radius="1.25rem"
      >
        <FlexBox>
          <Logo />
          <Typography variant="bold_24px" padding="0 0.625rem">Registration</Typography>
        </FlexBox>

        <FlexBox flexDirection="column" height="15.625rem" width="100%" justifyContent="space-evenly">

          <FlexBox flexDirection="column" width="100%">
            <Input
              name="email"
              type="email"
              placeholder="Email"
              onChange={onInputChange}
              value={input.email}
              onBlur={validateInput}
            />
            <Typography variant="form_validation">{error.email && error.email}</Typography>
          </FlexBox>

          <FlexBox flexDirection="column" width="100%">
            <Input
              name="password"
              type="password"
              placeholder="Password"
              onChange={onInputChange}
              value={input.password}
              onBlur={validateInput}
            />
            <Typography variant="form_validation">{error.password && error.password}</Typography>
          </FlexBox>

          <FlexBox flexDirection="column" width="100%">
            <Input
              id="confirm_password"
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              onChange={onInputChange}
              value={input.confirmPassword}
              onBlur={validateInput}
            />
            <Typography variant="form_validation">{error.confirmPassword && error.confirmPassword}</Typography>
          </FlexBox>

        </FlexBox>

        <Button disabled={isDisable} onClick={onSubmit}>
          Submit
        </Button>

        <StyledLink href="/login" content="to login" padding="1.25rem 0 0.313rem 0" />
      </FlexBox>

      <Modal
        active={showModal}
        hideModal={() => setShowModal(false)}
        title="You have successfully registered"
      >Please use the login page..
      </Modal>
    </FlexBox>
  );
};

export default RegistrationPage;
