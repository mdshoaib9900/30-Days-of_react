import React  from "react";

function Card({ Name, Title, Details}) {
  return (
    // Main card container with improved styling and hover effects
    <div className="max-w-sm rounded-lg border border-slate-700 bg-slate-900 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/40">
      
      {/* Image Section */}
      <a href="#">
        <img
          className="rounded-t-lg object-cover w-full h-64"
          src="https://images.pexels.com/photos/33253231/pexels-photo-33253231.jpeg"
          alt={`Image for ${Title}`}
        />
      </a>

      {/* Content Section */}
      <div className="p-6">
        <div className="mb-3">
          <span className="block text-xs font-mono font-medium uppercase tracking-widest text-indigo-400">
            {Name}
          </span>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-white">
            {Title}
          </h2>
        </div>
        <p className="font-normal text-slate-400">
          {Details}
        </p>
      </div>
    </div>
  );
}

export default Card;