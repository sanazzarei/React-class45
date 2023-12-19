import React, { useState, useEffect } from "react";

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let apiUrl = "https://fakestoreapi.com/products";
    if (category) {
      apiUrl = `https://fakestoreapi.com/products/category/${category}`;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error))
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="box">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <span>{product.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Products;
