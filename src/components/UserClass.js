import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "user_name",
        avatar_url: "img",
        location: "location",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/BNDPraveen");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentWillUnmount() {
    console.log("Component unmounted");
  }

  render() {
    const { name, avatar_url, location } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="user pic" />
        <h3>{name}</h3>
        <h4>{location}</h4>
      </div>
    );
  }
}
export default UserClass;
