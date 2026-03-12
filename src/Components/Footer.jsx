import React from "react";

function Footer() {
  return (
    <footer className="mt-10 bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-gray-800">Carrera</h2>
            <p className="text-sm text-gray-500 mt-2">
              Discover jobs, connect with professionals, and build your career.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Quick Links</h3>

            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-blue-600 cursor-pointer">Home</li>
              <li className="hover:text-blue-600 cursor-pointer">Profile</li>
              <li className="hover:text-blue-600 cursor-pointer">Jobs</li>
              <li className="hover:text-blue-600 cursor-pointer">Connections</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Support</h3>

            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-blue-600 cursor-pointer">Help Center</li>
              <li className="hover:text-blue-600 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-blue-600 cursor-pointer">Terms</li>
              <li className="hover:text-blue-600 cursor-pointer">Contact</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t mt-6 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Carrera. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;