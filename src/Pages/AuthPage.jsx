import React, { useState } from "react";
import "./auth.css";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser } from "../Redux/slice/userSlice";
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function AuthPage() {
  const navigate = useNavigate()
  const currentUser = useSelector((state) => state.userReducer.currentUser)


  //  to go to main page afyer sucessfull login
  useEffect(() => {
    if (currentUser) {
      navigate("/home")
    }
  }, [currentUser])

  const error = useSelector((state) => state.userReducer.error)

  const dispatch = useDispatch()

  const [isRegister, setIsRegister] = useState(false)

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleRegister = async() => {
    //  console.log("Register clicked", registerData)
    const result = await dispatch(registerUser({
      ...registerData,
       appliedJobs: [], 
      profile: {
        gender: "",
        location: "",
        about:"",
        education: [],
        workExperience: [],
        skills:[]
        
      }
    }))
     if (result.meta.requestStatus === "fulfilled") {
    setIsRegister(false)
  }
    
  }

  const handleLogin = () => {
    dispatch(loginUser(loginData))
  }

  return (
    <div className="authPage">
      <div className={`container ${isRegister ? "active" : ""}`}>
  
        <div className="form-container">
  
          {!isRegister ? (
            <div className="form login">
              <h2>Login</h2>
  
              <input
                type="email"
                placeholder="Email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              />
  
              <input
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
  
              <button className="button-primary" onClick={handleLogin}>Login</button>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
  
          ) : (
  
            <div className="form register">
              <h2>Register</h2>
  
              <input
                type="text"
                placeholder="Name"
                value={registerData.name}
                onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
              />
  
              <input
                type="email"
                placeholder="Email"
                value={registerData.email}
                onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
              />
  
              <input
                type="password"
                placeholder="Password"
                value={registerData.password}
                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
              />
  
              <button className="button-primary" onClick={handleRegister}>Register</button>
  
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          )}
  
        </div>
  
        <div className="panel">
          {!isRegister ? (
            <>
              <h2>New Here?</h2>
              <button className="button-primary" onClick={() => setIsRegister(true)}>Register</button>
            </>
          ) : (
            <>
              <h2>Already have account?</h2>
              <button className="button-primary" onClick={() => setIsRegister(false)}>Login</button>
            </>
          )}
        </div>
  
      </div>
    </div>
  )
}

export default AuthPage