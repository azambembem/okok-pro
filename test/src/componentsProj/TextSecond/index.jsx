import React, { Component } from "react";
import { Wrapper, LeftSide, RightSide } from "./style";
import image5 from "../../componentsProj/assets/images/opener5.png";
import image6 from "../../componentsProj/assets/images/opener6.png";

export default class TextSecond extends Component {
  render() {
    return (
      <Wrapper>
        <LeftSide>
          <LeftSide.Title>Cabin Activities</LeftSide.Title>
          <LeftSide.Discription>
            Don’t worry to get bored easily in our cabin. We have so many cabin{" "}
            <br />
            activities for you to do it alone or with group. Maybe this is the
            best
            <br /> chance for you to make new friends or even a lover.
          </LeftSide.Discription>
        </LeftSide>
        <RightSide>
          <RightSide.Image src={image5} />
          <LeftSide.Image src={image6} />
        </RightSide>
        <RightSide.Title>100% Organic Food</RightSide.Title>
        <RightSide.Discription>
          We served 100% organic, low process and delicious food. We allow our
          guest to have breakfast or dinner request.What ever made your taste
          buds happy.
        </RightSide.Discription>
      </Wrapper>
    );
  }
}
