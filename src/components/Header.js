import { LOGO_LINK } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let btnName = "Login";

  const [btnNameReact, setbtnNameReact] = useState("Login");
  useEffect(() => {}, [btnNameReact]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_LINK} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            {" "}
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <li>Portfolio</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
