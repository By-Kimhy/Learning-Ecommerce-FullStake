import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { SimpleGrid, Container, Pagination, Group } from "@mantine/core";

type ProductsResponse = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  products: any[];
  totalPages: number;
};

export default function Home() {
  const [page, setPage] = useState(1);
  const limit = 6;

  const { data, isLoading, error } = useQuery<ProductsResponse, Error>({
    queryKey: ["products", page],
    queryFn: () => getProducts(page, limit),
  });

  if (isLoading) return <Loader />;
  if (error) return <p>Something went wrong</p>;
  if (!data) return <Loader />;

  return (
    <Container>
      <SimpleGrid cols={3} spacing="lg">
        {data.products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>

      <Group justify="center" mt="lg">
        <Pagination
          total={data.totalPages}
          value={page}
          onChange={setPage}
        />
      </Group>
    </Container>
  );
}
