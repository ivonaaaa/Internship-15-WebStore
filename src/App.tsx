import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
//import Products from "./pages/Products";
//import AddProduct from "./pages/AddProduct";
import "./styles/App.css";

function App() {
  // u return bi trebale ic rute i valjda navigacija ako ona treba bit svugdi?
  return (
    <>
      <Router>
        <Navigation />

        <Routes>
          {/* <Route path="/add-product" element={<AddProduct />} />
          <Route path="/" element={<Products />}></Route>
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
