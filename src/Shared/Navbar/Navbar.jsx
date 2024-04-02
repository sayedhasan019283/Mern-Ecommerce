import { NavLink } from "react-router-dom";
import { FaShop } from "react-icons/fa6";
import './Navbar.css'
import { useAuth } from "../../context/Auth";
import { toast } from 'react-toastify';
import {   useState } from "react";


export default function Navbar() {

  const [keyword, setKeyword] = useState('');


  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Successfully logout");
  };



  return (
    <div className="navbar bg-base-200">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
          auth?.user?.role === 0 ? (
            <li className="mr-4 link link-hover"><NavLink to="/dashboard/user/order" className="text-base-content">CATEGORY</NavLink></li>
          ) : (
            <li className="mr-4 link link-hover"><NavLink to="/dashboard/admin/order" className="text-base-content">CATEGORY</NavLink></li>
          )
        }
            {
              !auth?.user ? (
                <>
                <li className=" mr-4 link link-hover"><NavLink to="/register" className="text-base-content bg-base-200">REGISTER</NavLink></li>
            <li className="mr-4 link link-hover"><NavLink to="/login" className="text-base-content">LOGIN</NavLink></li>
                </>
              ) : (
                <li onClick={handleLogout} className="mr-4 link link-hover"><NavLink to="/login" className="text-base-content">Logout</NavLink></li>
                
              )
            }
      </ul>
    </div>
    <NavLink to="/home" className="btn btn-ghost text-xl"> <FaShop /> E-commerce</NavLink>
  </div>
  <div >
      <div className="form-control">
      <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered w-28 md:w-auto"
                    value={keyword}
                    onChange={handleInputChange}
                />
             <NavLink to={`/search/${keyword}`}>Search</NavLink>
      </div>


  </div>
  <div className="navbar-center hidden lg:flex ml-16">
      <ul className="menu menu-horizontal px-1">
      {
          auth?.user?.role === 0 ? (
            <li className="mr-4 link link-hover"><NavLink to="/dashboard/user/order" className="text-base-content">CATEGORY</NavLink></li>
          ) : (
            <li className="mr-4 link link-hover"><NavLink to="/dashboard/admin/order" className="text-base-content">CATEGORY</NavLink></li>
          )
        }
            {
              !auth?.user ? (
                <>
                <li className=" mr-4 link link-hover"><NavLink to="/register" className="text-base-content bg-base-200">REGISTER</NavLink></li>
            <li className="mr-4 link link-hover"><NavLink to="/login" className="text-base-content">LOGIN</NavLink></li>
                </>
              ) : (
                <li onClick={handleLogout} className="mr-4 link link-hover"><NavLink to="/login" className="text-base-content">Logout</NavLink></li>
                
              )
            }
    </ul> 
  </div>
  <div className="navbar-end">
  <div className="mr-4 ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Name
                <span className="badge">{auth?.user?.name}</span>
              </a>
            </li>
            {
          auth?.user?.role === 0 ? (
            <li><NavLink to="/dashboard/user/order">Dashboard</NavLink></li>
          ) : (
            <li><NavLink to="/dashboard/admin/order">Dashboard</NavLink></li>
          )
}
            {
              !auth?.user ? (
                <>
                <li className=" mr-4 link link-hover"><NavLink to="/register" className="text-base-content bg-base-200">REGISTER</NavLink></li>
            <li className="mr-4 link link-hover"><NavLink to="/login" className="text-base-content">LOGIN</NavLink></li>
                </>
              ) : (
                <li onClick={handleLogout} className="mr-4 link link-hover"><NavLink to="/login" className="text-base-content">Logout</NavLink></li>
                
              )
            }  
          </ul>
        </div>
  </div>


</div>
  )
}
