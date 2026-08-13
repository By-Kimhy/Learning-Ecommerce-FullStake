import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../api/products";
import Loader from "../components/Loader";
import { Container, Image, Title, Text, Button, Group, Flex } from "@mantine/core";
import { useCart } from "../hooks/useCart";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id!),
  });

  if (isLoading) return <Loader />;
  if (error) return <p>Failed to load product</p>;
  if (!data) return <p>Product not found</p>;

  return (
    <Container size="sm" mt="xl">
      <Group align="flex-start" gap="xl" justify="flex-start">
        <Image
          src={data.image}
          alt={data.title}
          width={300}
          height={300}
          fit="contain"
        />
        <div style={{ flex: 1 }}>
          <Title order={2}>{data.title}</Title>
          <Text size="lg" mt="sm">
            ${data.price}
          </Text>
          <Text mt="md">{data.description}</Text>

          <Flex justify="flex-end" mt="lg">
            <Button onClick={() => addToCart(data)}>Add to Cart</Button>
          </Flex>
        </div>
      </Group>
    </Container>
  );
}
