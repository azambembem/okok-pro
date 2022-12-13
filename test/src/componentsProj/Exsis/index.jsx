import React, { Component } from "react";
import { Wrapper } from "./style.js";

export default class style extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      gmail: "",
      password: "",
      adress: "",
    };
  }
  render() {
    const logData = () => {
      console.log(this.state);
    };
    const onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
    return (
      <Wrapper>
        <Wrapper.Container>
          <Wrapper.Tittle>Getting know ya</Wrapper.Tittle>
          <Wrapper.Input
            name="name"
            onChange={onChange}
            placeholder="name"
          ></Wrapper.Input>
          <Wrapper.Input
            name="surname"
            onChange={onChange}
            placeholder="surname"
          />
          <Wrapper.Input name="gmail" onChange={onChange} placeholder="gmail" />
          <Wrapper.Input
            name="password"
            onChange={onChange}
            placeholder="password"
          />
          <Wrapper.Input
            name="adress"
            onChange={onChange}
            placeholder="adress"
          />
          <Wrapper.Button onClick={logData}>Check you data</Wrapper.Button>
        </Wrapper.Container>
      </Wrapper>
    );
  }
}
