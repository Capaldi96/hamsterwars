import React, { useEffect, useState } from "react";

const FadeEffectLatestBattles = ({ showLatestBattles, children }) => {
  const [render, setRender] = useState(showLatestBattles);

  useEffect(() => {
    if (showLatestBattles) setRender(true);
  }, [showLatestBattles]);

  const onAnimationEnd = () => {
    if (!showLatestBattles) setRender(false);
  };

  return (
    render && (
      <div
        style={{ animation: `${showLatestBattles ? "fadeIn" : "fadeOut"} 0.4s` }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

export default FadeEffectLatestBattles;