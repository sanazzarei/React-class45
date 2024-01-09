import React, { useState, createContext } from "react";

export const FavoritesContext = createContext({
  favorites: [],
  clickHandler: () => {},
});

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const clickHandler = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };
  console.log(favorites);
  return (
    <FavoritesContext.Provider value={{ favorites, clickHandler }}>
      {children}
    </FavoritesContext.Provider>
  );
}
