import {configureStore} from "@reduxjs/toolkit"
import jobSlice from "./slice/jobSlice"
import userSlice from "./slice/userSlice"



const jobStore = configureStore({
    reducer:{
        jobReducer:jobSlice,
        userReducer:userSlice,
        
      

    }
})

export default jobStore
