import Header from "./components/Header";
import Footer from "./components/Footer";
// import products from "./products";
import "./bootstrap.min.css";
import HomeScreen from "./Screen/HomeScreen";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ProductScreen from "./Screen/ProductScreen";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productListActions } from "./actions/productActions";
function App() {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.productList
  );
  useEffect(() => {
    dispatch(productListActions());
  }, [dispatch]);
  return (
    <>
      <Header />
      <main className="store-main">
        <Routes>
          <Route
            path="/"
            element={
              <HomeScreen products={products} loading={loading} error={error} />
            }
          />
          <Route path="/product/:id" element={<ProductScreen />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
