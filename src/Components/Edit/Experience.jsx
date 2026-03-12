
import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../../Redux/slice/userSlice';

function Experience() {

  const currentUser = useSelector((state) => state.userReducer.currentUser)
  const dispatch = useDispatch()
  const [workExperience, setWorkExperience] = useState({
    jobRole: "",
    companyName: "",
    duration: "",
    jobDescription: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setWorkExperience({
      ...workExperience,
      [name]: value
    })
  }
  const handleAddExperience = async (e) => {
    e.preventDefault()

    const updatedData = {
      ...currentUser,
      profile: {
        ...currentUser.profile,
        workExperience: [
          ...(currentUser.profile?.workExperience || []),
          workExperience
        ]
      }
    }

    await dispatch(
      updateUserProfile({
        id: currentUser.id,
        updatedData
      })
    )

    setWorkExperience({
      jobRole: "",
      companyName: "",
      duration: "",
      jobDescription: ""
    })

    setOpen(false)
  }

  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(true)}
        className="text-white bg-blue-600 px-1 py-1 rounded"
      >
        Add
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full bg-black/50">
          <div className="bg-white p-6 rounded w-[500px]">

            {/* Header */}
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-lg font-medium">Add Work Experience</h3>
              <button onClick={() => setOpen(false)}>X</button>
            </div>

            {/* Body */}
            <form onSubmit={handleAddExperience} className="mt-4 space-y-4">

              <input
                type="text"
                name="jobRole"
                placeholder="Role"
                className="w-full border p-2 rounded"
                value={workExperience.jobRole}
                onChange={handleChange}
              />

              <input
                type="text"
                name="companyName"
                placeholder="Company"
                className="w-full border p-2 rounded"
                value={workExperience.companyName}
                onChange={handleChange}
              />

              <input
                type="text"
                name="duration"
                placeholder="Duration"
                className="w-full border p-2 rounded"
                value={workExperience.duration}
                onChange={handleChange}
              />

              <textarea
                name="jobDescription"
                placeholder="Description"
                className="w-full border p-2 rounded"
                value={workExperience.jobDescription}
                onChange={handleChange}
              />







              <div className="flex justify-between pt-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Update
                </button>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="border px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  )
}

export default Experience
