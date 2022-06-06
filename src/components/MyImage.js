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
  top: 7%;
  left: 8%;
  transform: translate(-50%, -50%);
  font-size: 6rem;
  color: white;
  z-index: 2;
  text-align: center;
  text-shadow: white 1px 0 10px;  

 
  @media screen and (max-width: 1320px) {
    font-size:4rem;
    text-shadow: white 1px 0 10px;  

    @media screen and (max-width: 880px) {
      top: 5%;
      left: 50%;
      text-shadow: white 1px 0 10px;  

`;
const TTextStyled = styled.span`
  position: absolute;
  top: 17%;
  left: 24%;
  transform: translate(-50%, -50%);
  font-size: 3.6rem;
  color: white;
  z-index: 2;
  text-align: center;
  text-shadow: white 1px 0 10px;  

  @media screen and (max-width: 1320px) {
    font-size:2.5rem;
    top: 15%;
    left: 22%;
    text-shadow: white 1px 0 10px;  

    @media screen and (max-width: 880px) {
      top: 12%;
      left: 50%;
      font-size:1.2rem;
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
