import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="title">Learn to code</h1>;

const SearchBar = () => (
  <input
    className="search-bar"
    placeHolder="Search our tutorials"
    type="text"
  />
);

const Heading = () => (
  <div className="container">
    <Title />
    <p className="subText">With the world's largest web developer site.</p>
    <SearchBar />
  </div>
);

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<Heading />);
