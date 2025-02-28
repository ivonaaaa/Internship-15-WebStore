import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types/Product";
import ProductCard from "../components/ProductCard";
import fetchProducts from "../services/api";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid2,
} from "@mui/material";

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProductDetails = async () => {
      const apiProducts = await fetchProducts();
      const storedProducts = localStorage.getItem("Products");
      const localProducts: Product[] = storedProducts
        ? JSON.parse(storedProducts)
        : [];

      const allProducts = [...localProducts, ...apiProducts];
      const foundProduct = allProducts.find(
        (p) => p.id.toString() === productId
      );
      setProduct(foundProduct || null);

      if (foundProduct) {
        const related = allProducts.filter(
          (p) =>
            p.category === foundProduct.category && p.id !== foundProduct.id
        );
        setRelatedProducts(related);
      }
    };
    getProductDetails();
  }, [productId]);

  return (
    <Container>
      {product ? (
        <>
          <Card>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.title}
            />
            <CardContent>
              <Typography>{product.title}</Typography>
              <Typography>${product.price}</Typography>
              <Typography>{product.description}</Typography>
            </CardContent>
          </Card>

          <Typography>Maybe you will like this...</Typography>
          <Grid2 container spacing={3}>
            {relatedProducts.map((related) => (
              <Grid2 key={related.id}>
                <ProductCard product={related} />
              </Grid2>
            ))}
          </Grid2>
        </>
      ) : (
        <Typography>Product not found.</Typography>
      )}
    </Container>
  );
};

export default ProductDetails;
