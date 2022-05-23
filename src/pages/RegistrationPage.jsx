import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/CommonUI/Button";
import FlexBox from "../components/CommonUI/FlexBox";
import Logo from "../components/CommonUI/Icons/Logo";
import Input from "../components/CommonUI/Input";
import StyledLink from "../components/CommonUI/StyledLink";
import Modal from "../components/Modal";
import Typography from "../components/Typography";
import useForm from "../hooks/useForm";
import validate from "../utils/validateRegistration";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const {
    handleChange, handleSubmit, values, errors,
  } = useForm(submit, validate);

  function redirect() {
    setShowModal(true);
    setTimeout(() => navigate("/login"), 2000);
  }

  function submit() {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    const users = Array.isArray(storedUsers)
      ? storedUsers
      : [];

    const newUsers = [
      ...users,
      {
        email: values.email,
        password: values.password,
        role: "user",
      },
    ];
    localStorage.setItem("users", JSON.stringify(newUsers));

    redirect();
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

          <FlexBox flexDirection="column" width="100%">
            <Input
              id="confirm_password"
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              value={values.confirmPassword}
              onChange={handleChange}
            />
            <Typography variant="form_validation">{errors.confirmPassword}</Typography>
          </FlexBox>

        </FlexBox>

        <Button onClick={handleSubmit}>
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
