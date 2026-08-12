import { useForm } from "react-hook-form";
import {
  TextInput,
  PasswordInput,
  Button,
  Container,
  Title,
  Paper,
  Group,
} from "@mantine/core";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
};

export default function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  const onSubmit = (data: RegisterFormValues) => {
    // Normally you'd call backend API here
    login({ name: data.name, email: data.email });
    navigate("/"); // redirect to home after register
  };

  return (
    <Container size="sm" mt="xl">
      <Title order={2} mb="md">Register</Title>
      <Paper shadow="xs" p="md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Full Name"
            placeholder="Enter your name"
            {...register("name", { required: "Name is required" })}
            error={errors.name?.message}
            mb="sm"
          />

          <TextInput
            label="Email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
                message: "Invalid email address",
              },
            })}
            error={errors.email?.message}
            mb="sm"
          />

          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters" },
            })}
            error={errors.password?.message}
            mb="sm"
          />

          <Group align="right" mt="md">
            <Button type="submit">Register</Button>
          </Group>
        </form>
      </Paper>  
    </Container>
  );
}
