import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import emoticon from "../../images/emoticon.jpeg";

const ResumeWarper = styled.div`
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 740px) {
    justify-content: center;
    text-align: center;
  }
`;

const ResumeText = styled.span`
  font-size: 30px;
  font-weight: bold;

  @media screen and (max-width: 740px) {
    font-size: 30px;
    font-weight: bold;
    display: inline-block;
    width: 300px;
  }
`;

const ImgStyled = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  display: inline-block;
  margin-bottom: 300px;
  @media screen and (max-width: 740px) {
    width: 200px;
    height: 200px;
    margin-bottom: 10px;
  }
`;

const ContactStyled = styled.div`
  display: inline-block;
  margin-left: 20px;
  text-align: start;

  & h2 {
    color: orange;
    font-size: 30px;
  }
  & p {
    font-size: 15px;
  }
`;

function HomeResume() {
  return (
    <>
      <br />
      <br />
      <ResumeWarper>
        <ResumeText> ━ 신철민 | Resume ━ </ResumeText>
        <br />
        <br />
        <div>
          <ImgStyled src={emoticon} />

          <ContactStyled>
            <h2>Contact 🙌</h2>
            <p>
              Email. <u>cjfals3154@naver.com</u>
            </p>
            <p>
              Phone. <u>010-3943-3154</u>
            </p>
            <br />
            <br />
            <h2>Chanel 👀</h2>
            <p>
              GitHub.
              <a
                href="https://github.com/cjfals3154"
                target="blank"
                style={{ color: "black" }}
              >
                <u> https://github.com/cjfals3154</u>
              </a>
            </p>
            <p>
              Instagram.
              <a href="https://www.instagram.com/shincheol9/" target="blank">
                <u style={{ color: "black" }}> shincheol9</u>
              </a>
            </p>
          </ContactStyled>
        </div>
        {/* <div style={{ color: "black", borderBottom: "1px solid gray" }}></div> */}
      </ResumeWarper>
    </>
  );
}
export default HomeResume;
