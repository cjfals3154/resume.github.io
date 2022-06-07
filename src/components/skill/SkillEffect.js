import React, { useRef } from "react";

function SkillEffect({ children, text }) {
  return (
    <div>
      <div className="skill-icon transition-[transform] rotate-[0deg] ease-in-out duration-700">
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
