import styled from "styled-components";

export const Wrapper = styled.div`
  background: #cdb88f;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Wrapper.Container = styled.div`
  background: #fff;
  width: 40%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 800px) {
    width: 9%;
    height: 400px;
  }
`;

Wrapper.Tittle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-size: 30px;
  line-height: 36px;
  color: #000;
  margin-bottom: 62px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

Wrapper.Input = styled.input`
  margin-bottom: 23px;
  width: 80%;
  height: 50px;
  border: 3px solid #cdb88f;
  outline: none;
  font-family: 500;
  font-size: 30px;
  line-height: 36px;
  color: #b3b3b3;
  ::placeholder {
    color: #3b3b3b;
    @media (max-width: 600px) {
      font-size: 20px;
    }
  }
`;

Wrapper.Button = styled.div`
  background: #cdb88f;
  border-radius: 3px;
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  cursor: pointer;
  color: #fff;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

Wrapper.Question = styled.div`
  margin-top: 10px;
  width: 80%;
`;
