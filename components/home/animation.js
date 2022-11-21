import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

// import lottieJson from "/public/developer-skills.json";

export default function Animation() {
  const [animationData, setAnimationData] = useState();

  useEffect(() => {
    import("/public/developer.json").then(setAnimationData);
  }, []);
  if (!animationData) return <div>Loading...</div>;
  return <Lottie loop animationData={animationData} play speed='0.5' />;
}
