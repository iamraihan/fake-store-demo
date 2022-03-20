import React from "react";
import ReactModal from "../ReactModal/ReactModal";

const SingleProduct = (props) => {
  const { image, title } = props.product;
  const { cartCount } = props;
  //   console.log(props);
  return (
    <div className="col-md-4 card ">
      <img className="w-50" src={image} alt="" />
      <h3>{title}</h3>
      <div className="d-flex justify-content-around">
        <button className="btn btn-primary" onClick={cartCount}>
          Add To Cart
        </button>
        <ReactModal product={props.product}></ReactModal>
      </div>
    </div>
  );
};

export default SingleProduct;
