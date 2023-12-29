import { LOGO_LINK } from "../utils/constants";

const Header = () => (
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
      </ul>
    </div>
  </div>
);
export default Header;
