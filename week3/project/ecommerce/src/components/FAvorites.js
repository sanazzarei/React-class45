import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Favorite from "./Favorite";
import { FavoritesContext } from "./FavoritesContext";

function Favorites() {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const { favorites, clickHandler } = useContext(FavoritesContext);

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      try {
        const products = await Promise.all(
          favorites.map(async (id) => {
            const response = await fetch(
              `https://fakestoreapi.com/products/${id}`
            );
            if (!response.ok) {
              throw new Error("Network response was not ok :(");
            }
            const product = await response.json();
            return product;
          })
        );
        setFavoriteProducts(products);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchFavoriteProducts();
  }, [favorites]);

  if (favoriteProducts.length === 0) {
    return (
      <>
        <h1>Favorites</h1>
        <p>You haven't chosen any favorites yet!</p>
      </>
    );
  }

  return (
    <>
      <h1>Favorites</h1>
      <ul className="products">
        {favoriteProducts.map((product) => (
          <li className="products--item" key={product.id}>
            <div className="product">
              <img
                className="product--image"
                alt={product.id}
                src={product.image}
              ></img>
              <Favorite
                productId={product.id}
                isFavorited={favorites.includes(product.id)}
                onClick={() => clickHandler(product.id)}
              />
              <Link to={`/product/${product.id}`} className="product--title">
                {product.title}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Favorites;
