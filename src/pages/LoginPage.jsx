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
import useForm from "../hooks/useForm";
import validate from "../utils/validateLogin";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const {
    handleChange, handleSubmit, values, errors,
  } = useForm(submit, validate);

  function submit() {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    const users = Array.isArray(storedUsers) ? storedUsers : [];
    const checkUser = [...users, ...MocUsers].find(
      (item) => item.email === values.email,
    );
    if (checkUser?.password === values.password) {
      navigate("/dashboard");
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: values.email,
          role: checkUser.role,
        }),
      );
    }
    if (checkUser?.password !== values.password) {
      setShowModal(true);
    }
  }

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

        <FlexBox
          onSubmit={handleSubmit}
          flexDirection="column"
          height="15.625rem"
          width="100%"
          justifyContent="space-evenly"
        >

          <FlexBox flexDirection="column" width="100%">
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />
            <Typography variant="form_validation">{errors.email}</Typography>
          </FlexBox>

          <FlexBox flexDirection="column" width="100%">
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
            <Typography variant="form_validation">{errors.password}</Typography>
          </FlexBox>

        </FlexBox>
        <Button onClick={handleSubmit}>Submit</Button>
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
