import React, { useState } from "react";
import Menubar from "../Menubar/Menubar";
import Products from "../Products/Products";

const Cart = () => {
  const [count, setCount] = useState(0);
  const cartCount = () => {
    console.log("hello");
    setCount(count + 1);
  };
  // cartCount();
  return (
    <div>
      <Menubar count={count}></Menubar>

      <Products cartCount={cartCount}></Products>
    </div>
  );
};

export default Cart;
