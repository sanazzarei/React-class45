import React, { useState, useEffect } from "react";

const Categories = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching categories:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading categories...</div>;
  }

  return (
    <div>
      {categories.map((category, index) => (
        <button
          key={index}
          className="categoryButton"
          onClick={() => setCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
