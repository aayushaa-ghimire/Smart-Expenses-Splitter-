import React from 'react';
import { Link } from 'react-router-dom';
import { Ghost, ArrowLeft } from 'lucide-react';
import Navbar from '../components/layout/Navbar';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fdf8f6] text-[#3a1d28] font-sans flex flex-col justify-between">
      <Navbar />

      <div className="max-w-md mx-auto px-4 py-20 text-center space-y-6 my-auto">
        <div className="w-20 h-20 mx-auto rounded-full bg-[#fce4ec] text-[#8b263e] flex items-center justify-center">
          <Ghost className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-normal text-[#8b263e]">Page not found</h1>
          <p className="text-xs text-[#3a1d28]/60 font-normal">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>

        <div>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-[#8b263e] hover:bg-[#721e32] text-white px-6 py-2.5 rounded-full text-xs font-normal transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to dashboard
          </Link>
        </div>
      </div>

      <div />
    </div>
  );
}