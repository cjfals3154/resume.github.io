import React from "react";
import styled from "styled-components";
import { UpSquareFilled } from "@ant-design/icons";
const ArrowButton = styled(UpSquareFilled)`
  font-size: 40px;
  color: white;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    background-color: orange;
    transform: scale(1.4);
  }
`;
function Footer() {
  const moveTop = () => (document.documentElement.scrollTop = 0);

  return (
    <>
      <br />
      <br />
      <div
        style={{
          height: 170,
          backgroundColor: "gray",
          textAlign: "center",
        }}
      >
        <br />
        <ArrowButton onClick={moveTop} />

        <br />
        <br />
        <span
          style={{
            color: "#ececec",
          }}
        >
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ <br />
        </span>
        <span
          style={{
            color: "white",
          }}
        >
          2022. ShinCheolMin All rights reserved
        </span>
      </div>
    </>
  );
}
export default Footer;
