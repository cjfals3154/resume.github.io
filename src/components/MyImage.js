import React, { useState } from "react";
import styled from "styled-components";
import My from "../images/My.jpeg";
import TypeIt from "typeit-react";
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
  width: 80%;
  height: 100%;
  object-fit: cover;
  filter: brightness(50%);
`;

const TextStyled = styled.span`
  @import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Nanum+Pen+Script&display=swap");
  position: absolute;
  top: 20%;
  left: 23%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  color: white;
  z-index: 2;
  text-align: center;
  font-family: "Alfa Slab One", cursive;
  @media screen and (max-width: 740px) {
    font-size:3rem;
`;
const TTextStyled = styled.span`
  @import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Nanum+Pen+Script&display=swap");
  position: absolute;
  top: 28%;
  left: 36%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  color: white;
  z-index: 2;
  text-align: center;
  font-family: "Alfa Slab One", cursive;
  @media screen and (max-width: 740px) {
    font-size:1.5rem;
    top: 25%;
    left: 40%;
`;

function MyImage() {
  const [buttonText, setButtonText] = useState("Freeze");
  const [instance, setInstance] = useState(null);

  return (
    <CommonStyled>
      <ImgSection>
        <StyledImg src={My} />
        <TypeIt
          options={{ loop: true }}
          getAfterInit={(instance) => {
            setInstance(instance);
            return instance;
          }}
        >
          <TextStyled>Web .·.· </TextStyled>
          <TTextStyled>FrontEnd developer </TTextStyled>
        </TypeIt>
      </ImgSection>
    </CommonStyled>
  );
}

export default MyImage;
