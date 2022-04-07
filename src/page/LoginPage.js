import { Controller, useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";

import MocUsers from "../common/users.json";
import Button from "../components/CommonUI/Button";
import FlexBox from "../components/CommonUI/FlexBox";
import Input from "../components/CommonUI/Input";
import Text from "../components/CommonUI/Text";
import Tittle from "../components/CommonUI/Tittle";

const LoginPage = () => {
  // const navigate = useNavigate();

  const { colors } = useTheme();

  const { control, handleSubmit } = useForm({
    defaultValues: { email: "" },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    const users = Array.isArray(storedUsers) ? storedUsers : [];
    const checkUser = [...users, ...MocUsers].find(
      (item) => item.email === data.email,
    );
    if (checkUser?.password === data.password) {
      // navigate("");
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: data.email,
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

        <Tittle>Login</Tittle>

        <FlexBox flexDirection="column" height="250px" justifyContent="space-evenly">
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
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: { value: true, message: "Please enter Password." } }}
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

        </FlexBox>
        <Button onClick={() => handleSubmit(onSubmit)}>Submit</Button>
      </FlexBox>
    </FlexBox>
  );
};

export default LoginPage;
