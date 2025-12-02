import React from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import { IoMdInformationCircle } from "react-icons/io";
import { TbHomeFilled } from "react-icons/tb";
import { Link, Outlet } from "react-router";

const DashBoardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <BsBoxArrowInRight size={25} />
          </label>
          <div className="px-4">Navbar Title</div>
        </nav>

        {/* outlet */}
        <main className="w-11/12 mx-auto py-5">
          <Outlet></Outlet>
        </main>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* Home */}
            <li>
              <Link
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
                to="/"
              >
                {/* Home icon */}
                <TbHomeFilled size={25} />
                <span className="is-drawer-close:hidden">Homepage</span>
              </Link>
            </li>

            {/* Sell Info */}
            <li>
              <Link
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Sell Information"
                to="/dashboard/sell-info"
              >
                <IoMdInformationCircle size={25} />
                <span className="is-drawer-close:hidden">Sell Information</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
