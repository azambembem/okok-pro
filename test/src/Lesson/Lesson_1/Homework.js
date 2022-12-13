import React, { Component } from "react";

export default class homework extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  render() {
    return (
      <div>
        <button>Add</button>

        <div className="App">
          <button
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            Plus
          </button>
          <p>{this.state.count}</p>
          <button
            onClick={() => {
              this.setState({ count: this.state.count - 1 });
            }}
          >
            Minus
          </button>
        </div>
      </div>
    );
  }
}
