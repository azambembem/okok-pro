import React, { Component } from "react";
import { Wrapper, LeftSide, RightSide } from "./style";
import Button from "../Generic/Button";
import image1 from "../../componentsProj/assets/images/opener1.png";
import image2 from "../../componentsProj/assets/images/opener2.png";
import image3 from "../../componentsProj/assets/images/opener3.png";

export default class Opener extends Component {
  render() {
    return (
      <Wrapper>
        <LeftSide>
          <LeftSide.Title>
            Nature, Warmth, and Beauty in One Space
          </LeftSide.Title>
          <LeftSide.Description>
            One place to release all the stress, bring back happines, and get
            back to nature. We provide the best room and nature for you. Come
            visit us anytime you want.
          </LeftSide.Description>
          <Button mt="32">Reservation</Button>
        </LeftSide>
        <RightSide>
          <RightSide.Image src={image3} />
          <RightSide.Image src={image1} />
          <RightSide.Image marginTop={"201"} src={image2} />
        </RightSide>
        <Button></Button>
      </Wrapper>
    );
  }
}
