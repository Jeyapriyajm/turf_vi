// src/hooks/useProducts.js
import { useEffect, useState } from "react";
import wooClient from "../services/wooClient";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    wooClient
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return products;
};

export default useProducts;
