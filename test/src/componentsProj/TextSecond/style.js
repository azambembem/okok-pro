import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const LeftSide = styled.div`
  width: 80%;
  height: 300px;
  margin: 0 85px;
`;

LeftSide.Title = styled.div`
  font-family: "Montserrat";
  font-style: "SemiBold";
  font-size: 36px;

  line-height: 150%;
  color: #192252;
  font-weight: 600;
`;

LeftSide.Discription = styled.div`
  font-family: "Inter";
  font-style: "Regular";
  font-size: 18px;
  line-height: 27px;
  line-height: 150%;
  color: #848fac;
  margin-top: 24px;
`;

export const RightSide = styled.div`
  width: 384px;
  height: 384px;
  position: relative;
`;

RightSide.Image = styled.img`
  position: absolute;
  left: 840px;
  top: -380px;
`;

LeftSide.Image = styled.img`
  margin-top: 44px;
  margin-left: 85px;
`;

RightSide.Title = styled.div`
  font-family: "Montserrat";
  font-style: "SemiBold";
  font-size: 36px;
  font-weight: 600;
  line-height: 150%;
  color: #192252;
  position: absolute;
  right: 500px;
  top: 2350px;
`;

RightSide.Discription = styled.div`
  width: 584px;
  height: 81px;
  font-family: "Inter";
  font-style: "Regular";
  font-size: 18px;
  line-height: 27px;
  line-height: 150%;
  color: #848fac;
  position: absolute;
  right: 255px;
  top: 2434px;
`;
