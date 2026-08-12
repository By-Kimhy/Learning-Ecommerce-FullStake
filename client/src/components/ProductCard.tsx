import { Card, Image, Text, Button, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      {/* Image Section */}
      <Card.Section>
        <Image src={product.image} height={160} alt={product.title} fit="contain" />
      </Card.Section>

      {/* Body Section */}
      <Text fw={500} mt="sm" lineClamp={2}>
        {product.title}
      </Text>
      <Text c="dimmed" size="sm" mt="xs">
        ${product.price}
      </Text>

      {/* Spacer pushes footer down */}
      <div style={{ flexGrow: 1 }} />

      {/* Footer Section */}
      <Card.Section inheritPadding pb="md">
        <Group justify="space-between">
          <Button
            component={Link}
            to={`/product/${product.id}`}
            variant="light"
            size="xs"
          >
            View
          </Button>
          <Button
            onClick={() => addToCart(product)}
            color="blue"
            size="xs"
          >
            Add to Cart
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
