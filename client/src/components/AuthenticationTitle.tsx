import { Title, Text } from "@mantine/core";

export default function AuthenticationTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <Title order={2} ta="center" mb="xs">
        {title}
      </Title>
      <Text c="dimmed" size="sm" ta="center" mb="md">
        {description}
      </Text>
    </>
  );
}
