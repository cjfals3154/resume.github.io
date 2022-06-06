import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import emoticon from "../../images/emoticon.jpeg";

const ResumeWarper = styled.div`
  justify-content: center;
  text-align: center;
  padding-top: 30px;
  padding-left: 10px;
  padding-right: 10px;

  @media screen and (max-width: 740px) {
    justify-content: center;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
  }
  @media screen and (max-width: 1000px) {
    justify-content: center;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
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
  @media screen and (max-width: 1000px) {
    font-size: 30px;
    font-weight: bold;
    display: inline-block;
    width: 300px;
  }
`;

const ImgStyled = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 150px;
  margin: 40px;
  @media screen and (max-width: 740px) {
    width: 200px;
    height: 200px;
    margin-bottom: 10px;
    justify-content: center;
    text-align: center;
  }
  @media screen and (max-width: 1000px) {
    width: 200px;
    height: 200px;
    margin-bottom: 10px;
  }
`;

const ContactStyled = styled.div`
  display: inline-block;
  margin-left: 20px;
  text-align: start;
  @media screen and (max-width: 800px) {
    text-align: center;
  }
  & h2 {
    color: #4e61ff;
    font-size: 30px;
  }
  & p {
    font-size: 15px;
  }
  @media screen and (max-width: 1000px) {
    text-align: center;
  }
  & h2 {
    color: #4e61ff;
    font-size: 30px;
  }
  & p {
    font-size: 15px;
  }
`;

const ResumeRow = styled(Row)`
  @media screen and (max-width: 855px) {
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 50px;
  }
`;

const ColStyled = styled(Col)`
  justify-content: end;
  text-align: end;
  padding-right: 70px;
  @media screen and (max-width: 768px) {
    justify-content: center;
    text-align: center;
    padding-right: 0px;
  }
`;
const ColStyled2 = styled(Col)`
  justify-content: start;
  text-align: start;
  padding-left: 70px;
  @media screen and (max-width: 768px) {
    justify-content: center;
    text-align: center;
    padding-left: 0px;
  }
`;

function HomeResume() {
  return (
    <>
      <ResumeWarper>
        <ResumeText> 🙋‍♂️ 신철민 | Resume </ResumeText>

        <ResumeRow>
          <ColStyled xs={24} md={12}>
            <ImgStyled src={emoticon} />
          </ColStyled>
          <ColStyled2 xs={24} md={12}>
            <ContactStyled>
              <h2 style={{ paddingTop: 30 }}>Contact 🙌</h2>
              <p>
                Email. <u>cjfals3154@naver.com</u>
              </p>
              <p>
                Phone. <u>010-3943-3154</u>
              </p>
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
          </ColStyled2>
        </ResumeRow>
      </ResumeWarper>
    </>
  );
}
export default HomeResume;
