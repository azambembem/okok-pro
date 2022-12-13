import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 180px 90px;
`;

export const LeftSide = styled.div`
  width: 100%;
  height: 100vh;
`;

LeftSide.Image = styled.img`
  width: 384px;
  height: 576px;
`;
export const RightSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  flex-direction: column;
  position: relative;
`;

RightSide.Title = styled.div`
  /* width: 80%; */
  font-family: "Montserrat";
  font-style: Semibold;
  font-size: 36px;
  font-weight: 600;
  /* line-height: 54px; */
  color: #192252;
  padding-bottom: 300px;
  position: absolute;
  bottom: 80px;
  right: 320px;
  line-height: 150%;
`;
RightSide.Description = styled.div`
  /* width: 80%; */
  font-family: "Inter";
  font-style: Regular;
  font-size: 18px;
  line-height: 27px;
  line-height: 150%;
  color: #848fac;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 350px;
  top: -330px;
  margin: auto;
`;
RightSide.Description1 = styled.div`
  font-family: "Inter";
  font-style: "Regular";
  font-size: 18px;
  line-height: 27px;
  line-height: 150%;
  color: #848fac;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 365px;
  top: -220px;
  margin: auto;
`;
export const Button = styled.button`
  width: 151px;
  height: 51px;

  color: #fff;
  background-color: #0e1734;
  border-radius: 6px;
  position: absolute;
  left: 660px;
  bottom: -715px;
`;
