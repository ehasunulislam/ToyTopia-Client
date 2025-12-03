import React from 'react'
import useAuthInfo from '../../../Components/Hooks/useAuthInfo';
import { assets } from '../../../assets/assets';
import { Link } from 'react-router';
import Lottie from 'lottie-react';

const PaymentCancel = () => {
   const { user } = useAuthInfo();
  return (
    <div className="flex flex-col justify-center items-center">
      <Lottie animationData={assets.paymentCanceled} loop={true} />

      <h2 className="text-[1rem] md:text-2xl">Your Payment is Un-successful</h2>
      <p>Sorry: {user.displayName}</p>

      <Link to="/dashboard/your-cart"><button className='btn btn-black'>Try Again</button></Link>
    </div>
  )
}

export default PaymentCancel