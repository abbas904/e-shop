import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
const Modal = lazy(() => import("./Modal"));
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
import { setSearchTerm } from "../redux/ProductSlice";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/AuthSlice";
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogIn, setIsLogIn] = useState(true);
  const[search, setSearch]= useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch=(e)=>{
    e.preventDefault()
    dispatch(setSearchTerm(search))
    navigate('/filter-data')
  }
  const openLogin=()=>{
    setIsLogIn(true)
    setIsModalOpen(true)
  }
   const openSignUp=()=>{
    setIsLogIn(false)
    setIsModalOpen(true)
  }
  const cartCount = useSelector((state) => state.cart.products.length);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleAuthClick = () => {
    if (isAuthenticated) {
      dispatch(logout())
    } else {
      setIsLogIn(true)
      setIsModalOpen(true)
    }
  }
  
  return (
    <nav className="bg-white shadow-md ">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link to="/">
            {" "}
            <span className="text-pink-700">Sh</span>oppix
          </Link>
        </div>
        <div className="relative flex-1 mx-4 text-pink-950">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full border-pink-700 border-1 rounded-2xl py-2 px-4 focus:outline-none focus:border-b-pink-600"
              onChange={(e) => setSearch(e.target.value)} />
            <FaSearch className="absolute top-3 right-3 text-pink-700"></FaSearch>
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-lg text-pink-700" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-3  bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <button 
            className="hidden md:block"
            onClick={handleAuthClick}
          >
            {isAuthenticated ? 'Logout' : 'Login | Register'}
          </button>
          <button 
            className="block md:hidden"
            onClick={handleAuthClick}
            aria-label={isAuthenticated ? 'Logout' : 'Login'}
          >
            {isAuthenticated ? <FaSignOutAlt /> : <FaUser />}
          </button>

        </div>
      </div>
      <div className=" space-x-16 py-4 flex items-center justify-center text-lg font-sans text-pink-900 ">
        <div className="flex gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 font-bold"
                : "text-gray-800 hover:text-pink-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 font-bold"
                : "text-gray-800 hover:text-pink-600"
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 font-bold"
                : "text-gray-800 hover:text-pink-600"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 font-bold"
                : "text-gray-800 hover:text-pink-600"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
      <Suspense fallback={null}>
        <Modal isModalOpen={isModalOpen}  setIsModalOpen={setIsModalOpen}>
          {isLogIn ? (
            <Login openSignUp={openSignUp} onLoggedIn={() => setIsModalOpen(false)} />
          ) : (
            <Register openLogin={openLogin} onRegistered={() => setIsModalOpen(false)} />
          )}
        </Modal>
      </Suspense>
    </nav>
  );
};

export default Navbar;
