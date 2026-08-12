import { Container, Group, Button, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconShoppingCart } from "@tabler/icons-react";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <Container
      size="lg"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
      }}
    >
      {/* Left side */}
      <Group>
        <Text fw={700} size="lg">
          🛒 MyShop
        </Text>
      </Group>

      {/* Right side */}
      <Group>
        <Button component={Link} to="/" variant="subtle">
          Home
        </Button>
        <Button component={Link} to="/about" variant="subtle">
          About Us
        </Button>
        <Button component={Link} to="/contact" variant="subtle">
          Contact Us
        </Button>
        <Button
          component={Link}
          to="/cart"
          variant="light"
          leftSection={<IconShoppingCart size={18} />}
        >
          Cart ({cart.length})
        </Button>

        {!user ? (
          <>
            <Button component={Link} to="/login" variant="outline">
              Login
            </Button>
            <Button component={Link} to="/register" variant="filled">
              Sign Up
            </Button>
          </>
        ) : (
          <>
            <Text fw={500}>Hello, {user.name}</Text>
            <Button onClick={logout} color="red" variant="outline">
              Logout
            </Button>
          </>
        )}
      </Group>
    </Container>
  );
}
