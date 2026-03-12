import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const server_URL = "https://job-server-uuur.onrender.com"
const BASE_URL = `${server_URL}/users`



// REGISTER USER
export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (userData, { rejectWithValue }) => {

    // Check if email already exists
    const check = await axios.get(`${BASE_URL}?email=${userData.email}`)

    if (check.data.length > 0) {
      return rejectWithValue("Email already exists")
    }

    // If email not found → create user
    const result = await axios.post(BASE_URL, userData)

    return result.data
  }
)


// LOGIN USER
export const loginUser = createAsyncThunk(
  "users/loginUser",
  async ({ email, password },{rejectWithValue}) => {
    const result = await axios.get(
      `${BASE_URL}?email=${email}&password=${password}`
    )

      if (result.data.length === 0) {
      return rejectWithValue("Invalid email or password")
    }
    
    
    return result.data[0]
  }
)


// UPDATE PROFILE
export const updateUserProfile = createAsyncThunk(
  "users/updateUserProfile",
  async ({ id, updatedData }) => {
    const result = await axios.patch(
      `${BASE_URL}/${id}`,
      updatedData
    )
    return result.data
  }
)

const savedUser = JSON.parse(localStorage.getItem("user"))
const userSlice = createSlice({
  name: "users",

  initialState: {
    currentUser:savedUser|| null,
    loading: false,
    error: null
  },

  reducers: {
    logoutUser: (state) => {
      state.currentUser = null
       localStorage.removeItem("user")
    }
  },

  extraReducers: (builder) => {

    builder

      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
      })

      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false
        // state.currentUser = action.payload


  // localStorage.setItem("user", JSON.stringify(action.payload))
      })

      

      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })


      .addCase(loginUser.pending, (state) => {
        state.loading = true
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.currentUser = action.payload

        localStorage.setItem("user", JSON.stringify(action.payload))
      })

      .addCase(loginUser.rejected, (state,action) => {
        state.loading = false
        state.error = action.payload
      })


      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.currentUser = action.payload
          localStorage.setItem("user", JSON.stringify(action.payload))

      })

      

      .addCase(updateUserProfile.pending, (state, action) => {
        state.currentUser = []
      })

      

      .addCase(updateUserProfile.rejected, (state, action) => {
        state.currentUser = []
      })

  }
})

export const { logoutUser } = userSlice.actions


export default userSlice.reducer