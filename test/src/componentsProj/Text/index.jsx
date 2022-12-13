import React, { Component } from "react";

import image4 from "../../componentsProj/assets/images/opener4.png";

import { Wrapper, LeftSide, RightSide, Button } from "./style";
export default class Text extends Component {
  render() {
    return (
      <Wrapper>
        <LeftSide.Image src={image4} />
        <RightSide>
          <RightSide.Title>
            Cozy and Down to Earth Cootage <br /> Hotel in Norway.
          </RightSide.Title>
          <RightSide.Description>
            Our Cootage Hotel is an intimate hideway concieved for dicerning{" "}
            <br />
            travelers. It faces directly the unique and spectacular panorama of
            <br />
            the Hallerbos Jungle.
          </RightSide.Description>
          <RightSide.Description1>
            Cootels extends along a private, quiet, and beautiful nature. Stay{" "}
            <br />
            away from crowd and enjoy the cozy and beauty with us.
          </RightSide.Description1>
        </RightSide>
        <Button>Learn More</Button>
      </Wrapper>
    );
  }
}
