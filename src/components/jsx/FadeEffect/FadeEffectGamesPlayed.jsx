import React, { useEffect, useState } from "react";

const FadeEffectGamesPlayed = ({ showGamesPlayed, children }) => {
  const [render, setRender] = useState(showGamesPlayed);

  useEffect(() => {
    if (showGamesPlayed) setRender(true);
  }, [showGamesPlayed]);

  const onAnimationEnd = () => {
    if (!showGamesPlayed) setRender(false);
  };

  return (
    render && (
      <div
        style={{ animation: `${showGamesPlayed ? "fadeIn" : "fadeOut"} 0.4s` }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

export default FadeEffectGamesPlayed;