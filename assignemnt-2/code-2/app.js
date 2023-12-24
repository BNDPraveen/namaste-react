import ReactDOM from "react-dom/client";

const Header = () => (
  <header className="header">
    <div className="inner-container">
      <div className="logo-container">
        <h1 className="logo">
          MY<span>SITE</span>
        </h1>
      </div>
      <div className="Search-box">
        <input type="text" placeholder="search" />
      </div>
      <div className="nav">
        <ul>
          <a href="">
            <li>Home</li>
          </a>
          <a href="">
            <li>About</li>
          </a>

          <a href="">
            <li>Portfolio</li>
          </a>

          <a href="">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  </header>
);

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<Header />);
