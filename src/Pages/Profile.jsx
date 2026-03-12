import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Info from "../Components/Edit/Info";
import Education from "../Components/Edit/Education";
import Experience from "../Components/Edit/Experience";
import Skills from "../Components/Edit/Skills";
import AboutMe from "../Components/Edit/AboutMe";
import { useDispatch } from "react-redux";
import { updateUserProfile } from "../Redux/slice/userSlice";

const ProfilePage = () => {

  const currentUser = useSelector((state) => state.userReducer.currentUser)
  const dispatch = useDispatch()
  // handle delete exp
  const handleDeleteExp = async (index) => {

    const updatedExp = currentUser.profile.workExperience.filter(
      (_, i) => i !== index
    )

    const updatedData = {
      ...currentUser,
      profile: {
        ...currentUser.profile,
        workExperience: updatedExp
      }
    }

    await dispatch(
      updateUserProfile({
        id: currentUser.id,
        updatedData
      })
    )
  }
  // handle delete education
  const handleDeleteEdu = async (index) => {

    const updatedEdu = currentUser.profile.education.filter(
      (_, i) => i !== index
    )

    const updatedData = {
      ...currentUser,
      profile: {
        ...currentUser.profile,
        education: updatedEdu
      }
    }

    await dispatch(
      updateUserProfile({
        id: currentUser.id,
        updatedData
      })
    )
  }
  // handle delete skill
  const handleDeleteSkill = async (index) => {

    const updatedSkills = currentUser.profile.skills.filter(
      (_, i) => i !== index
    )

    const updatedData = {
      ...currentUser,
      profile: {
        ...currentUser.profile,
        skills: updatedSkills
      }
    }

    await dispatch(
      updateUserProfile({
        id: currentUser.id,
        updatedData
      })
    )
  }

  return (<div className="min-h-screen bg-slate-100 font-sans text-slate-900">

    {/* NAVBAR */}
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto bg-white rounded-b-xl shadow-sm">
      <Link to={'/home'}>
        <div className="text-2xl font-bold text-blue-600 tracking-tight">
          Carrera
        </div>
      </Link>

      <div className="hidden md:flex space-x-8 font-medium text-slate-600">
        <a href="#about" className="hover:text-blue-600 transition">About</a>
        <a href="#experience" className="hover:text-blue-600 transition">Experience</a>
        <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
      </div>

      <Link to="/home">
        <button className="bg-slate-100 px-6 py-2 rounded-full font-semibold hover:bg-slate-200 transition">
          Dashboard
        </button>
      </Link>
    </nav>


    <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">

      {/* PROFILE HEADER */}
      <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">

          <img
            className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
            src="https://cdn-icons-png.flaticon.com/512/9187/9187532.png"
            alt="Profile"
          />

          <div className="text-center sm:text-left">

            <h1 className="text-3xl font-extrabold text-slate-900">
              {currentUser?.name}
            </h1>

            <p className="text-lg text-slate-700 mt-1">
              {currentUser?.email}
            </p>

            <p className="text-md text-slate-500 mt-2">
              {currentUser?.profile?.location || "Add location"}
            </p>

          </div>

        </div>
      </section>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT MAIN CONTENT */}
        <div className="md:col-span-2 space-y-6">

          {/* ABOUT */}
          <section id="about" className="bg-white rounded-xl shadow-lg p-6 sm:p-8">

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-slate-900">
                About
              </h2>
              <AboutMe />
            </div>

            <p className="text-slate-700 leading-relaxed">
              {currentUser?.profile?.about || "Add About me"}
            </p>

          </section>


          {/* EXPERIENCE */}
          <section id="experience" className="bg-white rounded-xl shadow-lg p-6 sm:p-8">

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-slate-900">
                Experience
              </h2>
              <Experience />
            </div>

            <div className="space-y-6">

              {currentUser?.profile?.workExperience?.length > 0 ? (

                currentUser.profile.workExperience.map((exp, index) => (

                  <div key={index} className="border-b pb-4 relative group">
                    {/* Added 'relative' and 'group' to the container */}

                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg text-slate-900">{exp.jobRole}</h3>
                        <p className="text-slate-700">{exp.companyName}</p>
                      </div>

                      <button
                        onClick={() => handleDeleteExp(index)}
                        className="text-red-500 text-sm hover:underline opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        Delete
                      </button>
                    </div>

                    <p className="text-slate-500 text-sm">{exp.duration}</p>
                    <p className="text-slate-600 text-sm mt-1">{exp.jobDescription}</p>
                  </div>

                ))

              ) : (

                <p className="text-slate-500">Add work experience</p>

              )}

            </div>

          </section>


          {/* EDUCATION */}
          <section id="education" className="bg-white rounded-xl shadow-lg p-6 sm:p-8">

            <div className="flex justify-between items-center mb-4">

              <h2 className="text-2xl font-bold text-slate-900">
                Education
              </h2>

              <Education />

            </div>

            <div className="space-y-4">

              {currentUser?.profile?.education?.length > 0 ? (

                currentUser.profile.education.map((edu, index) => (

                  <div key={index} className="border-b pb-4 relative group">

                    <div className="flex justify-between items-start">

                      <div>
                        <h3 className="font-bold text-lg text-slate-900">
                          {edu.course}
                        </h3>

                        <p className="text-slate-700">
                          {edu.institution}
                        </p>

                        <p className="text-slate-500 text-sm">
                          {edu.university}
                        </p>

                        <p className="text-slate-500 text-sm">
                          {edu.duration}
                        </p>
                      </div>

                      <button
                        onClick={() => handleDeleteEdu(index)}
                        className="text-red-500 text-sm hover:underline opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                ))

              ) : (

                <p className="text-slate-500">Add education details</p>

              )}

            </div>

          </section>

        </div>


        {/* RIGHT SIDEBAR */}
        <div className="md:col-span-1 space-y-6">

          {/* PERSONAL INFO */}
          <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8">

            <div className="flex justify-between items-center mb-3">

              <h2 className="text-xl font-bold text-slate-900">
                Personal Info
              </h2>

              <Info />

            </div>

            <div className="space-y-2 text-slate-700">

              <p>
                <span className="font-medium">Name:</span> {currentUser?.name}
              </p>

              <p>
                <span className="font-medium">Email:</span> {currentUser?.email}
              </p>

              <p>
                <span className="font-medium">Location:</span>  {currentUser?.profile?.location || "Add location"}
              </p>

            </div>

          </section>


          {/* SKILLS */}
          <section id="skills" className="bg-white rounded-xl shadow-lg p-6 sm:p-8">

            <div className="flex justify-between items-center mb-4">

              <h2 className="text-xl font-bold text-slate-900">
                Skills
              </h2>

              {/* <button className="text-sm border px-3 py-1 rounded-lg hover:bg-gray-100">
              Add
            </button> */}
              <Skills />

            </div>

            <div className="flex flex-wrap gap-2">

              {currentUser?.profile?.skills?.length > 0 ? (

                currentUser.profile.skills.map((skill, index) => (

                  <div key={index} className="relative group">

                   <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full group">
  {skill}

  <button
    onClick={() => handleDeleteSkill(index)}
    className="bg-red-500 ms-2 px-1 rounded-lg text-white text-xs hidden group-hover:inline-block"
  >
    X
  </button>
</span>

                    

                  </div>

                ))

              ) : (

                <p className="text-slate-500">Add skills</p>

              )}

            </div>

          </section>

        </div>

      </div>

    </div>
  </div>


  );
};

export default ProfilePage;
