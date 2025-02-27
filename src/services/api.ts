const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=20");
    if (!response.ok) throw new Error("Failed to fetch the products!");
    return await response.json();
  } catch (error) {
    console.error("Error fetching the products:", error);
  }
};

export default fetchProducts;
