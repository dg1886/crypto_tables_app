import { Controller, useForm } from "react-hook-form";

import Button from "../components/CommonUI/Button";
import FlexBox from "../components/CommonUI/FlexBox";
import Input from "../components/CommonUI/Input";
import Text from "../components/CommonUI/Text";
import Tittle from "../components/CommonUI/Tittle";
import { baseTheme } from "../styles/theme";

const LoginPage = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: { email: "" },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FlexBox
      height="100vh"
      width="100%"
      flexDirection="column"
      backColor={baseTheme.colors.darkGrey}

    >

      <FlexBox
        width="50%"
        height="60%"
        flexDirection="column"
        justifyContent="space-evenly"
        backColor={baseTheme.colors.dark}
        radius="20px"
      >

        <Tittle>Login</Tittle>

        <Controller
          name="email"
          control={control}
          rules={{ required: { value: true, message: "required" } }}
          render={({
            field: { onChange, value }, fieldState: {
              error,
            },
          }) => (
            <FlexBox>
              <Input onChange={onChange} value={value} />
              {error && <Text>{error.message}</Text>}
            </FlexBox>
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: { value: true, message: "required" } }}
          render={({
            field: { onChange, value }, fieldState: {
              error,
            },
          }) => (
            <FlexBox>
              <Input onChange={onChange} value={value} />
              {error && <Text>{error.message}</Text>}
            </FlexBox>
          )}
        />
        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </FlexBox>
    </FlexBox>
  );
};

export default LoginPage;
