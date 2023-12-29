import { LOGO_LINK } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  let btnName = "Login";

  const [btnNameReact, setbtnNameReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_LINK} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Portfolio</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
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
