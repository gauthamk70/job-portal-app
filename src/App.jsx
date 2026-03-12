import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import AuthPage from './Pages/AuthPage'
import View from './Pages/View'
import AppliedJobs from './Pages/AppliedJobs'
import About from './Pages/Cosmetic/About'
import Contacts from './Pages/Cosmetic/Contacts'



function App() {
  return (
   
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/auth' element={<AuthPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/view/:id' element={<View/>}/>
      <Route path="/applied-jobs" element={<AppliedJobs/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
    </Routes>
  
  )
}

export default App