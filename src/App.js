import React, { Component, useState } from "react";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgSrc: "./images/one.jpg",
        profession: "Software Engineer",
      },
      show: false,
      timeSinceMount: 0,
    };
    this.intervalId = null;
  }

  componentDidMount() {
    // Start an interval to update timeSinceMount every second
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted to prevent memory leaks
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeSinceMount } = this.state;

    return (
      <div className="container">
        <div className="component-container">
          <h1>Profile</h1>
          <button onClick={this.toggleShow}>
            Toggle Profile {show ? "Off" : "On"}
          </button>

          {show && (
            <div>
              <img src={imgSrc} alt={fullName} />
              <p>Full Name: {fullName}</p>
              <p>Bio: {bio}</p>
              <p>Profession: {profession}</p>
            </div>
          )}

          <p>Time since component was mounted: {timeSinceMount} seconds</p>
        </div>
      </div>
    );
  }
}

export default App;
