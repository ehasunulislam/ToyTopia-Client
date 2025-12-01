import React from "react";
import { assets } from "../../assets/assets";
import Lottie from "lottie-react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Lottie
        animationData={assets.loading}
        loop={true}
        style={{ width: 400, height: 400 }}
      />
    </div>
  );
};

export default Loading;
