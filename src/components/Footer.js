import React from "react";
import styled from "styled-components";

function Footer() {
  const moveTop = () => (document.documentElement.scrollTop = 0);

  return (
    <>
      <div
        style={{
          height: 100,
          backgroundColor: "gray",
          textAlign: "center",
        }}
      >
        <br />

        <span
          style={{
            color: "#ececec",
          }}
        >
          ━━━━━━━━━━━━━━━━━ <br />
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
