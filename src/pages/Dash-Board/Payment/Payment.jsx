import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Components/Hooks/useAxios";
import Loading from "../../../Components/Loading/Loading";

const Payment = () => {
  const { productId } = useParams();
  const axios = useAxios();

  const { data: product, isLoading } = useQuery({
    queryKey: ["products", productId],
    queryFn: async () => {
      const res = await axios.get(`/add-to-cart/item/${productId}`);
      return res.data;
    },
  });

  // handle payment functionality
  const handlePayment = async () => {
    const paymentInfo = {
      price: product.price,
      productId: product._id,
      userEmail: product.userEmail,
      toyName: product.toyName,
    };

    const res = await axios.post("/create-checkout-session", paymentInfo);
    console.log(res.data);
    window.location.href = res.data.url
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          🛒 Checkout Summary
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Product Image */}
          <div className="w-full flex justify-center">
            <img
              src={product.pictureURL}
              alt={product.toyName}
              className="w-64 rounded-xl shadow-sm border border-gray-200"
            />
          </div>

          {/* Product Information */}
          <div>
            <p className="text-lg text-gray-700 mb-1">
              Product: <span className="font-semibold">{product.toyName}</span>
            </p>
            <p className="text-[0.9rem] text-gray-700 mb-1">
              Buyer Email: <span>{product.userEmail}</span>
            </p>

            <p className="text-xl font-bold text-green-600 mt-4">
              Total: ${product.price}
            </p>

            <button
              onClick={handlePayment}
              className="btn w-full bg-gradient-to-r from-[#FFC72C] to-[#FFE926] text-gray-900 font-bold mt-6 rounded-lg border-none hover:brightness-110"
            >
              Proceed to Payment 💳
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between text-gray-500">
          <p className="text-sm">Secure checkout 🔐 | Stripe Protected</p>
          <p className="text-sm">No hidden charges</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
