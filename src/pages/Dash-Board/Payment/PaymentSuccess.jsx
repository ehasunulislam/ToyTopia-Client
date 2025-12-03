import Lottie from "lottie-react";
import React from "react";
import { assets } from "../../../assets/assets";
import useAuthInfo from "../../../Components/Hooks/useAuthInfo";

const PaymentSuccess = () => {
  const { user } = useAuthInfo();
  return (
    <div className="flex flex-col justify-center items-center">
      <Lottie animationData={assets.paymentSuccess} loop={true} />

      <h2 className="text-[1rem] md:text-2xl">Your Payment is successful</h2>
      <p>Congratulation: {user.displayName}</p>
    </div>
  );
};

export default PaymentSuccess;
