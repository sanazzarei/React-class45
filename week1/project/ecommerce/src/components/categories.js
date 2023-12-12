import all_categories from "../fake-data/all-categories"
const categories = ({setCategories}) => {
    return all_categories.map((category) => {
        return (
            <button key={categories} 
            className="categoryButton"
            onClick={ (e) => setCategories(e.target.outerText)}
            >
                {category}
            </button>
        );
    });
  
}
export default categories;
