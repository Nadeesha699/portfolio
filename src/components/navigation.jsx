import Logo from "../images/icons/image.png";
import Menu from "../images/icons/menu-bar.png";
import Close from "../images/icons/crossed.png";
import { Link } from "react-router-dom";
import "../css/index.css";
import { useState } from "react";

const Navigation = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div className="navigation-main">
      <div className="navigation-sub">
        <img src={Logo} alt="icon" />
        <label className="navigation-name">A.T.N. Ruwandima</label>
      </div>
      <nav className="navigation-sub2">
        <Link to="/" className="navigation-link">
          Home
        </Link>
        <Link to="/about" className="navigation-link">
          About
        </Link>
        <Link to="/service" className="navigation-link">
          Services
        </Link>
        <Link to="/portfolio" className="navigation-link">
          Portfolio
        </Link>
        <Link to="/contact" className="navigation-link">
          Contact
        </Link>
      </nav>
      <img
        src={Menu}
        alt="icon"
        className="mobile-menu"
        onClick={() => {
          showMobileMenu ? setShowMobileMenu(false) : setShowMobileMenu(true);
        }}
      />
      <div
        className="mobile-menu-panel"
        style={{ top: showMobileMenu ? "0" : "-1000px" }}
      >
        <img
          src={Close}
          alt="icon"
          className="mobile-menu-close"
          onClick={() => {
            showMobileMenu ? setShowMobileMenu(false) : setShowMobileMenu(true);
          }}
        />
        <Link
          to="/"
          className="navigation-link"
          onClick={() => {
            showMobileMenu ? setShowMobileMenu(false) : setShowMobileMenu(true);
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="navigation-link"
          onClick={() => {
            showMobileMenu ? setShowMobileMenu(false) : setShowMobileMenu(true);
          }}
        >
          About
        </Link>
        <Link
          to="/service"
          className="navigation-link"
          onClick={() => {
            showMobileMenu ? setShowMobileMenu(false) : setShowMobileMenu(true);
          }}
        >
          Services
        </Link>
        <Link
          to="/portfolio"
          className="navigation-link"
          onClick={() => {
            showMobileMenu ? setShowMobileMenu(false) : setShowMobileMenu(true);
          }}
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className="navigation-link"
          onClick={() => {
            showMobileMenu ? setShowMobileMenu(false) : setShowMobileMenu(true);
          }}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
