import { Loader as MantineLoader, Center } from "@mantine/core";

export default function Loader() {
  return (
    <Center style={{ height: "50vh" }}>
      <MantineLoader size="lg" variant="dots" />
    </Center>
  );
}
