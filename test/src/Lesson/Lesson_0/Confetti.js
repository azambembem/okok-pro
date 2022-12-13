import React, { Component } from "react";
// import Confetti from "react-confetti";
import "./App.css";
export default class Confetti extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: false,
      value: "",
      isShow: false,
    };
  }
  render() {
    return (
      <div className="wrapper">
        4 + 4 =
        <input
          onChange={(e) => {
            this.setState({ value: e.target.value });
          }}
          placeholder="Your Solution"
        />
        <button
          onClick={() => {
            this.setState({ isShow: true });
            setTimeout(() => {
              this.setState({ isShow: false });
            }, 5000);
          }}
        >
          Check
        </button>
        {this.state.isShow ? (
          this.state.value === "8" ? (
            <Confetti width={window.innerWidth} height={window.innerHeight} />
          ) : (
            "Looser"
          )
        ) : (
          ""
        )}
      </div>
    );
  }
}
