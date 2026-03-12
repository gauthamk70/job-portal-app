import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserProfile } from '../../Redux/slice/userSlice'

function Education() {

  const currentUser = useSelector((state) => state.userReducer.currentUser)
  const dispatch = useDispatch()

  const [education, setEducation] = useState({
    university: "",
    institution: "",
    course: "",
    duration: ""
  })

  const [open, setOpen] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setEducation({
      ...education,
      [name]: value
    })
  }

  const handleAddEducation = async (e) => {
    e.preventDefault()

    const updatedData = {
      ...currentUser,
      profile: {
        ...currentUser.profile,
        education: [
          ...(currentUser.profile?.education || []),
          education
        ]
      }
    }

    await dispatch(
      updateUserProfile({
        id: currentUser.id,
        updatedData
      })
    )

    setEducation({
      university: "",
      institution: "",
      course: "",
      duration: ""
    })

    setOpen(false)
  }

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
              <h3 className="text-lg font-medium">Add Educational Details</h3>
              <button onClick={() => setOpen(false)}>X</button>
            </div>

            {/* Body */}
            <form onSubmit={handleAddEducation} className="mt-4 space-y-4">

              <input
                type="text"
                name="university"
                placeholder="University"
                className="w-full border p-2 rounded"
                value={education.university}
                onChange={handleChange}
              />

              <input
                type="text"
                name="institution"
                placeholder="Institution"
                className="w-full border p-2 rounded"
                value={education.institution}
                onChange={handleChange}
              />

              <input
                type="text"
                name="course"
                placeholder="Course"
                className="w-full border p-2 rounded"
                value={education.course}
                onChange={handleChange}
              />

              <input
                type="text"
                name="duration"
                placeholder="Duration"
                className="w-full border p-2 rounded"
                value={education.duration}
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

export default Education