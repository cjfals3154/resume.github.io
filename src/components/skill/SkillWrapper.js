import React from "react";
import styled from "styled-components";

import SkillIcon from "./SkillIcon";
const SkillWarper = styled.div`
  justify-content: center;
  text-align: center;

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

function SkillWrapper() {
  return (
    <>
      <br />
      <br />

      <SkillWarper>
        <h1>Skill .·.·</h1>
        <div
          style={{
            borderBottom: "3px solid black",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            margin: "auto",
            width: 1000,
          }}
        ></div>
        <span>
          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        </span>
        <br />
        <div>
          <span>
            " 웹 표준, 웹 접근성을 고려한 시멘틱 마크업 작업이 가능합니다.{" "}
            <br />
            React, Redux, ReduxSaga, Next 언어의 <br />
            기본적인 문법에 대해 익히고 사용하며 지속적인 공부를 진행하고
            있습니다. "
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
