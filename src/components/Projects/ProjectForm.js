import { Form, Card } from "antd";
import React from "react";
import styled from "styled-components";

import TodoList from "../../images/TodoList.png";
import StarBucksClone from "../../images/StarBucksClone.png";
import NodeBird from "../../images/NodeBird.png";
import SkillEffect from "../skill/SkillEffect";
const ProjectWarper = styled.div`
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

const CardFormStyled = styled(Form)`
  width: 942px;
  margin: auto;

  @media screen and (max-width: 960px) {
    justify-content: center;
    text-align: center;
    width: 500px;
    @media screen and (max-width: 370px) {
        justify-content: center;
        text-align: center;
        width: 300px;

  }
`;

const TextStyled = styled.div`
  font-size: 15px;
  width: 300px;

  color: black;
  @media screen and (max-width: 960px) {
    font-size: 8px;
    width: 150px;
  }
`;

const CartStyled = styled(Card)`
  display: flex;
  @media screen and (max-width: 370px) {
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
        <h1>Project .·.·</h1>
        <span>
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        </span>
      </ProjectWarper>
      <CardFormStyled>
        <CartStyled cover={<img alt="example" src={StarBucksClone} />}>
          <Meta
            title="StarBucksClone"
            description={
              <>
                <TextStyled>
                  👨‍💻 투입인원 : 1명 (개인 프로젝트) <br />
                  👇 스킬 및 사용 툴 <br />
                  HTML5, CSS, JavaScript
                  <br />
                  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                  <br /> HTML 웹접근성과 마크업을 기초로한 작업 <br />
                  Youtube iframe API를 활용한 영상배경 적용
                </TextStyled>
              </>
            }
          />
        </CartStyled>
        <br />

        <CartStyled cover={<img alt="example" src={TodoList} />}>
          <Meta
            title="TodoList"
            description={
              <>
                <TextStyled>
                  👨‍💻 투입인원 : 1명 (개인 프로젝트) <br />
                  👇 스킬 및 사용 툴 <br />
                  HTML5, CSS, JavaScript
                  <br />
                  React,React-router
                  <br />
                  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                  <br />
                  TodoList기능구현(CRUD) <br />
                  ReactContext로 데이터 전역관리 <br />
                  React.Memo로 리랜더링 최소화 <br />
                </TextStyled>
              </>
            }
          />
        </CartStyled>

        <br />

        <CartStyled cover={<img alt="example" src={NodeBird} />}>
          <Meta
            title="Twitter Clone"
            description={
              <>
                <TextStyled>
                  👨‍💻 투입인원 : 1명 (개인 프로젝트) <br />
                  👇 스킬 및 사용 툴 <br />
                  HTML5, CSS, JavaScript, React
                  <br />
                  redux, reduxSaga, next.js, AntDesign,
                  <br />
                  styled-components, React,React-router
                  <br />
                  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                  <br />
                  Twitter기능구현(CRUD) <br />
                  redux-saga로 데이터 전역관리 <br />
                  프로필 기능 구현 <br />
                  회원가입 및 로그아웃 구현 <br />
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
