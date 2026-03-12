import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser } from "../Redux/slice/userSlice";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser, error, loading } = useSelector((state) => state.userReducer);

  const [isRegister, setIsRegister] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    if (currentUser) navigate("/home");
  }, [currentUser, navigate]);

  const handleRegister = async () => {
    const result = await dispatch(registerUser({
      ...registerData,
      appliedJobs: [],
      profile: { gender: "", location: "", about: "", education: [], workExperience: [], skills: [] }
    }));
    if (result.meta.requestStatus === "fulfilled") setIsRegister(false);
  };

  const handleLogin = () => dispatch(loginUser(loginData));

  // Shared classes for inputs and buttons to keep code clean
  const inputClass = "w-full p-4 bg-slate-100 border-none rounded-2xl text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all";
  const btnClass = "px-10 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-indigo-200 hover:-translate-y-1 hover:shadow-xl transition-all active:scale-95 disabled:opacity-50";
  const panelBtnClass = "px-10 py-4 bg-white/20 backdrop-blur-md border-2 border-white text-white font-bold rounded-2xl hover:bg-white/30 transition-all";

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-100 font-sans p-4">
      {/* Container */}
      <div className="relative w-full max-w-[900px] h-[600px] bg-white rounded-[50px] shadow-[0_40px_100px_rgba(0,0,0,0.1)] flex overflow-hidden">
        
        {/* FORM SIDE */}
        <div className={`absolute top-0 w-1/2 h-full flex items-center justify-center z-10 transition-all duration-700 ease-[cubic-bezier(0.7,0,0.2,1)] ${isRegister ? "left-1/2" : "left-0"}`}>
          <div className="w-3/4 flex flex-col gap-4 text-center animate-in fade-in zoom-in duration-500">
            <h2 className="text-3xl font-black text-slate-800">{isRegister ? "Register" : "Login"}</h2>
            
            {isRegister && (
              <input
                className={inputClass}
                type="text"
                placeholder="Name"
                value={registerData.name}
                onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
              />
            )}
            
            <input
              className={inputClass}
              type="email"
              placeholder="Email"
              value={isRegister ? registerData.email : loginData.email}
              onChange={(e) => isRegister 
                ? setRegisterData({ ...registerData, email: e.target.value }) 
                : setLoginData({ ...loginData, email: e.target.value })}
            />

            <input
              className={inputClass}
              type="password"
              placeholder="Password"
              value={isRegister ? registerData.password : loginData.password}
              onChange={(e) => isRegister 
                ? setRegisterData({ ...registerData, password: e.target.value }) 
                : setLoginData({ ...loginData, password: e.target.value })}
            />

            <button 
              disabled={loading}
              className={btnClass} 
              onClick={isRegister ? handleRegister : handleLogin}
            >
              {loading ? "Processing..." : isRegister ? "Create Account" : "Sign In"}
            </button>

            {error && <p className="text-red-500 text-sm font-medium mt-2">{error}</p>}
          </div>
        </div>

        {/* SLIDING PANEL SIDE */}
        <div 
          className={`absolute top-0 w-1/2 h-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex flex-col items-center justify-center z-20 transition-all duration-700 ease-[cubic-bezier(0.7,0,0.2,1)]
            ${isRegister 
              ? "left-0 [clip-path:polygon(0%_0%,85%_0%,100%_50%,85%_100%,0%_100%)]" 
              : "left-1/2 [clip-path:polygon(15%_0%,100%_0%,100%_100%,15%_100%,0%_50%)]"
            }`}
        >
          <div className="text-center p-8 space-y-6">
            <h2 className="text-3xl font-bold">{isRegister ? "Already Have an Account?" : "New Here?"}</h2>
            <p className="text-indigo-100 opacity-80">
              {isRegister ? "Login to keep track of your job applications." : "Register and start your professional journey with Carrera."}
            </p>
            <button 
              className={panelBtnClass} 
              onClick={() => setIsRegister(!isRegister)}
            >
              {isRegister ? "Login" : "Register"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AuthPage;