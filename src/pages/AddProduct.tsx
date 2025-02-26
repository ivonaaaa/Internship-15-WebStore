import { v4 as uuidv4 } from "uuid";
import { Container } from "@mui/material";
import { Product } from "../types/Product.tsx";
import ProductForm from "../components/ProductForm";

const AddProduct = () => {
  const handleAddProduct = (product: Omit<Product, "id">) => {
    const newProduct: Product = {
      id: uuidv4(),
      ...product,
    };

    const storedProducts = localStorage.getItem("customProducts");
    const products: Product[] = storedProducts
      ? JSON.parse(storedProducts)
      : [];

    products.push(newProduct);
    localStorage.setItem("customProducts", JSON.stringify(products));
  };

  return (
    <Container>
      <ProductForm onSubmit={handleAddProduct} />
    </Container>
  );
};

export default AddProduct;
