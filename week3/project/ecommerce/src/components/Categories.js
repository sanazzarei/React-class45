import { useState, useEffect } from "react";
import useFetch from "./UseFetch";
import React from "react";

export default function Categories({ selectedCategory, categoryClick }) {
  const [categories, setCategories] = useState([]);
  const { data, isLoading, error } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Sorry, we have an error: {error}</div>;
  }

  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          className={`categories--item${
            category === selectedCategory ? "-selected" : ""
          }`}
          key={category}
          onClick={() => categoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
