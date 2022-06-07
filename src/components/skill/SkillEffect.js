import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";

function SkillEffect({ children, text }) {
  const [iconClick, setIconClick] = useState("");

  const onChangeIcon = useCallback((e) => {
    setIconClick();
  }, []);

  return (
    <div>
      <div
        className="skill-icon transition-[transform] rotate-[0deg] ease-in-out duration-700"
        onClick={onChangeIcon}
      >
        {children}
      </div>
      <div
        style={{ paddingLeft: 60, paddingRight: 60 }}
        style={{ fontWeight: 700 }}
        className="absolute bottom-[-2.5rem] sm:bottom-[-2rem] left-[50%] translate-x-[-50%] w-full font-bold text-sm text-center "
      >
        {text}
      </div>
    </div>
  );
}

export default SkillEffect;
