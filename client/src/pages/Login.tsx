import { useForm, Controller } from "react-hook-form";
import {
  TextInput,
  PasswordInput,
  Button,
  Container,
  Paper,
  Group,
} from "@mantine/core";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

type LoginFormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit = (data: LoginFormValues) => {
    login({ name: "Demo User", email: data.email });
    navigate("/");
  };

  return (
    <Container size="sm" mt="xl">
      <Paper shadow="xs" p="md" radius="md" withBorder>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Email"
                placeholder="Enter your email"
                {...field}
                error={errors.email?.message}
                mb="sm"
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <PasswordInput
                label="Password"
                placeholder="Enter your password"
                {...field}
                error={errors.password?.message}
                mb="sm"
              />
            )}
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit">Login</Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}
