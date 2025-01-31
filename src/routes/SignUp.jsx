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

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("Form Data:", data);

      const response = await axios.post("/auth/register", {
        email: data.email,
        password: data.password,
        username: data.username,
      });

      const { data: responseData } = response;
      console.log("Response Data:", responseData);
    } catch (error) {
      console.error("Registration Error:", error);
    }
  };

  const password = watch("password");

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
          <Heading>Sign Up</Heading>
          <Field.Root invalid={!!errors?.username}>
            <Field.Label>Username (optional)</Field.Label>
            <Input placeholder="Your username" {...register("username")} />
            <Field.ErrorText>{errors?.username?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors?.email}>
            <Field.Label>Email</Field.Label>
            <Input
              placeholder="me@example.com"
              {...register("email", {
                required: "Email is required",
                validate: (value) =>
                  validator.isEmail(value) || "Invalid Email",
              })}
            />
            <Field.ErrorText>{errors?.email?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors?.password}>
            <Field.Label>Password</Field.Label>
            <Flex width={"100%"}>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              <IconButton
                aria-label="Toggle Password Visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </IconButton>
            </Flex>
            <Field.ErrorText>{errors?.password?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors?.confirmPassword}>
            <Field.Label>Confirm Password</Field.Label>
            <Flex width={"100%"}>
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              <IconButton
                aria-label="Toggle Confirm Password Visibility"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff /> : <Eye />}
              </IconButton>
            </Flex>
            <Field.ErrorText>
              {errors?.confirmPassword?.message}
            </Field.ErrorText>
          </Field.Root>

          <Button colorPalette={"blue"} type="submit">
            Sign Up
          </Button>

          <Button colorPalette={"green"} type="submit">
            <Link Link to="/account">
              Back to sign in
            </Link>
          </Button>
        </Flex>
      </form>
    </Center>
  );
};

export default SignUp;
