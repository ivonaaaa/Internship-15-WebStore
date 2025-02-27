import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import ProductDetails from "./pages/Product";
//! jos import za 404 page?
import "./styles/App.css";

function App() {
  return (
    <>
      <Router>
        <Navigation />

        <Routes>
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/" element={<Products />}></Route>
          <Route path="/product/:productId" element={<ProductDetails />} />
          {/*
          <Route path="*" element={<NotFound />} />
          */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
