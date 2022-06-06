import React from "react";
import styled from "styled-components";
import ButtonTop from "../ButtonTop";
import Zoom from "react-reveal/Zoom";
const IntroduceWarper = styled.div`
  justify-content: center;
  text-align: center;
  padding-left: 60px;
  padding-right: 60px;
  @media screen and (max-width: 740px) {
    justify-content: center;
    text-align: center;
    padding-left: 60px;
    padding-right: 60px;
  }
  & h1 {
    color: #4e61ff;
    @media screen and (max-width: 800px) {
      width: auto;
      color: #4e61ff;
    }
  }
`;

function Introduce() {
  return (
    <>
      <IntroduceWarper>
        <Zoom left cascade>
          <h1>Introduce</h1>
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
          <span style={{ fontSize: 20, fontWeight: 700 }}>
            때 묻지 않은 신선한 개발자
            <u
              style={{
                color: "#4e61ff",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              신철민
            </u>
            입니다.
          </span>
          <br />
          <br />
          <span style={{ fontSize: 15 }}>
            독학을 하여 스스로 찾고 연마하는 <u>프로자습러</u>입니다. <br />
            그렇기 때문에 저는 클론 개발자가 아닌 신선한 개발자입니다.
          </span>
          <br />
          <br />
          <br />
          <span style={{ fontSize: 15 }}>
            개발은 혼자하는 작업이 아니라는 것 잘 알고있습니다. <br />
            독학이라는 단점을 극복하기 위해서 예비 개발자 <br />
            4명과 함께 1개월 간 <u> 모각코</u>를 운영하며 지식을 공유 했습니다.
            <br />
            또한 광고회사에 1년간 기획자로서 재직하며 디자이너와의
            <br />
            <u> 협업경험</u>으로 팀 간의 커뮤니케이션의 중요성을 잘
            알고있습니다.
          </span>
          <br />
          <br />
          <br />
          <span style={{ fontSize: 15 }}>
            현재 React기반 Next.js로 프로젝트의 성능향상에 초점을 맞추고 개발을
            진행하며 <br />
            글로벌 상태관리를 하기 위해서 Redux를
            <br />
            CSS 라이브러리로는 StyledComponent, Antdesign을 사용하고있습니다.
          </span>
        </div>
      </IntroduceWarper>
      <ButtonTop />
    </>
  );
}

export default Introduce;
