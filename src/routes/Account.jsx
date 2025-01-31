import {
  Flex,
  Heading,
  Field,
  Input,
  Center,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import validator from "validator";
import axios from "axios";
import { Link } from "react-router";

const Account = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);

      const response = await axios.post("/auth/login", {
        username: "mor_2314",
        password: "83r5^_",
      });

      const { data: tokenData } = response;

      console.log(tokenData?.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Center>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Flex
          gap={5}
          flexDirection={"column"}
          padding={5}
          rounded={"md"}
          shadow={"xl"}
          marginTop={10}
        >
          <Heading>Sign in</Heading>

          <Field.Root invalid={!!errors?.email}>
            <Field.Label>Email</Field.Label>
            <Input
              placeholder="me@example.com"
              {...register("email", {
                required: true,
                validate: (value) =>
                  validator.isEmail(value) || "Invalid Email",
              })}
            />
            <Field.ErrorText>
              {errors?.email?.type === "required"
                ? "Field Required"
                : errors?.email?.message}
            </Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors?.password}>
            <Field.Label>Password</Field.Label>
            <Flex width={"100%"}>
              <Input
                type={showPassword ? undefined : "password"}
                {...register("password", {
                  required: true,
                })}
              />
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff /> : <Eye />}
              </IconButton>
            </Flex>
            <Field.ErrorText>Field Required</Field.ErrorText>
          </Field.Root>

          <Button colorPalette={"blue"} type="submit">
            Sign in
          </Button>
          <Button colorPalette={"green"} type="submit">
            <Link to="/signup">No account? Sign up</Link>
          </Button>
        </Flex>
      </form>
    </Center>
  );
};

export default Account;
