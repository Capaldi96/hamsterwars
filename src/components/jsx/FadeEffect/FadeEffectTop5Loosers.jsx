import React, { useEffect, useState } from "react";

const FadeEffectTop5Loosers = ({ showTop5Loosers, children }) => {
  const [render, setRender] = useState(showTop5Loosers);

  useEffect(() => {
    if (showTop5Loosers) setRender(true);
  }, [showTop5Loosers]);

  const onAnimationEnd = () => {
    if (!showTop5Loosers) setRender(false);
  };

  return (
    render && (
      <div
        style={{ animation: `${showTop5Loosers ? "fadeIn" : "fadeOut"} 0.8s` }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

export default FadeEffectTop5Loosers;