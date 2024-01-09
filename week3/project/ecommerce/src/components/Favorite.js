import React from "react";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";

export default function Favorite({ productId, isFavorited, onClick }) {
  const heartClick = () => {
    onClick(productId);
    console.log("clicked");
  };

  return (
    <div className="product-image--favorite-container" onClick={heartClick}>
      <img src={isFavorited ? heartSolid : heartRegular} alt="Favorite" />
    </div>
  );
}
