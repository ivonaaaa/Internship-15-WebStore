import { Product } from "../types/Product";
import { useState } from "react";
import { TextField, Button, Box, Typography, MenuItem } from "@mui/material";

interface ProductFormProps {
  onSubmit: (product: Omit<Product, "id">) => void;
}

const categories = [
  "men's clothing",
  "women's clothing",
  "jewelery",
  "electronics",
  "else",
];

const ProductForm = ({ onSubmit }: ProductFormProps) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !price || !description || !image || !category) {
      setError("All fields are required!");
      return;
    }
    if (!price.trim() || isNaN(parseFloat(price)) || parseFloat(price) <= 0) {
      setError("Price must be a positive number!");
      return;
    }

    onSubmit({ title, price: parseFloat(price), description, image, category });

    setTitle("");
    setPrice("");
    setDescription("");
    setImage("");
    setCategory("");
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
      <TextField
        select
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      >
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </TextField>
      <Button type="submit" variant="contained" color="primary">
        Add Product
      </Button>
    </Box>
  );
};

export default ProductForm;
