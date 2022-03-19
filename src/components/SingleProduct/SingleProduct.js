import React from "react";

const SingleProduct = (props) => {
  const { image, title } = props.product;

  console.log(props);
  return (
    <div className="col-md-4 card ">
      <img className="w-50" src={image} alt="" />
      <h3>{title}</h3>
      <div className="d-flex justify-content-around">
        <button className="btn btn-primary">Add To Cart</button>
        <button>Details</button>
      </div>
    </div>
  );
};

export default SingleProduct;
