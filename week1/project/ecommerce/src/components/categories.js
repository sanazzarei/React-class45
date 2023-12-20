import categoryButtons from "../fake-data/all-categories";
const categories = ({setCategories}) => {
    return categoryButtons.map((category) => {
      return (
        <button
          key={categories}
          className="categoryButton"
          onClick={(e) => setCategories(e.target.outerText)}
        >
          {category}
        </button>
      );
    });
  
}
export default categories;
