import React, { useEffect, useState } from "react";

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div>
      <h2>All Products</h2>
    </div>
  );
};

export default Products;
