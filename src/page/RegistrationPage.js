import { Controller, useForm } from "react-hook-form";
import { useTheme } from "styled-components";

import Button from "../components/CommonUI/Button";
import FlexBox from "../components/CommonUI/FlexBox";
import Logo from "../components/commonUI/Icons/Logo";
import Input from "../components/CommonUI/Input";
import Text from "../components/CommonUI/Text";
import Tittle from "../components/CommonUI/Tittle";
import BackToLogin from "../components/Registration/backToLogin";

const RegistrationPage = () => {
  const { colors } = useTheme();

  const {
    control, handleSubmit, getValues, setError, formState: { errors },
  } = useForm({
    defaultValues: { email: "" },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    if (getValues("password") !== getValues("confirm-password")) {
      setError("confirm", { type: "focus", shouldFocus: true, message: "passwords dont indentificate" });
      return;
    }
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    const users = Array.isArray(storedUsers) ? storedUsers : [];
    const newUsers = [
      ...users,
      {
        email: data.email,
        password: data.password,
        role: "user",
      },
    ];
    localStorage.setItem("users", JSON.stringify(newUsers));
    // navigate('login')
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
        height="70%"
        padding=" 60px 0"
        flexDirection="column"
        justifyContent="space-evenly"
        backColor={colors.dark}
        radius="20px"
      >
        <FlexBox>
          <Logo />
          <Tittle padding="0 10px">Registration</Tittle>
        </FlexBox>

        <FlexBox flexDirection="column" height="300px" justifyContent="space-evenly">
          <Controller
            name="email"
            control={control}
            rules={{
              required: { value: true, message: "Please enter Email." },
              pattern: {
                value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                message: "Invalid email. Please check!",
              },
            }}
            render={({
              field: { onChange, value }, fieldState: {
                error,
              },
            }) => (
              <FlexBox flexDirection="column">
                <Input onChange={onChange} value={value} placeholder="Email" />
                <Text height="18px">{error && error.message}</Text>
              </FlexBox>
            )}
          /><Controller
            name="password"
            control={control}
            rules={{
              maxLength: { value: 10, message: "No less than 3 and more than 10 characters" },
              minLength: { value: 3, message: "No less than 3 and more than 10 characters" },
              pattern: {
                value: /^[A-Z-a-z-0-9]/g,
                message: "Only latin letters and numbers",
              },
            }}
            render={({
              field: { onChange, value }, fieldState: {
                error,
              },
            }) => (
              <FlexBox flexDirection="column">
                <Input onChange={onChange} value={value} placeholder="Password" />
                <Text height="18px">{error && error.message}</Text>
              </FlexBox>
            )}
          />
          <Controller
            name="confirm-password"
            control={control}
            rules={{
              required: { value: true, message: "Please confirm Password." },
              pattern: {
                value: /^[A-Z-a-z-0-9]/g,
                message: "Only latin letters and numbers.",
              },
            }}
            render={({
              field: { onChange, value }, fieldState: {
                error,
              },
            }) => (
              <FlexBox flexDirection="column">
                <Input onChange={onChange} value={value} placeholder="Confirm Password" />
                <Text height="18px">{error ? error.message : errors.confirm?.message}</Text>
              </FlexBox>
            )}
          />

        </FlexBox>
        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
        <BackToLogin>to login</BackToLogin>
      </FlexBox>

    </FlexBox>
  );
};

export default RegistrationPage;
