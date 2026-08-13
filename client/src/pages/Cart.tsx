import { useCart } from "../hooks/useCart";
import {
  Container,
  Button,
  NumberInput,
  Title,
  Text,
  Image,
  Table,
  Divider,
} from "@mantine/core";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container mt="xl">
      <Title order={2} mb="md">
        Shopping Cart
      </Title>
      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <>
          <Table highlightOnHover withColumnBorders>
            <thead>
              <tr>
                <th>No</th>
                <th style={{ width: "10%" }}>Image</th>
                <th style={{ width: "35%" }}>Product Title</th>
                <th style={{ width: "10%" }}>Qty</th>
                <th style={{ width: "15%" }}>Unit Price</th>
                <th style={{ width: "15%" }}>Total</th>
                <th style={{ width: "15%" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item,i) => (
                <tr key={item.id}>
                  <td style={{ textAlign: "center" }}>{i+1}</td>
                  <td>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={50}
                      height={50}
                      fit="contain"
                      radius="sm"
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>
                    <NumberInput
                      value={item.quantity}
                      min={1}
                      size="xs"
                      onChange={(val) => updateQuantity(item.id, Number(val))}
                    />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    ${item.price.toFixed(2)}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <Button
                      color="red"
                      size="xs"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}

              <tr>
                <td colSpan={6}>
                  <strong>Total</strong>
                </td>
                <td style={{ textAlign: "right" }}>
                  <strong>${total.toFixed(2)}</strong>
                </td>
                <td></td>
              </tr>
            </tbody>
          </Table>

          {/* Checkout Button */}
          <Button
            component={Link}
            to="/checkout"
            color="blue"
            size="md"
            mt="lg"
            style={{ float: "right" }}
          >
            Proceed to Checkout
          </Button>
        </>
      )}
    </Container>
  );
}
