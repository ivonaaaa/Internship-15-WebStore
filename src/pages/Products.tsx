import { useState, useEffect } from "react";
import { Product } from "../types/Product";
import fetchProducts from "../services/api";
import ProductCard from "../components/ProductCard";
import {
  Container,
  Grid2,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");

  const getProducts = async () => {
    const apiProducts = await fetchProducts();
    const storedProducts = localStorage.getItem("Products");
    const localProducts: Product[] = storedProducts
      ? JSON.parse(storedProducts)
      : [];

    let allProducts;
    if (localProducts.length >= 20) allProducts = localProducts.slice(0, 20);
    else {
      const remainingSpace = 20 - localProducts.length;
      allProducts = [...localProducts, ...apiProducts.slice(0, remainingSpace)];
    }
    setProducts(allProducts);

    const categories = Array.from(
      new Set(apiProducts.map((p: Product) => p.category || "Uncategorized"))
    );
    setCategories(categories);
  };

  useEffect(() => {
    getProducts();

    window.addEventListener("storage", getProducts);
    return () => window.removeEventListener("storage", getProducts);
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) &&
      (selectedCategory === "" || product.category === selectedCategory)
  );

  return (
    <Container>
      <Typography>Products</Typography>

      <TextField
        label="Search products..."
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <FormControl fullWidth>
        <InputLabel>Filter by category</InputLabel>
        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Grid2 container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid2 key={product.id}>
            <ProductCard product={product} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Products;
