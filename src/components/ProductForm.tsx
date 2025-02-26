import { Product } from "../types/Product.tsx";
import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

interface ProductFormProps {
  onSubmit: (product: Omit<Product, "id">) => void;
}

const ProductForm = ({ onSubmit }: ProductFormProps) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //! ode cu dodat jos validacija al sad neka stoji samo ova
    if (!title || !price || !description || !image) {
      setError("All fields are required!");
      return;
    }

    onSubmit({ title, price: parseFloat(price), description, image });

    setTitle("");
    setPrice("");
    setDescription("");
    setImage("");
    setError("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography>Add Product</Typography>
      {error && <Typography>{error}</Typography>}
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
      <TextField
        label="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        fullWidth
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        multiline
        rows={3}
      />
      <TextField
        label="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Add Product
      </Button>
    </Box>
  );
};

export default ProductForm;
