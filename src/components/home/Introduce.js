import React from "react";
import styled from "styled-components";
import ScrollOut from "scroll-out";
const IntroduceWarper = styled.div`
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

function Introduce() {
  return (
    <>
      <IntroduceWarper>
        <h1>Introduce .·.·</h1>
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
        <br />
        <div>
          <span style={{ fontSize: 20 }}>
            때 묻지 않은 신선한 개발자
            <u
              style={{
                color: "orange",
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
            " 독학을 하여 스스로 찾고 연마하는 <u>프로자습러</u>입니다. <br />{" "}
            그렇기 때문에 저는 클론 개발자가 아닌 신선한 개발자입니다."
          </span>
          <br />
          <br />
          <br />
          <span style={{ fontSize: 15 }}>
            " 개발은 혼자하는 작업이 아니라는 것 잘 알고있습니다. <br />
            독학이라는 단점을 극복하기 위해서 예비 개발자 <br />
            4명과 함께 1개월 간 <u> 모각코</u>를 운영하며 지식을 공유 했습니다.
            <br />
            또한 광고회사에 1년간 기획자로서 재직하며 디자이너와의
            <br />
            <u> 협업경험</u>으로 팀 간의 커뮤니케이션의 중요성을 잘
            알고있습니다. "
          </span>
          <br />
          <br />
          <br />
          <span style={{ fontSize: 15 }}>
            " 현재 React기반으로 Redux, Next로 개발을 진행하며 <br />
            귀사에 지원하는 순간까지 끊임없이 공부하고 발전하고 있습니다. "
          </span>
        </div>
      </IntroduceWarper>
    </>
  );
}

export default Introduce;
