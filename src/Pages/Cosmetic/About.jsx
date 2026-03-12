import React from 'react'
import Header from '../../Components/Header'  // Changed from "../Components/Header"
import Footer from '../../Components/Footer'  // Changed from "../Components/Footer"
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <Header />

      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About JobPortal</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connecting talented professionals with their dream careers since 2020
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  To revolutionize the job search experience by creating a platform that 
                  seamlessly connects talented individuals with innovative companies. We 
                  believe in making career opportunities accessible to everyone, everywhere.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">✓</div>
                    <span className="text-gray-700">Empower job seekers with the right tools</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">✓</div>
                    <span className="text-gray-700">Help companies find the perfect candidates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">✓</div>
                    <span className="text-gray-700">Create meaningful career connections</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 md:p-12 text-white flex items-center">
                <div>
                  <p className="text-2xl font-bold mb-4">10,000+</p>
                  <p className="mb-4">Jobs Posted</p>
                  <p className="text-2xl font-bold mb-4">5,000+</p>
                  <p className="mb-4">Happy Employers</p>
                  <p className="text-2xl font-bold mb-4">15,000+</p>
                  <p>Successful Placements</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Value 1 */}
              <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-gray-600">
                  We maintain transparency and honesty in all our interactions
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Constantly improving our platform with cutting-edge technology
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Community</h3>
                <p className="text-gray-600">
                  Building a supportive ecosystem for professionals worldwide
                </p>
              </div>

            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Dedicated professionals working tirelessly to connect talent with opportunity
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              
              {/* Team Member 1 */}
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <img 
                  src="https://randomuser.me/api/portraits/men/37.jpg" 
                  alt="Sarah Johnson"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold text-lg">Amal</h3>
                <p className="text-sm text-blue-600 mb-2">CEO & Founder</p>
                <p className="text-xs text-gray-500">10+ years in HR tech</p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Michael Chen"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold text-lg">Gautham</h3>
                <p className="text-sm text-blue-600 mb-2">CTO</p>
                <p className="text-xs text-gray-500">Ex-Google, Tech lead</p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Emily Rodriguez"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold text-lg">Nihala</h3>
                <p className="text-sm text-blue-600 mb-2">Head of Operations</p>
                <p className="text-xs text-gray-500">MBA, Operations expert</p>
              </div>

              {/* Team Member 4 */}
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <img 
                  src="https://randomuser.me/api/portraits/men/46.jpg" 
                  alt="David Kim"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold text-lg">Mahin</h3>
                <p className="text-sm text-blue-600 mb-2">Lead Developer</p>
                <p className="text-xs text-gray-500">Full-stack expert</p>
              </div>

            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What People Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Testimonial 1 */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/33.jpg" 
                    alt="Lisa Thompson"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold">Lisa Thompson</h4>
                    <p className="text-xs text-gray-500">Software Engineer at Google</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Found my dream job within 2 weeks of joining JobPortal. The platform is intuitive and the job matches were perfect!"
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/75.jpg" 
                    alt="James Wilson"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold">James Wilson</h4>
                    <p className="text-xs text-gray-500">HR Manager at Microsoft</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "As an employer, we've found exceptional talent through JobPortal. The quality of candidates is outstanding."
                </p>
              </div>

            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of professionals who found their dream jobs</p>
            <div className="flex gap-4 justify-center">
              <Link 
                to="/home" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Find Jobs
              </Link>
              <Link 
                to="/auth" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
              >
                Sign Up Free
              </Link>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default About