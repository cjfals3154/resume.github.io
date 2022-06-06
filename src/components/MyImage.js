import React, { useEffect, useState } from "react";
import styled from "styled-components";
import My from "../images/My.jpeg";
import Rotate from "react-reveal/Zoom";

const CommonStyled = styled.section`
    text-align:center;
    justify-content:"center
`;

const ImgSection = styled.div`
  //   position: relative;
  width: auto;
  height: 400px;
  overflow: hidden;
`;

const StyledImg = styled.img`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(50%);
`;

const TextStyled = styled.span`
  position: absolute;
  top: 10%;
  left: 10%;
  transform: translate(-50%, -50%);
  font-size: 6rem;
  color: white;
  z-index: 2;
  text-align: center;
  text-shadow: white 1px 0 10px;  

 
  @media screen and (max-width: 1100px) {
    font-size:4.5rem;
    text-shadow: white 1px 0 10px;  

    @media screen and (max-width: 830px) {
      font-size:3.0rem;

      top: 10%;
      left: 50%;
      text-shadow: white 1px 0 10px;  

`;
const TTextStyled = styled.span`
  position: absolute;
  top: 20%;
  left: 28%;
  transform: translate(-50%, -50%);
  font-size: 3.6rem;
  color: white;
  z-index: 2;
  text-align: center;
  text-shadow: white 1px 0 10px;  

  @media screen and (max-width: 1100px) {
    font-size:2.7rem;
    top: 19%;
    left: 28%;
    text-shadow: white 1px 0 10px;  

    @media screen and (max-width: 830px) {
      top: 15%;
      left: 50%;
      font-size:1.1rem;
      text-shadow: white 1px 0 10px;  

`;

function MyImage() {
  const [position, setPosition] = useState(0);

  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <CommonStyled>
      <ImgSection>
        <StyledImg src={My} />

        <TextStyled>
          <Rotate top left cascade>
            Web
          </Rotate>
        </TextStyled>
        <TTextStyled>
          {" "}
          <Rotate bottom right cascade>
            FrontEnd developer
          </Rotate>
        </TTextStyled>
      </ImgSection>
    </CommonStyled>
  );
}

export default MyImage;
