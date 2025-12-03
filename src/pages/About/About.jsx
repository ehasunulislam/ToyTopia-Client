import React from "react";
import { assets } from "../../assets/assets";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-10 flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={assets.r4}
            alt="About Toytopia"
            className="rounded-xl shadow-md w-full max-w-sm object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-[#0F83B2] mb-4">
            About Toytopia
          </h1>
          <p className="text-gray-700 mb-4">
            Toytopia is your go-to platform for high-quality toys that bring joy to kids and collectors alike. 
            We provide a variety of products ensuring both fun and learning.
          </p>
          <p className="text-gray-700 mb-6">
            Our goal is to connect toy enthusiasts with their favorite toys while ensuring a smooth and safe shopping experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/card/showAllCards"
              className="btn bg-[#0F83B2] text-white px-6 py-2 rounded-lg hover:bg-[#0b6399] transition text-center"
            >
              Explore Toys
            </a>
            <a
              href="/contact"
              className="btn bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#0F83B2] mb-6">Our Mission</h2>
        <p className="text-gray-700 text-lg">
          At Toytopia, we aim to make playtime fun and educational. We foster creativity, imagination, 
          and learning through play while connecting sellers and buyers with trust and transparency.
        </p>
      </div>
    </div>
  );
};

export default About;
