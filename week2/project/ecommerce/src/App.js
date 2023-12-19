import React, { useState, useEffect } from "react";
import Products from "./components/products.js";
import Categories from "./components/categories.js";
import "./App.css";

const Header = ({ category, setCategory }) => {
  const handleHomeClick = () => {
    setCategory("");
  };

  return (
    <header>
      <button className="home button" onClick={handleHomeClick}>
        Home
      </button>
      <p className="current-category">
        Current Category: <strong>{category}</strong>
      </p>
    </header>
  );
};

function App() {
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      return response.json();
    })
    .then((data) => {
      setLoading(false);
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false);
    });
}, []);


  return (
    <div className="app">
      <Header category={category} setCategory={setCategory} />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          <ul className="categories-list">
            <Categories setCategory={setCategory} />
          </ul>
          <div className="products-box">
            <Products category={category} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
