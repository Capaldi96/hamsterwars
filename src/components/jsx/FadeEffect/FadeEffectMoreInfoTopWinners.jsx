import React, { useEffect, useState } from "react";

const FadeEffectMoreInfoTopWinners = ({ showMoreInfoTopWinners, children }) => {
  const [render, setRender] = useState(showMoreInfoTopWinners);

  useEffect(() => {
    if (showMoreInfoTopWinners) setRender(true);
  }, [showMoreInfoTopWinners]);

  const onAnimationEnd = () => {
    if (!showMoreInfoTopWinners) setRender(false);
  };

  return (
    render && (
      <div
        style={{ animation: `${showMoreInfoTopWinners ? "fadeIn" : "fadeOut"} 0.8s` }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

export default FadeEffectMoreInfoTopWinners;