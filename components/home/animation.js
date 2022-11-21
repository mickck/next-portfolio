import React from "react";
// import Lottie from "react-lottie-player";
import Lottie from "lottie-react";
import developer from "/public/developer.json";

// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

// import lottieJson from "/public/developer-skills.json";

export default function Animation() {
  return <Lottie loop={true} animationData={developer} play />;
}
