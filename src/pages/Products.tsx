import { useState, useEffect } from "react";
import { Product } from "../types/Product.tsx";
import fetchProducts from "../services/api.ts";
import ProductCard from "../components/ProductCard.tsx";
import { Container, Grid2, Typography } from "@mui/material";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  //! ode ce trebat jos dodat i niz za filtirranje i sta vec

  useEffect(() => {
    const getProducts = async () => {
      const apiProducts = await fetchProducts();
      const storedProducts = localStorage.getItem("Products");
      const localProducts: Product[] = storedProducts
        ? JSON.parse(storedProducts)
        : [];
      const allProducts = [...apiProducts, ...localProducts];
      setProducts(allProducts);
    };

    getProducts();
  }, []);

  return (
    <Container>
      <Typography>Products</Typography>

      <Grid2 container spacing={3}>
        {products.map((product) => (
          <Grid2>
            <ProductCard product={product} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Products;
