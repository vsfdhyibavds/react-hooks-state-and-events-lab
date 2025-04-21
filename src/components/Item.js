import React from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = React.useState(false);

  const handleAddToCartClick = () => {
    setInCart((inCart) => !inCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCartClick}>
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
