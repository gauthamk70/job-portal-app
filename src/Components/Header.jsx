import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { logoutUser } from '../Redux/slice/userSlice';
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { searchJob } from '../Redux/slice/jobSlice';
import Swal from "sweetalert2";


const Header = ({insideHome,viewApplication}) => {

  const currentUser = useSelector((state) => state.userReducer.currentUser)

  const dispatch = useDispatch()
const navigate = useNavigate()

// handle logout
const handleLogout = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You will be logged out!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, logout"
  }).then((result) => {
    if (result.isConfirmed) {
      dispatch(logoutUser());
      navigate("/auth");

      Swal.fire({
        title: "Logged out!",
        text: "You have been logged out.",
        icon: "success"
      });
    }
  });
};

  return (
    <header className="w-full bg-white border-b border-slate-200 py-3 px-6 sticky top-0 ">
      <div className=" w-full flex items-center justify-between gap-8">
        
        {/* --- Logo & Name --- */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <Link to={'/home'}>
            <span className="text-2xl font-black tracking-tight text-slate-800 hidden lg:block">
              CARRERA
            </span>
          </Link>
        </div>

        {/* --- Search Bar --- */}
        {insideHome&& <div className="flex-1 max-w-xl relative group">
          <div className="absolute inset-y-0 left-4 flex items-center">
            <svg className="w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input 
            type="text" 
            onChange={e=>dispatch(searchJob(e.target.value.toLowerCase()))}
            placeholder="Search jobs, companies..." 
            className="w-full bg-slate-100 border-none rounded-2xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all outline-none"
          />
        </div>}

        {/* --- Navigation Items --- */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
      <Link to={'/about'}>
              <span className="cursor-pointer hover:text-blue-600 transition-colors duration-200">
      About
    </span>
      </Link>
  <Link to={'/contacts'}>
    <span className="cursor-pointer hover:text-blue-600 transition-colors duration-200">
      Contacts
    </span>
  </Link>
          </nav>

          <div className="h-8 w-px bg-slate-200 hidden md:block"></div>

          { viewApplication&& <Link to={'/applied-jobs'}>
            <button className="bg-blue-50 text-blue-600 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-100 transition whitespace-nowrap">
              View Applications
            </button>
          </Link>}
           <button onClick={handleLogout} className="bg-blue-50 text-blue-600 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-100 transition whitespace-nowrap">
            Log out
          </button>

          {/* --- Profile --- */}
         <Link to={'/profile'}>
            <div className="flex items-center gap-3 pl-2 cursor-pointer">
              <div className="hidden text-right lg:block">
                <p className="text-sm font-bold text-slate-800 leading-none">{currentUser?.name}</p>
                <p className="text-xs text-slate-400 mt-1">Job Seeker</p>
              </div>
              <div className="w-11 h-11 bg-slate-200 rounded-full border-2 border-white shadow-sm overflow-hidden ring-1 ring-slate-100">
                 <img 
                  src="https://cdn-icons-png.freepik.com/512/303/303593.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                 />
              </div>
            </div>
         </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;