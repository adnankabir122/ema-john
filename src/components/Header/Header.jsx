import React from "react"
import "./Header.scss"
import logo from "../../images/Logo.svg"
const Header = () => {
  return (
    <header className="header-area d-flex justify-content-between align-items-center">
      <img src={logo} alt="" />
      <nav>
        <ul>
            <li><a href="">Order</a></li>
            <li><a href="">Order Review</a></li>
            <li><a href="">Manage Inventory</a></li>
            <li><a href="">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
