import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("About constructor");
  }

  componentDidMount() {
    console.log("About component is mounted");
  }

  render() {
    console.log(" About render");
    return (
      <div>
        <h1>About Us</h1>
        <UserClass />
      </div>
    );
  }
}

export default About;
