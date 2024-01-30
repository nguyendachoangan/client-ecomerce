import React, { memo } from "react";

const Button = ({ children, handleOnclick, style, fw, type = "button" }) => {
  const buttonStyle = style
    ? style
    : `px-4 py-2 rounded-md text-white bg-main font-semibold my-2 ${
        fw ? "w-full" : "w-fit"
      }`;

  return (
    <button
      type={type}
      className={buttonStyle}
      onClick={() => {
        handleOnclick && handleOnclick();
      }}
    >
      <span>{children}</span>
    </button>
  );
};

export default memo(Button);
