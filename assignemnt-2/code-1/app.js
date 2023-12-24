import React from "react";
import ReactDOM from "react-dom/client";

//Nested header using React.createElement(h1,h2,h3 inside a div with class “title”)
/*
const nestedeHeader = React.createElement("div", { className: "title" }, [
  React.createElement("h1", null, "Heading h1"),
  React.createElement("h2", null, "Heading h2"),
  React.createElement("h3", null, "Heading h3"),
]);

const nestedHeading = React.createElement("h2", {}, React.createElement());

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(nestedeHeader);

*/

// Create the same element using JSX
/*
const heading = (
  <div className="title">
    <h1>Heading h1</h1>
    <h2>Heading h2</h2>
    <h3>Heading h3</h3>
  </div>
);

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(heading);
*/

const Title = () => <p>This is JSX in React</p>;

console.log(Title);

const Heading = () => (
  <div className="title">
    <h1>
      <Title />
    </h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
  </div>
);
console.log(Heading);

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<Heading />);
