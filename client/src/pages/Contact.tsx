import { useForm } from "react-hook-form";
import {
  Container,
  Title,
  Paper,
  TextInput,
  Textarea,
  Button,
  Group,
} from "@mantine/core";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>();

  const onSubmit = (data: ContactFormValues) => {
    // For now, just log the data
    console.log("Contact form submitted:", data);
    alert("Message sent!");
  };

  return (
    <Container size="sm" mt="xl">
      <Title order={2} mb="md">Contact Us</Title>
      <Paper shadow="xs" p="md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Name"
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

          <Textarea
            label="Message"
            placeholder="Write your message"
            minRows={4}
            {...register("message", { required: "Message is required" })}
            error={errors.message?.message}
            mb="sm"
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit">Send</Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}
