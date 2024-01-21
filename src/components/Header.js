import { LOGO_LINK } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatue";
import UserContext from "../utils/UserContext";

const Header = () => {
  let btnName = "Login";

  const [btnNameReact, setbtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-200 shadow-lg ">
      <div className="logo-container">
        <img className="w-32" src={LOGO_LINK} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex ">
          <li className="px-4">OnlineStatus : {onlineStatus ? "🟢" : "🔴"}</li>
          <Link to={"/groceries"}>
            <li>Groceries</li>
          </Link>
          <li className="px-4">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="px-4"
            onClick={() => {
              btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
