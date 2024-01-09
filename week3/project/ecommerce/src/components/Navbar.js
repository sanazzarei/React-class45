import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="nav-list-wrap">
      <li className="nav-link">
        <Link to={"/"}>Products</Link>
      </li>
      <li className="nav-link">
        <Link to={"/favorites"}>Favorites</Link>
      </li>
    </ul>
  );
}
