import { useForm } from "react-hook-form";
import {
  TextInput,
  Button,
  Container,
  Title,
  Group,
  Paper,
  Table,
  Text,
} from "@mantine/core";
import { useCart } from "../hooks/useCart";

type CheckoutFormValues = {
  name: string;
  email: string;
  address: string;
};

export default function Checkout() {
  const { cart } = useCart();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormValues>();

  const onSubmit = (data: CheckoutFormValues) => {
    console.log("Checkout data:", data);
    console.log("Cart items:", cart);
    alert("Order placed successfully!");
  };

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container size="sm" mt="xl">
      <Title order={2} mb="md">
        Checkout
      </Title>

      {/* Order Summary */}
      <Paper shadow="xs" p="md" mb="xl">
        <Title order={4} mb="sm">
          Order Summary
        </Title>
        {cart.length === 0 ? (
          <Text>No items in cart.</Text>
        ) : (
          <Table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={2}>
                  <strong>Total</strong>
                </td>
                <td>
                  <strong>${total.toFixed(2)}</strong>
                </td>
              </tr>
            </tbody>
          </Table>
        )}
      </Paper>

      {/* Checkout Form */}
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

          <TextInput
            label="Address"
            placeholder="Enter your shipping address"
            {...register("address", { required: "Address is required" })}
            error={errors.address?.message}
            mb="sm"
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit">Place Order</Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}
