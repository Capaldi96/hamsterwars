import React, { useEffect, useState } from "react";

const FadeEffectTop5Winners = ({ showTop5Winners, children }) => {
  const [render, setRender] = useState(showTop5Winners);

  useEffect(() => {
    if (showTop5Winners) setRender(true);
  }, [showTop5Winners]);

  const onAnimationEnd = () => {
    if (!showTop5Winners) setRender(false);
  };

  return (
    render && (
      <div
        style={{ animation: `${showTop5Winners ? "fadeIn" : "fadeOut"} 0.8s` }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

export default FadeEffectTop5Winners;