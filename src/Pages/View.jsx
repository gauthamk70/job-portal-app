import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
// import { addToAppliedJobs } from "../Redux/slice/appliedSlice";
import { updateUserProfile } from "../Redux/slice/userSlice";
import Swal from 'sweetalert2'



function View() {


  const currentUser = useSelector(state => state.userReducer.currentUser)

  const dispatch = useDispatch()


  const { id } = useParams()
  const [job, setJob] = useState({})
  // const { appliedJobs } = useSelector(state => state.appliedReducer)


  useEffect(() => {
    const allJobs = JSON.parse(localStorage.getItem("allJobs"))
    setJob(allJobs.find(item => item.id == id))
  }, [])



  // const handleApplyJob = (job) => {
  //   const existingJob = appliedJobs.find(item => item.id == job.id)
  //   if (existingJob) {
  //    Swal.fire({
  //       position: "top-end",

  //       title: "Job already applied",
  //       showConfirmButton: false,
  //       timer: 1500
  //     });
  //   }
  //   else {
  //     dispatch(addToAppliedJobs(job))
  //     Swal.fire({
  //       position: "top-end",

  //       title: "Applied successfully",
  //       showConfirmButton: false,
  //       timer: 1500
  //     });
  //   }
  // }

  const handleApplyJob = (job) => {

  const existingJob = currentUser?.appliedJobs?.find(item => item.id == job.id)

  if (existingJob) {
    Swal.fire({
      position: "top-end",
      title: "Job already applied",
      showConfirmButton: false,
      timer: 1500
    })
  } 
  else {

    const updatedAppliedJobs = [
      ...(currentUser.appliedJobs || []),
      job
    ]

    dispatch(updateUserProfile({
      id: currentUser.id,
      updatedData: { appliedJobs: updatedAppliedJobs }
    }))

    Swal.fire({
      position: "top-end",
      title: "Applied successfully",
      showConfirmButton: false,
      timer: 1500
    })
  }
}

const alreadyApplied = currentUser?.appliedJobs?.some(item => item.id == job.id)

  return (
    <> <Header viewApplication />


      <div className="bg-gray-100 min-h-screen p-6">

        <div className="max-w-4xl mx-auto">

          <div className="bg-white rounded-xl shadow p-6">

            {/* Job Header */}
            <div className="flex gap-4 items-center">

              <img
                src={job.companyLogo}
                alt=""
                className="w-16 h-16 rounded-lg object-cover"
              />

              <div>
                <h1 className="text-2xl font-bold">{job.jobTitle}</h1>
                <p className="text-gray-600">
                  {job.company} • {job.experienceRequired}
                </p>
                <p className="text-gray-500 text-sm">{job.salary}</p>
              </div>

            </div>

            <hr className="my-5" />

            {/* Description */}
            <div>

              <h2 className="font-bold text-lg mb-2">
                Job Description
              </h2>

              <p className="text-gray-600 leading-relaxed">
                {job.jobDescriptionLong}
              </p>

            </div>

            {/* Skills */}
            <div className="mt-6">

              <h2 className="font-bold text-lg mb-3">
                Required Skills
              </h2>

              <div className="flex flex-wrap gap-2">




                {job.skillsRequired?.map((e, index) => (
                  <span key={index} className="bg-gray-100 text-sm px-3 py-1 rounded">
                    {e}
                  </span>
                ))}



              </div>

            </div>

            {/* Apply Button */}
            <div className="mt-8">

              <button  disabled={alreadyApplied} onClick={() => handleApplyJob(job)} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
               {alreadyApplied ? "Already Applied" : "Apply Now"}
              </button>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>


  );
}

export default View;
