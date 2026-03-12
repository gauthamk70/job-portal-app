import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { updateUserProfile } from "../Redux/slice/userSlice";
import Swal from 'sweetalert2'



function AppliedJobs() {
  // const { appliedJobs } = useSelector(state => state.appliedReducer)

  // console.log(appliedJobs);
  const currentUser = useSelector(state => state.userReducer.currentUser)
  const appliedJobs = currentUser?.appliedJobs || []

  const dispatch = useDispatch();

  const handleDeleteAppliedJob = (jobId) => {
    const updatedAppliedJobs = currentUser.appliedJobs.filter(
      job => job.id !== jobId
    )

    dispatch(updateUserProfile({
      id: currentUser.id,
      updatedData: { appliedJobs: updatedAppliedJobs }
    }))

    Swal.fire({
      position: "top-end",
      title: "Job removed",
      showConfirmButton: false,
      timer: 1500
    })
  }



  return (
    <>
      <Header />

      <div className="min-h-[50vh] w-[90%] mx-auto">
        {appliedJobs.length > 0 ? appliedJobs.map((job => (

          <div key={job.id} className="group bg-gray-200 hover:bg-white hover:border rounded-xl shadow p-5 mt-6 hover:shadow-md transition" >

            <div className="flex gap-4">

              <img
                className="w-14 h-14 rounded-lg object-cover"
                src={job.companyLogo}
                alt=""
              />

              <div className="flex-1">

                <div className="flex justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{job.jobTitle}</h3>
    
                    <p className="text-sm text-gray-600">
                      {job.company} • {job.experienceRequired}
                    </p>
    
                    <p className="text-sm text-gray-500 mt-1">
                      {job.salary}
                    </p>
    
                    <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                      {job.jobDescription}
                    </p>
    
                    <div className="flex flex-wrap gap-2 mt-3">
    
                      {job.skillsRequired.map(skill => (
    
                        <span
                          key={skill}
                          className="text-xs bg-gray-100 px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
    
                      ))}
    
                    </div>
                  </div>
  
                  <div className="flex flex-col justify-between items-center mt-4">
  
                    
                    <div className="flex justify-between gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Link to={`/view/${job.id}`}>
    
                        <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded-lg hover:bg-blue-700">
                          View Job
                        </button>
                      </Link>
                      <button
                        onClick={() => dispatch(handleDeleteAppliedJob(job.id))}
                        className="bg-red-600 text-white px-4 py-2 text-sm rounded-lg hover:bg-red-700"
                      >
                        Remove
                      </button>
                    </div>
  
                  </div>
                </div>

              </div>

            </div>


          </div>))) : (

          <div className="flex flex-col items-center justify-center h-[60vh] text-center">

            <h2 className="text-2xl font-semibold text-gray-600">
              No Applied Jobs Yet
            </h2>

            <p className="text-gray-500 mt-2">
              Start applying to jobs and they will appear here.
            </p>

            <Link to={'/home'}>
              <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                Browse Jobs
              </button>
            </Link>

          </div>

        )}

      </div>

      <Footer />
    </>
  );
}

export default AppliedJobs;