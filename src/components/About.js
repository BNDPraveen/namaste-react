import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  render() {
    console.log("Parent render()");
    return (
      <div>
        <h1>About</h1>
        <UserClass name="FirstClass" />
      </div>
    );
  }
}

export default About;
