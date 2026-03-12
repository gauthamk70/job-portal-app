import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from '../Redux/slice/userSlice';
import { searchJob } from '../Redux/slice/jobSlice';
import Swal from "sweetalert2";

const Header = ({ insideHome, viewApplication }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        Swal.fire({ title: "Logged out!", icon: "success" });
      }
    });
  };

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          
          {/* LOGO */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <Link to={'/home'}>
              <span className="text-xl font-black tracking-tight text-slate-800 hidden sm:block">
                CARRERA
              </span>
            </Link>
          </div>

          {/* SEARCH BAR */}
          {insideHome && (
            <div className="hidden md:flex flex-1 max-w-md relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input 
                type="text" 
                onChange={e => dispatch(searchJob(e.target.value.toLowerCase()))}
                placeholder="Search jobs..." 
                className="w-full bg-slate-100 rounded-2xl py-2.5 pl-11 pr-4 text-sm focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all outline-none"
              />
            </div>
          )}

          {/* RIGHT SIDE ITEMS */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600 mr-2">
              <Link to='/about' className="hover:text-blue-600 transition-colors">About</Link>
              <Link to='/contacts' className="hover:text-blue-600 transition-colors">Contacts</Link>
            </nav>

            {/* PC LOGOUT BUTTON - Visible on Desktop/Tablet */}
            <button 
              onClick={handleLogout} 
              className="hidden md:block bg-blue-50 text-blue-600 px-4 py-2 rounded-xl font-bold text-sm hover:bg-blue-100 transition whitespace-nowrap"
            >
              Log out
            </button>

            {viewApplication && (
              <Link to={'/applied-jobs'} className="hidden sm:block">
                <button className="text-blue-600 px-4 py-2 font-bold text-sm hover:bg-blue-50 rounded-xl transition">
                  Applications
                </button>
              </Link>
            )}

            <Link to={'/profile'} className="flex items-center gap-2 sm:gap-3 pl-2 border-l border-slate-200">
              <div className="hidden xl:block text-right">
                <p className="text-sm font-bold text-slate-800 leading-none">{currentUser?.name?.split(' ')[0]}</p>
                <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">Seeker</p>
              </div>
              <img 
                src="https://cdn-icons-png.freepik.com/512/303/303593.png" 
                alt="Profile" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 object-cover"
              />
            </Link>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE OVERLAY MENU */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4 border-t border-slate-100 pt-4 animate-in slide-in-from-top-2 duration-200">
            {/* Mobile items remain here for small screens */}
            <div className="grid grid-cols-2 gap-3">
              <Link to='/about' className="p-3 bg-slate-50 rounded-xl text-center font-semibold text-slate-600">About</Link>
              <Link to='/contacts' className="p-3 bg-slate-50 rounded-xl text-center font-semibold text-slate-600">Contacts</Link>
              {viewApplication && (
                <Link to='/applied-jobs' className="col-span-2 p-3 bg-blue-50 text-blue-600 rounded-xl text-center font-bold">
                  View My Applications
                </Link>
              )}
              <button 
                onClick={handleLogout}
                className="col-span-2 p-3 bg-red-50 text-red-600 rounded-xl text-center font-bold"
              >
                Log Out
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;