import { Form, Card } from "antd";
import React from "react";
import styled from "styled-components";

import TodoList from "../../images/TodoList.png";
import StarBucks from "../../images/StarBucks.png";
import NodeBird from "../../images/NodeBird.png";
import SkillEffect from "../skill/SkillEffect";
import Zoom from "react-reveal/Zoom";

const ProjectWarper = styled.div`
  justify-content: center;
  text-align: center;
  padding-bottom: 50px;

  @media screen and (max-width: 740px) {
    justify-content: center;
    text-align: center;
  }
  & h1 {
    width: auto;
    color: #4e61ff;
    @media screen and (max-width: 800px) {
      width: auto;
      color: #4e61ff;
    }
  }
`;

const CardFormStyled = styled(Form)`
  width: 942px;
  margin: auto;

  @media screen and (max-width: 960px) {
    justify-content: center;
    text-align: center;
    width: 500px;
    @media screen and (max-width: 450px) {
        justify-content: center;
        text-align: center;
        width: 300px;

  }
`;

const TextStyled = styled.div`
  font-size: 13px;
  width: 250px;
  color: black;
  @media screen and (max-width: 960px) {
    font-size: 8px;
    width: 150px;
  }
`;

const CartStyled = styled(Card)`
  display: flex;
  margin-bottom: 30px;
  @media screen and (max-width: 450px) {
    display: block;
    justify-content: start;
    text-align: start;
  }
`;

function ProjectForm() {
  const { Meta } = Card;
  return (
    <>
      <ProjectWarper>
        <Zoom left cascade>
          <h1>Project</h1>
        </Zoom>
        <div
          style={{
            borderBottom: "3px solid #ececec",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            margin: "auto",
            width: "auto",
            marginLeft: 60,
            marginRight: 60,
          }}
        ></div>
      </ProjectWarper>
      <CardFormStyled>
        <CartStyled cover={<img alt="example" src={StarBucks} />}>
          <Meta
            title={
              <div style={{ fontWeight: 700, color: "#4e61ff", fontSize: 20 }}>
                스타벅스
              </div>
            }
            description={
              <>
                <TextStyled>
                  <div style={{ marginBottom: 25 }}>
                    👨‍💻 인원 : 1명 (개인 프로젝트) <br />
                    👇 스킬 및 사용 툴 <br />
                    HTML5, CSS, JavaScript
                  </div>
                  <div>
                    HTML 웹접근성과 마크업을 기초로한 작업 <br />
                    Youtube iframe API를 활용한 영상배경 적용
                  </div>
                </TextStyled>
              </>
            }
          />
        </CartStyled>
        <br />

        <CartStyled
          cover={<img alt="example" src={TodoList} style={{ padding: 1 }} />}
        >
          <Meta
            title={
              <div style={{ fontWeight: 700, color: "#4e61ff", fontSize: 20 }}>
                감정일기장
              </div>
            }
            description={
              <>
                <TextStyled>
                  <div style={{ marginBottom: 25, padding: 1 }}>
                    👨‍💻 인원 : 1명 (개인 프로젝트) <br />
                    👇 스킬 및 사용 툴 <br />
                    HTML5, CSS, JavaScript
                    <br />
                    React,React-router
                  </div>
                  <div>
                    TodoList기능구현(CRUD) <br />
                    ReactContext로 데이터 전역관리 <br />
                    React.Memo로 리랜더링 최소화 <br />
                  </div>
                </TextStyled>
              </>
            }
          />
        </CartStyled>

        <br />

        <CartStyled
          cover={<img alt="example" src={NodeBird} style={{ padding: 1 }} />}
        >
          <Meta
            title={
              <div style={{ fontWeight: 700, color: "#4e61ff", fontSize: 20 }}>
                SNS플랫폼
              </div>
            }
            description={
              <>
                <TextStyled>
                  <div style={{ marginBottom: 25 }}>
                    👨‍💻 인원 : 1명 (개인 프로젝트) <br />
                    👇 스킬 및 사용 툴 <br />
                    HTML5, CSS, JavaScript, React
                    <br />
                    redux, reduxSaga, next.js
                    <br />
                    styled-components, AntDesign
                  </div>
                  <div>
                    SNS기능구현(CRUD) <br />
                    redux-saga로 데이터 전역관리 <br />
                    프로필 기능 구현 <br />
                    회원가입 및 로그아웃 구현 <br />
                  </div>
                </TextStyled>
              </>
            }
          />
        </CartStyled>
      </CardFormStyled>
      <br />
      <br />
      <br />
    </>
  );
}

export default ProjectForm;
