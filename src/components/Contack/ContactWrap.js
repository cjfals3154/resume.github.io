import React from "react";
import styled from "styled-components";

const ContactStyled = styled.div`
  justify-content: center;
  text-align: center;
  padding-bottom: 50px;

  @media screen and (max-width: 740px) {
    justify-content: center;
    text-align: center;
  }
  & h1 {
    width: 800px;
    color: orange;
    @media screen and (max-width: 800px) {
      width: auto;
      color: orange;
    }
  }
`;
function ContactWrap() {
  return (
    <>
      <ContactStyled>
        <span>
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        </span>
      </ContactStyled>
    </>
  );
}
export default ContactWrap;
