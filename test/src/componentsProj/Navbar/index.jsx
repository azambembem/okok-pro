import React, { Component } from "react";
import {
  Container,
  Logo,
  PageTitle,
  Wrapper,
  PaginationWrapper,
  GetStartButton,
} from "./style";

import Button from "../Generic/Button";

export default class Navbar extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Logo>Cootels</Logo>
          <PaginationWrapper>
            <PageTitle>Rooms</PageTitle>
            <PageTitle>Reservation</PageTitle>
            <PageTitle>Contacts</PageTitle>
          </PaginationWrapper>
          {/* <GetStartButton>Get Start</GetStartButton> */}
          <Button>Get Started</Button>
        </Container>
      </Wrapper>
    );
  }
}
