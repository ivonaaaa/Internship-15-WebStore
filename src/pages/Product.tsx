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
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {product ? (
        <>
          <Card
            sx={{
              width: "90%",
              height: "40%",
              display: "flex",
              flexDirection: "column",
              mb: 4,
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                padding: 3.5,
                width: "80%",
                objectFit: "cover",
                mb: -1,
              }}
              image={product.image}
              alt={product.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Cascadia Code", monospace',
                  fontSize: "1.3rem",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {product.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Cascadia Code", monospace',
                  color: "magenta",
                  mb: 2,
                }}
              >
                ${product.price}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Cascadia Code", monospace',
                  color: "grey",
                  fontSize: "1rem",
                  mb: 4,
                }}
              >
                {product.description}
              </Typography>
            </CardContent>
          </Card>

          <Typography
            sx={{
              fontSize: "1.2rem",
              fontFamily: "Cascadia Code",
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Maybe you will like this...
          </Typography>
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
