import react, { useState } from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { FaAlignRight, FaRegTimesCircle } from "react-icons/fa";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="beach reasort" />
          </Link>
          <button type="button" className="nav-btn" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={`nav-links ${show ? "show-nav" : ""}`}>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/rooms">rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
