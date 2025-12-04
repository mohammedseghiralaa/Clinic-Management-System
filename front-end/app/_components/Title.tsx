import React from "react";

export default function Title() {
  return (
    <div className="flex flex-col">
      <h1 className="text-white text-lg sm:text-xl font-bold tracking-tight leading-tight group-hover:text-cyan-50 transition-colors duration-300">
        Clinic Smile
      </h1>
      <p className="text-cyan-100 text-base sm:text-xs font-medium -mt-0.5">
        Care & Wellness
      </p>
    </div>
  );
}
