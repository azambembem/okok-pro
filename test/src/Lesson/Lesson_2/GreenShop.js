import React, { Component } from "react";
import "./style.css";
import logo from "../../icons/logo.svg";
import logout from "../../icons/logout.svg";
import korzinka from "../../icons/korzinka.svg";
import search from "../../icons/search.svg";

export default class GreenShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avtive: "home",
    };
  }
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="leftSide">
            <img src={logo} alt="Logo" />
          </div>

          <div className="middleSide">
            <div
              className={`title ${
                this.state.active === "home" ? "activeTitle" : " "
              }`}
              onClick={() => {
                this.setState({ active: "home" });
              }}
            >
              Home
            </div>
            <div
              className={`title ${
                this.state.active === "shop" ? "activeTitle" : ""
              }`}
              onClick={() => {
                this.setState({ active: "shop" });
              }}
            >
              Shop
            </div>
            <div
              className={`title ${
                this.state.active === "plant" ? "activeTitle" : ""
              }`}
              onClick={() => {
                this.setState({ active: "plant" });
              }}
            >
              Plant Care
            </div>
            <div
              className={`title ${
                this.state.active === "blogs" ? "activeTitle" : ""
              }`}
              onClick={() => {
                this.setState({ active: "blogs" });
              }}
            >
              Blogs
            </div>
          </div>
          <div className="img12">
            <img src={search} alt=".." />
          </div>
          <div className="img1">
            <img src={korzinka} alt=".." />
          </div>

          <div className="rightSide">
            <div className="button">
              {" "}
              <img src={logout} alt="." />
              Login
            </div>
          </div>
        </div>
      </div>
    );
  }
}
