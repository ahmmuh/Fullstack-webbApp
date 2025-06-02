import React from "react";

function MainButton({
  width,
  height,
  title,
  bgColor,
  clickHandler,
  color,
  border,
  hover,
  className
}) {
  return (
    <button
      onClick={clickHandler}
      className={`${bgColor} ${hover} ${border} ${color} ${width} ${height}   `}>
      {title}
    </button>
  );
}

export default MainButton;
