import React from "react";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";

import SkillIcon from "./SkillIcon";
const SkillWarper = styled.div`
  justify-content: center;
  text-align: center;
  padding-left: 60px;
  padding-right: 60px;

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

function SkillWrapper() {
  return (
    <>
      <br />
      <br />

      <SkillWarper>
        <Zoom left cascade>
          <h1>Skill</h1>
        </Zoom>
        <div
          style={{
            borderBottom: "3px solid #ececec",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            margin: "auto",
            width: "auto",
          }}
        ></div>
        <br />
        <div>
          <span>
            웹 표준, 웹 접근성을 고려한 시멘틱 마크업 작업이 가능합니다.
            <br />
            React, Redux, ReduxSaga, Next 언어의 <br />
            기본적인 문법에 대해 익히고 사용하며 지속적인 공부를 진행하고
            있습니다.
          </span>
        </div>
        <br />
        <br />
        <br />
        <SkillIcon />
      </SkillWarper>
    </>
  );
}
export default SkillWrapper;
