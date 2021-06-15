import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price }) {
  const [{}, dispatch] = useStateValue();
  const removeFromCart = () => {
    // remove from basket
    dispatch({
      type: "REMOVE_FROM_CART",
      id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img classsName="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <button onClick={removeFromCart}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
