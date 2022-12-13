import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const math = ["4+4", "5+5", "10+10", "10*10"];
    alert(Math.floor(Math.random() * math.length));
    return;
    <div className="wrapper"></div>;
  }
}

export default Math_Ex;

import React, { Component } from 'react';

export default class Math_Ex extends Component {
  constructor (props){
    super(props);
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}
