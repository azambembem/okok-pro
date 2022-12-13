import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 120px;
  height: 85vh;
  display: flex;
`;

export const LeftSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

LeftSide.Title = styled.div`
  width: 80%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #192252;
`;

LeftSide.Description = styled.div`
  width: 80%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #848fac;
  margin-top: 24px;
`;

export const RightSide = styled.div`
  flex: 1;
  display: flex;
  grid-gap: 24px;
`;

RightSide.Image = styled.img`
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}px` : "")};
`;
