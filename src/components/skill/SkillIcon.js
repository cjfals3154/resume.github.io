import React from "react";
import { Row, Col } from "antd";
import {
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiNextdotjs,
  SiRedux,
  SiReact,
  SiReduxsaga,
  SiAntdesign,
} from "react-icons/si";

import SkillEffect from "./SkillEffect";
import styled from "styled-components";

const RowStyled = styled(Row)`
  padding-bottom: 50px;
  margin-left: 300px;
  margin-right: 300px;

  @media screen and (max-width: 1100px) {
    justify-content: center;
    text-align: center;
    padding-bottom: 50px;

    margin-left: 5px;
    margin-right: 5px;
  }
`;

function SkillIcon() {
  return (
    <>
      <div>
        <RowStyled justify="center">
          <Col xs={12} md={6}>
            <SkillEffect text={"Html"}>
              <SiHtml5 color="#ff5723" size="80" />
            </SkillEffect>
          </Col>
          <Col xs={12} md={6}>
            <SkillEffect text={"Css"}>
              <SiCss3 color="#007bc9" size="80" />
            </SkillEffect>
          </Col>
          <div style={{ marginBottom: 150 }}></div>
          <Col xs={12} md={6}>
            <SkillEffect text={"JavaScript"}>
              <SiJavascript color="#f7e018" size="80" />
            </SkillEffect>
          </Col>
          <Col xs={12} md={6}>
            <SkillEffect text={"React"}>
              <SiReact color="#61dafb" size="80" />
            </SkillEffect>
          </Col>

          <div style={{ marginBottom: 150 }}></div>
          <Col xs={12} md={6}>
            <SkillEffect text={"Redux"}>
              <SiRedux color="#764abc" size="80" />
            </SkillEffect>
          </Col>
          <Col xs={12} md={6}>
            <SkillEffect text={"ReduxSaga"}>
              <SiReduxsaga size="80" />
            </SkillEffect>
          </Col>
          <div style={{ marginBottom: 150 }}></div>
          <Col xs={12} md={6}>
            <SkillEffect text={"Next.js"}>
              <SiNextdotjs size="80" />
            </SkillEffect>
          </Col>
          <Col xs={12} md={6}>
            <SkillEffect text={"Antdesign"}>
              <SiAntdesign size="80" />
            </SkillEffect>
          </Col>
        </RowStyled>
      </div>
    </>
  );
}

export default SkillIcon;
