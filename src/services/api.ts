import { Product } from "../types/Product";

const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=20");
    if (!response.ok) throw new Error("Failed to fetch the products!");
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching the products:", error);
    return [];
  }
};

export default fetchProducts;
