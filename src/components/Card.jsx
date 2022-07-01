import React from "react";

const Card = (props) => {
    const data= props;


  return (
    <>
      <div className="card">
        <img
          src={props.img}
        />
        <div className="container">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <h4>{props.price}</h4>
          <button>Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default Card;
