import { Container, Title, Text, Paper } from "@mantine/core";

export default function About() {
  return (
    <Container size="sm" mt="xl">
      <Title order={2} mb="md">About Us</Title>
      <Paper shadow="xs" p="md">
        <Text mb="sm">
          Welcome to our store! We are passionate about delivering high‑quality
          products and providing the best shopping experience for our customers.
        </Text>
        <Text mb="sm">
          Our mission is to combine great design, functionality, and affordability.
          Whether you’re looking for everyday essentials or something special,
          we’ve got you covered.
        </Text>
        <Text>
          Thank you for choosing us — we’re excited to serve you!
        </Text>
      </Paper>
    </Container>
  );
}
