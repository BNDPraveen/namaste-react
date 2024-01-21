import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  render() {
    console.log("Parent render()");
    return (
      <div>
        <h1>About</h1>
        <UserContext.Consumer>{({ loggedInUser }) => <h1>{loggedInUser}</h1>}</UserContext.Consumer>
        <UserClass name="FirstClass" />
      </div>
    );
  }
}

export default About;
