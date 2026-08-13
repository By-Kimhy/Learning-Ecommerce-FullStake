import { AppShell } from "@mantine/core";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      {/* Navbar in AppShell.Header */}
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>

      {/* Page content in AppShell.Main */}
      <AppShell.Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
