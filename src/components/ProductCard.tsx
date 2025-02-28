import { useNavigate } from "react-router-dom";
import { Product } from "../types/Product";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";

interface ProductProps {
  product: Product;
}

const ProductCard = ({ product }: ProductProps) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/product/${product.id}`)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography>{product.title}</Typography>
          <Typography>${product.price}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
