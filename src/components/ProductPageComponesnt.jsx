import React, { useEffect, useState } from "react";
import ProductCardComponent from "./ProductCardComponent";
let url = "http://localhost:5173/src/assets/data/products.json";
const ProductPageComponesnt = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full p-3">
      <ProductCardComponent products={products} />
    </div>
  );
};

export default ProductPageComponesnt;
