import React from "react";
import Title from "../Title/Title";

const NewsLetter = () => {
  return (
    <div className="my-10 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
      {/* Header */}
      <div className="letter-header text-center mb-6">
        <Title
          title1={<>Newsletter</>}
          title2={
            <>
              Get 15% off your first purchase! Plus, be the first to know about
              sales,
              <br className="hidden sm:block" /> new product launches, and
              exclusive offers!
            </>
          }
        />
      </div>

      {/* Form Section */}
      <div className="from-section flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-6">
        <div className="join flex flex-col sm:flex-row items-center w-full sm:w-auto">
          {/* Input field */}
          <label className="input validator join-item w-full sm:w-[300px] md:w-[350px] lg:w-[400px] flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
            <svg
              className="h-[1.2em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              placeholder="mail@site.com"
              required
              className="flex-1 outline-none bg-transparent text-sm"
            />
          </label>

          {/* Button */}
          <button className="btn btn-neutral join-item mt-3 sm:mt-0 sm:ml-2 w-full sm:w-auto bg-[#0F83B2] border-0 rounded-[10px]">
            Join
          </button>
        </div>

        {/* Validation hint (optional) */}
        <div className="validator-hint text-xs text-red-500 hidden mt-2 sm:mt-0">
          Enter valid email address
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
