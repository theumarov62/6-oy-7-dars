import styled from "styled-components";
export default function Card() {
  return <></>;
}

export const CardDiv = styled.div`
  width: 307px;
  background-color: ${(props) => props.bg || "#e28625"};
  padding: 48px;
  position: relative;
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 8px;
  align-items: flex-start;
  gap: 35px;
`;

export const ImgDiv = styled.div`
  width: 40px;
  height: 40px;
  background-color: #000000;
  opacity: 20%;
  border-radius: 50%;
`;

export const Img = styled.img`
  width: 43px;
  height: 20px;
  position: absolute;
  left: 70px;
  top: 60px;
  opacity: 100%;
`;

export const InfoParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
`;

export const H2 = styled.h2`
  font-weight: 700;
  font-size: 40px;
  color: #f2f2f2;
  font-family: "Big Shoulders Display", sans-serif;
  text-transform: uppercase;
`;

export const P = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: #fff;
`;

export const Button = styled.button`
  width: 146px;
  height: 48px;
  border-radius: 25px;
  margin-top: 52px;
  border: transparent 2px solid;
  background-color: #f2f2f2;
  color: ${(props) => props.btnColor || "#e28625"};
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: #fff;
    border-color: white;
  }

  :active {
    opacity: 80%;
  }
`;

export const ButtonText = styled.p``;
