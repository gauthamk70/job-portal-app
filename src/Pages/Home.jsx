import React, { useEffect } from 'react'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJobs } from '../Redux/slice/jobSlice'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



function Home() {
  const currentUser = useSelector((state) => state.userReducer.currentUser)

  const { allJobs } = useSelector(state => state.jobReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!currentUser) {
      navigate("/auth")
    }
  }, [currentUser, navigate])

  useEffect(() => {
    dispatch(fetchJobs())
  }, [])

  function timeAgo(dateString) {
    const now = new Date();
    const posted = new Date(dateString);
    const diff = now - posted;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    return "Just now";
  }



  return (
    <>
      <Header insideHome viewApplication />

      <div className="bg-gray-100 min-h-screen p-6">

        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">

          {/* LEFT PROFILE CARD */}
          <div className="col-span-3 hidden lg:block">

            <div className="bg-white rounded-xl shadow p-5">

              <div className="flex flex-col items-center">
                <img
                  className="w-20 h-20 rounded-full"
                  src="https://cdn-icons-png.flaticon.com/512/9187/9187532.png"
                  alt=""
                />

                <h3 className="font-bold mt-3 text-lg">{currentUser?.name}</h3>
                <p className="text-sm text-gray-500">{currentUser?.email}</p>
              </div>

              <hr className="my-4" />

              <div className="space-y-2 text-sm">

                <div className="flex justify-between">
                  <span className="text-gray-500">Profile views</span>
                  <span className="font-bold text-blue-600">25</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Connections</span>
                  <span className="font-bold text-blue-600">120</span>
                </div>

              </div>

            </div>

          </div>


          {/* CENTER JOB FEED */}
          <div className="col-span-12 lg:col-span-6 space-y-5 max-h-screen overflow-y-auto">

            {allJobs.length > 0 && allJobs.map(job => (

              <div key={job.id} className="bg-white rounded-xl shadow p-5 hover:shadow-md transition">

                <div className="flex gap-4">

                  <img
                    className="w-14 h-14 rounded-lg object-cover"
                    src={job.companyLogo}
                    alt=""
                  />

                  <div className="flex-1">

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

                    <div className="flex justify-between items-center mt-4">

                      <span className="text-xs text-gray-400">
                        {timeAgo(job.postedAt)}
                      </span>
                      <Link to={`/view/${job.id}`}>

                        <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded-lg hover:bg-blue-700">
                          View Job
                        </button>
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* RIGHT SIDE PANEL */}
          {/* RIGHT SIDE PANEL - DECORATIVE WITH LINKS */}
          <div className="col-span-3 hidden lg:block space-y-5">

            {/* Motivational Quote Card */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow p-6 text-white">
              <svg className="w-10 h-10 mb-3 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <p className="text-lg font-medium italic">"The future depends on what you do today."</p>
              <p className="text-sm mt-3 opacity-80">- Mahatma Gandhi</p>
            </div>

            {/* Featured Companies Card with Links */}
            <div className="bg-white rounded-xl shadow p-5">
              <h3 className="font-bold text-lg mb-3">Featured Companies</h3>
              <div className="space-y-3">
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition cursor-pointer no-underline"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">G</div>
                  <span className="font-medium text-gray-700">Google</span>
                </a>
                <a
                  href="https://www.microsoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition cursor-pointer no-underline"
                >
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 font-bold">M</div>
                  <span className="font-medium text-gray-700">Microsoft</span>
                </a>
                <a
                  href="https://www.amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition cursor-pointer no-underline"
                >
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 font-bold">A</div>
                  <span className="font-medium text-gray-700">Amazon</span>
                </a>
                <a
                  href="https://www.tesla.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition cursor-pointer no-underline"
                >
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold">T</div>
                  <span className="font-medium text-gray-700">Tesla</span>
                </a>
              </div>
            </div>

            {/* Success Stories Card */}
            <div className="bg-white rounded-xl shadow p-5">
              <h3 className="font-bold text-lg mb-3">Success Stories</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Sarah"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">Sarah Chen</p>
                    <p className="text-xs text-gray-500">Got hired as UI Designer</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/46.jpg"
                    alt="Mike"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">Mike Rodriguez</p>
                    <p className="text-xs text-gray-500">Placed at Google</p>
                  </div>
                </div>
              </div>
            </div>



          </div>

        </div>
        <Footer />

      </div>

    </>
  )

}

export default Home