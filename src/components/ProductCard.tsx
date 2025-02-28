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
    <Card
      onClick={() => navigate(`/product/${product.id}`)}
      sx={{
        width: 250,
        height: 340,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            padding: 3.5,
            height: 200,
            width: 200,
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
              fontSize: "1rem",
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
            }}
          >
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
