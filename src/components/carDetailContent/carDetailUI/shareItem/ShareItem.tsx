import { useState } from "react";

import "./ShareItem.scss"

const ShareItem = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="share__item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        cursor: "pointer",
        transition: "fill 0.3s",
      }}
      onClick={() => alert("Данная функция пока что недоступна")}
    >
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect
            fill="none"
            id="canvas_background"
            height="402"
            width="582"
            y="-1"
            x="-1"
          />
        </g>
        <g>
          <path
            id="svg_1"
            fill={isHovered ? "#ff0000" : "#1a76cb"}
            d="m9.048109,0.64378a0.987531,0.982619 0 0 1 1.854031,0l2.023607,5.063964c0.144306,0.361948 0.471488,0.608761 0.84655,0.640522l5.253531,0.438043c0.88911,0.07411 1.250207,1.230756 0.571903,1.834885l-4.001993,3.56853c-0.285952,0.254753 -0.410972,0.654418 -0.323192,1.035555l1.222277,5.33526c0.207481,0.903878 -0.737489,1.61851 -1.499584,1.134148l-4.496756,-2.859191a0.966251,0.961445 0 0 0 -1.046716,0l-4.497421,2.858529c-0.761429,0.485024 -1.7064,-0.229609 -1.499584,-1.133486l1.223607,-5.33526a1.079301,1.073934 0 0 0 -0.323857,-1.035555l-4.001993,-3.56853c-0.678304,-0.604791 -0.317207,-1.760113 0.571903,-1.834885l5.253531,-0.438043a1.008811,1.003794 0 0 0 0.84655,-0.640522l2.023607,-5.063964z"
          />
        </g>
      </svg>
      <a href="#">Добавить в избранное</a>
    </div>
  );
};

export { ShareItem };
