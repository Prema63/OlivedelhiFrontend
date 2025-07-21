"use client";

import { LineWave } from "react-loader-spinner";

// Video is now served from the public folder, not imported
const videoSrc = "/assets/Animation - 1741187005591.webm";

export const LoadingMutatingDots = ({
  primaryColor = "#719430",
  // secondaryColor = "rgb(46, 126, 30)",
  radius = "12.5",
  className = "",
  containerStyles = {},
}) => {
  return (
    <div
      style={containerStyles}
      className={`fixed inset-0 flex items-center justify-center bg-white z-50 ${className}`}
    >
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        className="w-36 h-36 object-contain"
      />
    </div>
  );
};

export const LoadingLineWave = ({
  color = "#719430",
  colors = ["#719430", "#719430", "#719430"],
  className = "",
}) => {
  return (
    <div className={`py-2 flex justify-center ${className}`}>
      <LineWave
        height="100"
        width="100"
        color={color}
        ariaLabel="line-wave"
        visible={true}
        firstLineColor={colors[0]}
        middleLineColor={colors[1]}
        lastLineColor={colors[2]}
      />
    </div>
  );
};
