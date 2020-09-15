import React, { useEffect, useState } from "react";

const FadeEffectLeastParticipated = ({ showLeastParticipated, children }) => {
  const [render, setRender] = useState(showLeastParticipated);

  useEffect(() => {
    if (showLeastParticipated) setRender(true);
  }, [showLeastParticipated]);

  const onAnimationEnd = () => {
    if (!showLeastParticipated) setRender(false);
  };

  return (
    render && (
      <div
        style={{ animation: `${showLeastParticipated ? "fadeIn" : "fadeOut"} 0.8s` }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

export default FadeEffectLeastParticipated;