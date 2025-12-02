import { RiMenu2Line } from "react-icons/ri";
import { assets } from "../../assets/assets";
import { Link, NavLink } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import "./Navbar.css";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutFunction } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutFunction()
      .then(() => {
        toast.success("sign out successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // 1. Define your base links here
  const links = [
    { path: "/", title: "Home" },
    { path: "/card/showAllCards", title: "All Toys" },
    { path: "/contact", title: "Contact" },
  ];

  // 2. Add protected links if user is logged in
  if (user) {
    links.push({ path: "/product/sell-product", title: "Sell Product" });
    links.push({ path: "/auth/myProfile", title: "My Profile" });
  }

  // 3. Generate the JSX for the links
  const navLinks = links.map((link) => (
    <NavLink 
      key={link.path} 
      to={link.path} 
      className={({ isActive }) => 
        `me-3 ${isActive ? "font-bold text-[#0F83B2]" : ""}`
      }
    >
      {link.title}
    </NavLink>
  ));

  return (
    <div className="navbar mt-10 px-3 md:px-8 lg:px-10">
      <div className="navbar-start">
        <Link to="/" className="ext-xl">
          <img src={assets.logo} alt="logo" className="w-30" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end">
        <div className="relative pe-3 group">
          {user && (
            <>
              <Link to="/auth/myProfile">
                <img
                  src={user.photoURL}
                  alt="user image"
                  className="w-10 h-10 rounded-full cursor-pointer"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {user?.displayName || "No name"}
              </span>
            </>
          )}
        </div>

        {user ? (
          <button
            className="btn bg-[#0F83B2] text-white rounded-full px-6"
            onClick={handleSignOut}
          >
            Log Out
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn bg-[#0F83B2] text-white rounded-full px-6"
          >
            Login
          </Link>
        )}

        {/* Mobile Dropdown */}
        <div className="dropdown relative">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <RiMenu2Line />
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-20 mt-3 w-52 p-2 shadow right-0">
             {/* Dynamic links reused here */}
             {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;