import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import Product from "./Components/Product";
import Navbar from "./Components/Navbar";
import Favorites from "./Components/Favorites";
import { FavoritesProvider } from "./Components/FavoritesContext";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <>
      <FavoritesProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="nav">
                  <h1>Products</h1>
                  <Navbar />
                </div>

                <Categories
                  selectedCategory={selectedCategory}
                  categoryClick={categoryClick}
                />
                <Products selectedCategory={selectedCategory} />
              </>
            }
          />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </FavoritesProvider>
    </>
  );
}

export default App;
