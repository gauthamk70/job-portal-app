import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

function Contacts() {
  return (
    <>
      <Header />

      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">Get in touch with our team</p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            
            {/* Location Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="text-lg font-bold mb-2">Our Location</h3>
              <p className="text-gray-600">3rd Floor, Paramekkavu, Pathayapura Building</p>
              <p className="text-gray-600">Round South, Thrissur, Kerala 680001</p>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="text-lg font-bold mb-2">Phone Number</h3>
              <p className="text-gray-600">+1 (800) 123-4567</p>
              <p className="text-gray-500 text-sm">Mon-Fri 9am-6pm</p>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
              <div className="text-4xl mb-3">📧</div>
              <h3 className="text-lg font-bold mb-2">Email Address</h3>
              <p className="text-gray-600">info@jobportal.com</p>
              <p className="text-gray-600">support@jobportal.com</p>
            </div>

          </div>

          {/* Map Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Us Here</h2>
            <div className="bg-gray-200 rounded-lg h-96 w-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📍</div>
                <p className="text-gray-600 text-lg mb-2">Google Maps Location</p>
                <p className="text-gray-500">3rd Floor, Paramekkavu, Pathayapura Building, Door No. 36, 2795, next to Ragam Theatre, Kuruppam, Round South, Thrissur, Kerala 680001</p>
                
                {/* Map placeholder - you can replace with actual map iframe */}
                <div className="mt-4 p-4 bg-white rounded-lg inline-block">
                  <a 
                    href="https://www.google.com/maps/place/Luminar+Technolab+-+Software+Training+Institute+in+Thrissur/@10.5224896,76.2084856,17z/data=!3m2!4b1!5s0x3ba7ee48a6b26601:0x10c94c7247061de0!4m6!3m5!1s0x3ba7ef5cee5d845b:0xa1e3583f9391e59b!8m2!3d10.5224896!4d76.2133565!16s%2Fg%2F11xw9z_5gk?entry=ttu&g_ep=EgoyMDI2MDMwOS4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          

        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contacts