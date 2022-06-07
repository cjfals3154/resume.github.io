import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { gsap, Power3 } from "gsap";

function SkillEffect({ children, text }) {
  const [iconClick, setIconClick] = useState("");
  const logoItem = useRef(null);
  const logoText = useRef(null);

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.0 });
  };

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.33 });
  };

  // const onChangeIcon = useCallback((e) => {
  //   setIconClick();
  // }, []);

  return (
    <div>
      <div
        className="skill-icon transition-[transform] rotate-[0deg] ease-in-out duration-700"
        // onClick={onChangeIcon}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        ref={logoItem}
      >
        {children}
      </div>
      <div
        style={{ fontWeight: 700, marginTop: 15 }}
        className="absolute bottom-[-2.5rem] sm:bottom-[-2rem] left-[50%] translate-x-[-50%] w-full font-bold text-sm text-center "
      >
        {text}
      </div>
    </div>
  );
}

export default SkillEffect;
