import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const Products = (props) => {
  const { cartCount } = props;
  // console.log(props);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h2 className="m-5">All Products</h2>
      <div className="row container mx-auto">
        {products.map((product) => (
          <SingleProduct
            key={product.id}
            cartCount={cartCount}
            product={product}
          ></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default Products;
