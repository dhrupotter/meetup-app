import { NavLink, useNavigate } from "react-router-dom";

import "./Navbar.css";
import logo from "../../assets/meetup.svg";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        <div className="brand-logo">
          <NavLink to={"/"}>
            <img src={logo}></img>
          </NavLink>
        </div>
        <div>
          <input type="search" placeholder="search here" />
        </div>
      </nav>
      <hr />
    </>
  );
};
