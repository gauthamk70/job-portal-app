import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserProfile } from '../../Redux/slice/userSlice'

function Skills() {

  const currentUser = useSelector((state) => state.userReducer.currentUser)
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const [skill, setSkill] = useState("")

  const handleAddSkill = async (e) => {
    e.preventDefault()

    if (!skill.trim()) return

    const updatedData = {
      ...currentUser,
      profile: {
        ...currentUser.profile,
        skills: [
          ...(currentUser.profile?.skills || []),
          skill
        ]
      }
    }

    await dispatch(
      updateUserProfile({
        id: currentUser.id,
        updatedData
      })
    )

    setSkill("")
    setOpen(false)
  }

  return (
    <div>

      <button
        onClick={() => setOpen(true)}
        className="text-white bg-blue-600 px-2 py-1 rounded"
      >
        Add
      </button>

      {open && (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full bg-black/50">

          <div className="bg-white p-6 rounded w-[500px]">

            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-lg font-medium">Add Skills</h3>
              <button onClick={() => setOpen(false)}>X</button>
            </div>

            <form onSubmit={handleAddSkill} className="mt-4 space-y-4">

              <input
                type="text"
                placeholder="Skill Name"
                className="w-full border p-2 rounded"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
              />

              <div className="flex justify-between pt-2">

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Add
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

export default Skills