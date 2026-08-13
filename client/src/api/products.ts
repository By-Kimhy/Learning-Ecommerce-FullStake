const API_URL = "https://fakestoreapi.com";

export const getProducts = async (page = 1, limit = 6) => {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  const all = await res.json();

  const start = (page - 1) * limit;
  const end = start + limit;
  const products = all.slice(start, end);
  return {
    products,
    totalPages: Math.ceil(all.length / limit),
  };
};

export const getProductById = async (id: string) => {
  const res = await fetch(`${API_URL}/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};
