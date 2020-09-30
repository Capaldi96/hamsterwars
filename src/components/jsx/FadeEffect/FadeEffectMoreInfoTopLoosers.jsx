import React, { useEffect, useState } from "react";

const FadeEffectMoreInfoTopLoosers = ({ showMoreInfoTopLoosers, children }) => {
  const [render, setRender] = useState(showMoreInfoTopLoosers);

  useEffect(() => {
    if (showMoreInfoTopLoosers) setRender(true);
  }, [showMoreInfoTopLoosers]);

  const onAnimationEnd = () => {
    if (!showMoreInfoTopLoosers) setRender(false);
  };

  return (
    render && (
      <div
        style={{ animation: `${showMoreInfoTopLoosers ? "fadeIn" : "fadeOut"} 0.4s` }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

export default FadeEffectMoreInfoTopLoosers;