import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* --- Navigation --- */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-blue-600 tracking-tight">Carrera</div>
        <div className="hidden md:flex space-x-8 font-medium text-slate-600">
          <a href="#features" className="hover:text-blue-600 transition">Features</a>
          <a href="#companies" className="hover:text-blue-600 transition">Companies</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
        </div>
        <Link to="/auth">
          <button className="bg-slate-100 px-6 py-2 rounded-full font-semibold hover:bg-slate-200 transition">
            Login
          </button>
        </Link>
      </nav>

      {/* --- Hero Section --- */}
      <header className="px-6 py-16 md:py-28 text-center max-w-4xl mx-auto">
        <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
          Now Live: 50,000+ Open Roles
        </span>
        <h1 className="mt-8 text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Find Your Next <span className="text-blue-600">Career Move</span>, Fast.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">
          Explore thousands of job opportunities from top companies worldwide. 
          Your dream job is just a click away.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/home">
            <button className="w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all">
              Start Applying
            </button>
          </Link>
          
        </div>
      </header>

      {/* --- Stats/Trust Bar --- */}
      <section className="bg-slate-50 py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-around items-center gap-8 opacity-60 grayscale">
          <span className="font-bold text-2xl italic">Microsoft</span>
          <span className="font-bold text-2xl italic">Amazon</span>
          <span className="font-bold text-2xl italic">Meta</span>
          <span className="font-bold text-2xl italic">Airbnb</span>
          <span className="font-bold text-2xl italic">Stripe</span>
        </div>
      </section>

      {/* --- Quick Features --- */}
      <section className="py-20 max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-12">
        <div className="p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition duration-300">
          <div className="text-blue-600 text-3xl mb-4">🎯</div>
          <h3 className="font-bold text-xl mb-2">AI Matching</h3>
          <p className="text-slate-500">We match your skills to the perfect company culture and role.</p>
        </div>
        <div className="p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition duration-300">
          <div className="text-blue-600 text-3xl mb-4">⚡</div>
          <h3 className="font-bold text-xl mb-2">Quick Apply</h3>
          <p className="text-slate-500">Apply to multiple positions with your saved profile in seconds.</p>
        </div>
        <div className="p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition duration-300">
          <div className="text-blue-600 text-3xl mb-4">💬</div>
          <h3 className="font-bold text-xl mb-2">Direct Chat</h3>
          <p className="text-slate-500">Skip the email thread and talk directly to hiring managers.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;