import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Authcontext } from '../AuthProvider/AuthProvider';

import { FaShoppingCart } from 'react-icons/fa';

import useCart from "../../hooks/useCart";



const Header = () => {
    const {user,logout}=useContext(Authcontext);
    const [cart] = useCart();
    const link=<>
    <li><NavLink to={"/"}>Home</NavLink></li>
  
    <li><NavLink to={"/about"}>About</NavLink></li>
    <li><NavLink to={"/contact"}>Contact</NavLink></li>
    <li>
            <Link to="/mycart">
                
                    <FaShoppingCart className="mb-2 text-base"></FaShoppingCart>
                    <div className="badge mb-3 badge-secondary">+{cart.length}</div>
              
            </Link>
        </li>

  </>
    return (
        <div className="navbar sticky -top-2 z-20 bg-opacity-30 h-[19px] mt-1 bg-white static:text-white ">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           {link}
            </ul>
          </div>
          
          <img className='lg:w-28 md:w-28 w-20' src="https://i.ibb.co/F50zwqB/Phone-Shop-1200-x-600-px-1680-x-600-px-2300-x-900-px-2.png" alt="" />

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {link}
          </ul>
        </div>
        <div className="lg:flex md:flex gap-3 navbar-end">
        {user?.email ? (
            <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="cursor-pointer">
                <div className="flex gap-2">
                  <div className="mt-2">
                    <p>{user?.displayName}</p>
                  </div>
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </div>
                </div>
              </label>
              <div
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <NavLink 
                  to="/mycart"
                  className="px-4 py-2 flex gap-2 hover:bg-base-300 rounded-lg"
                >
                  <FaShoppingCart className=" mt-1"></FaShoppingCart> My Cart
                </NavLink>
               

                <div
                  onClick={logout}
                  className="cursor-pointer text-[#FF00D3] px-4 py-2 hover:bg-base-300 rounded-lg"
                >
                  Logout
                </div>
              </div>
            </div>
          ) : (
            <div>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-outline cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-green-600 hover:text-white"
                    : "btn btn-outline cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-[#FF00D3] hover:text-white"
                }
              >
                Login
              </NavLink>
            </div>
          )}
      
        </div>
      </div>
    );
};

export default Header;