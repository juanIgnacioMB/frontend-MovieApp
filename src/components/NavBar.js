import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { LogOut } from "../slices/LoginSlice";
import { useDispatch } from "react-redux";

export const NavBar = () => {
  const dispatch = useDispatch()
const Logout=()=>{
  localStorage.clear()
  dispatch(LogOut())
  useNavigate("/register")
}
  return (
    
    <div className="nav-cont">
      <ul>
        <Link to="/">
          <li tabIndex="1">
            New Releases
          </li>{" "}
        </Link>
        
        <Link to="/GenreResults">
          <li tabIndex="1">Search categories</li>
        </Link>
        <Link to="/favmovies" >
          <li  tabIndex="1">
            Favourites
          </li>
        </Link>
        <li onClick={Logout}>Logout</li>
      </ul>
    </div>

  );
};
