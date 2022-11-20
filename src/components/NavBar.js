import "./NavBar.css";
import { Link } from "react-router-dom";
export const NavBar = () => {
  const conso = (e) => {
    console.log(e.target.textContent);
  };
  return (
    <div className="nav-cont">
      <ul>
        <Link to="/dsdsadas">
          {" "}
          <li onClick={conso}>New Releases</li>{" "}
        </Link>
        <Link><li onClick={conso}>Favourites</li></Link>
        <Link><li>Watch later</li></Link>
      </ul>
    </div>
  );
};
