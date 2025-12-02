import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Link, Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";
import TopBar from "../../Components/Topbar/Topbar";
import { BsFillTelephoneFill } from "react-icons/bs";

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <TopBar></TopBar>
        <Navbar></Navbar>
      </header>

      <main className="flex-1">
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>

      <div className="fixed bottom-5 right-5 bg-[#0F83B2] rounded-full w-12 h-12 flex justify-center items-center shadow-lg z-50 hover:bg-blue-700 transition">
        <Link to="/contact">
          <BsFillTelephoneFill className="text-white text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default HomeLayout;
