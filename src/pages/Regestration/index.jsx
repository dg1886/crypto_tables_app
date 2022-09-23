import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/CommonUI/Button";
import FlexBox from "../../components/CommonUI/FlexBox";
import Logo from "../../components/CommonUI/Icons/Logo";
import Input from "../../components/CommonUI/Input";
import StyledLink from "../../components/CommonUI/StyledLink";
import Typography from "../../components/CommonUI/Typography";
import { validationsRegestration } from "../../components/Helpers/formValidation/validationsForForm";
import Modal from "../../components/ModalAuth";
import useForm from "../../hooks/useForm";
import { ContentWrapper, MainWrapper } from "./style";

const RegistrationPage = () => {
  const navigate = useNavigate();

  const [isModalActive, setIsModalActive] = useState(false);

  const initialFormState = {
    email: "", password: "", confirmPassword: "",
  };

  const onSubmit = () => {
    if (isValid) {
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

      setIsModalActive(true);
      setTimeout(() => navigate("/login"), 2000);
    }
    if (!isValid) {
      setIsModalActive(true);
    }
  };

  const {
    values, errors, isValid, changeHandler, submitHandler, touched,
  } = useForm(initialFormState, validationsRegestration, onSubmit);

  return (
    <MainWrapper height="100vh" width="100%" flexDirection="column">

      {isModalActive && (
        <Modal
          active={isModalActive}
          hideModal={() => setIsModalActive(false)}
          title="You have successfully registered"
        >
          Please use the login page..
        </Modal>
      )}

      <ContentWrapper width="50%" height="60%" flexDirection="column" justifyContent="space-evenly">
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
              onChange={changeHandler}
              value={values.email}
            />
            <Typography variant="form_validation">{touched.email && errors.email}</Typography>
          </FlexBox>

          <FlexBox flexDirection="column" width="100%">
            <Input
              name="password"
              type="password"
              placeholder="Password"
              onChange={changeHandler}
              value={values.password}
            />
            <Typography variant="form_validation">{touched.password && errors.password}</Typography>
          </FlexBox>

          <FlexBox flexDirection="column" width="100%">
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              onChange={changeHandler}
              value={values.confirmPassword}
            />
            <Typography variant="form_validation">{touched.confirmPassword && errors.confirmPassword}</Typography>
          </FlexBox>

        </FlexBox>

        <Button disabled={!isValid || Object.keys(touched).length === 0} onClick={submitHandler}>
          Submit
        </Button>

        <StyledLink href="/login" content="to login" padding="1.25rem 0 0.3rem 0" />
      </ContentWrapper>

    </MainWrapper>
  );
};

export default RegistrationPage;
