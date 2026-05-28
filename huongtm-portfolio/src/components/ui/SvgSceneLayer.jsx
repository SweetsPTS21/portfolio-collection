import React from "react";

export const SvgSceneLayer = ({
  src,
  className = "",
  style = {},
  ariaLabel = "",
}) => {
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 0,
        ...style,
      }}
      aria-hidden="true"
    >
      <img
        src={src}
        alt={ariaLabel || "decor"}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
