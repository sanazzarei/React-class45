import React, { useState } from "react";
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
  const [category, setCategory] = useState("");

  return (
    <div className="app">
      <Header category={category} setCategory={setCategory} />
      <ul className="categories-list">
        <Categories setCategory={setCategory} />
      </ul>
      <div className="products-box">
        <Products category={category} />
      </div>
    </div>
  );
}

export default App;
