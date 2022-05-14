import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MocUsers from "../common/users.json";
import Button from "../components/CommonUI/Button";
import FlexBox from "../components/CommonUI/FlexBox";
import Logo from "../components/CommonUI/Icons/Logo";
import Input from "../components/CommonUI/Input";
import StyledLink from "../components/CommonUI/StyledLink";
import Modal from "../components/Modal";
import Typography from "../components/Typography";

const LoginPage = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

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
      navigate("/dashboard");
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: inputs.email,
          role: checkUser.role,
        }),
      );
    }
    if (checkUser?.password !== inputs.password) {
      setShowModal(true);
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
          <Typography variant="bold_24px" padding="0 0.625rem">Login</Typography>
        </FlexBox>

        <FlexBox flexDirection="column" height="15.625rem" width="100%" justifyContent="space-evenly">

          <FlexBox flexDirection="column" width="100%">
            <Input
              name="email"
              type="email"
              onChange={onChange}
              value={inputs.email}
              placeholder="Email"
            />
            <Typography variant="form_validation">{errors.email && errors.email}</Typography>
          </FlexBox>

          <FlexBox flexDirection="column" width="100%">
            <Input
              name="password"
              type="password"
              onChange={onChange}
              value={inputs.password}
              placeholder="Password"
            />
            <Typography variant="form_validation">{errors.password && errors.password}</Typography>
          </FlexBox>

        </FlexBox>
        <Button onClick={onSubmit}>Submit</Button>
        <StyledLink href="/registration" content="or register" padding="1.25rem 0 0.313rem 0" />
      </FlexBox>

      <Modal
        active={showModal}
        hideModal={() => setShowModal(false)}
        title="Registration failed"
      >Please try again
      </Modal>;
    </FlexBox>
  );
};

export default LoginPage;