import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        login: "pooja",
        id: "123",
      },
    };

    console.log("child Constructor");
  }

  componentDidMount() {
    console.log(" child component is mounted ");
    fetch("https://api.github.com/users/pooja-sharma-60")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          userInfo: data,
        })
      );
  }

  componentDidUpdate() {
    console.log("component update is called");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    console.log("child render");
    return (
      <div className="user-card">
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name : {this.state.userInfo.login}</h2>
        <h3>Id : {this.state.userInfo.id}</h3>
        <h4>Contact : Pooja@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
