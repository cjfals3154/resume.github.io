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
                ????????????
              </div>
            }
            description={
              <>
                <TextStyled>
                  <div style={{ marginBottom: 25 }}>
                    ??????????? ?????? : 1??? (?????? ????????????) <br />
                    ???? ?????? ??? ?????? ??? <br />
                    HTML5, CSS, JavaScript
                  </div>
                  <div>
                    HTML ??????????????? ???????????? ???????????? ?????? <br />
                    Youtube iframe API??? ????????? ???????????? ??????
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
                ???????????????
              </div>
            }
            description={
              <>
                <TextStyled>
                  <div style={{ marginBottom: 25, padding: 1 }}>
                    ??????????? ?????? : 1??? (?????? ????????????) <br />
                    ???? ?????? ??? ?????? ??? <br />
                    HTML5, CSS, JavaScript
                    <br />
                    React,React-router
                  </div>
                  <div>
                    TodoList????????????(CRUD) <br />
                    ReactContext??? ????????? ???????????? <br />
                    React.Memo??? ???????????? ????????? <br />
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
                SNS?????????
              </div>
            }
            description={
              <>
                <TextStyled>
                  <div style={{ marginBottom: 25 }}>
                    ??????????? ?????? : 1??? (?????? ????????????) <br />
                    ???? ?????? ??? ?????? ??? <br />
                    HTML5, CSS, JavaScript, React
                    <br />
                    redux, reduxSaga, next.js
                    <br />
                    styled-components, AntDesign
                  </div>
                  <div>
                    SNS????????????(CRUD) <br />
                    redux-saga??? ????????? ???????????? <br />
                    ????????? ?????? ?????? <br />
                    ???????????? ??? ???????????? ?????? <br />
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
