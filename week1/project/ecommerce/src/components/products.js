import all_products from "../fake-data/all-products";

const Products = ({ category }) => {
  const filteredProducts = all_products.filter((product) => {
    return category === "" || `FAKE: ${product.category}` === category;
  });

  return filteredProducts.map((product) => (
    <div className="product" key={product.id}>
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />
      <span>{product.title}</span>
    </div>
  ));
};

export default Products;
