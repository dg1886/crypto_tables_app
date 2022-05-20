import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MocUsers from "../common/users.json";
import Button from "../components/CommonUI/Button";
import FlexBox from "../components/CommonUI/FlexBox";
import Logo from "../components/CommonUI/Icons/Logo";
import Input from "../components/CommonUI/Input";
import StyledLink from "../components/CommonUI/StyledLink";
import { validationsLogin } from "../components/Helpers/formValidation/validationsForForm";
import Modal from "../components/Modal";
import Typography from "../components/Typography";
import useForm from "../hooks/useForm";

const LoginPage = () => {
  const navigate = useNavigate();

  const [isModalActive, setIsModalActive] = useState(false);

  const initialFormState = {
    email: "", password: "",
  };

  const onSubmit = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    const users = Array.isArray(storedUsers) ? storedUsers : [];
    const checkUser = [...users, ...MocUsers].find(
      (item) => item.password === values.password && item.email === values.email,
    );
    if (isValid && !!checkUser) {
      navigate("/dashboard");
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: values.email,
          role: checkUser.role,
        }),
      );
    }

    setIsModalActive(true);
  };

  const {
    values, errors, isValid, changeHandler, submitHandler, touched,
  } = useForm(initialFormState, validationsLogin, onSubmit);

  return (
    <FlexBox
      height="100vh"
      width="100%"
      flexDirection="column"
      backColor="secondary"
    >

      {isModalActive && (
      <Modal
        active={isModalActive}
        hideModal={() => setIsModalActive(false)}
        title="Email or Password is Wrong!"
      >
        Please try again
      </Modal>
      )}

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
              onChange={changeHandler}
              value={values.email}
              placeholder="Email"
            />
            <Typography variant="form_validation">{touched.email && errors.email}</Typography>
          </FlexBox>

          <FlexBox flexDirection="column" width="100%">
            <Input
              name="password"
              type="password"
              onChange={changeHandler}
              value={values.password}
              placeholder="Password"
            />
            <Typography variant="form_validation">{touched.password && errors.password}</Typography>
          </FlexBox>

        </FlexBox>
        <Button onClick={submitHandler} disabled={!isValid || Object.keys(touched).length === 0}>Submit</Button>
        <StyledLink href="/registration" content="or register" padding="1.25rem 0 0.3rem 0" />
      </FlexBox>

    </FlexBox>
  );
};

export default LoginPage;
