import React, { useState } from "react";

import "./FavoriteItem.scss";

const FavoriteItem = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="favorite__item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        cursor: "pointer",
        transition: "fill 0.3s",
      }}
      onClick={() => alert("Данная функция пока что недоступна")}
    >
      <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
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
            id="svg_2"
            fill={isHovered ? "#ff0000" : "#1a76cb"}
            d="M14.319 7.2C16.352 7.2 18 5.588 18 3.6S16.352 0 14.32 0c-2.034 0-3.682 1.612-3.682 3.6 0 .116.005.231.016.344L5.925 7.145A3.72 3.72 0 0 0 3.682 6.4C1.648 6.4 0 8.012 0 10s1.648 3.6 3.682 3.6a3.72 3.72 0 0 0 2.243-.745l4.728 3.2a3.557 3.557 0 0 0-.016.345c0 1.988 1.648 3.6 3.682 3.6C16.352 20 18 18.388 18 16.4s-1.648-3.6-3.681-3.6a3.713 3.713 0 0 0-2.605 1.055L7.263 10.84a3.533 3.533 0 0 0 0-1.682l4.452-3.014A3.712 3.712 0 0 0 14.319 7.2Z"
          />
        </g>
      </svg>
      <a href="#">Поделиться объявлением</a>
    </div>
  );
};

export { FavoriteItem };
