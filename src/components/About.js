import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("About constructor");
  }

  componentDidMount() {
    // console.log("About component is mounted");
  }

  render() {
    console.log(" About render");
    return (
      <div className="m-4 p-4">
        <h1 className="text-center font-bold text-2xl">User Info</h1>
        <UserClass />
      </div>
    );
  }
}

export default About;
