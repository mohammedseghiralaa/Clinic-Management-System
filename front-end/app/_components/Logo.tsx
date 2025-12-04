import React, { JSX } from "react";
import { Stethoscope, Smile } from "lucide-react";

export default function Logo(): JSX.Element {
  return (
    <div className="relative">
      {/* Main Icon Background */}
      <div className="w-12 h-12 bg-linear-to-br from-white to-cyan-50 rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden">
        {/* Stethoscope Icon */}
        <Stethoscope
          size={20}
          className="text-cyan-600 transform transition-all duration-300 relative z-10"
        />
        {/* Smile Icon Overlay */}
        <Smile
          size={28}
          className="absolute text-cyan-400 opacity-20 transform transition-all duration-300 group-hover:opacity-40 group-hover:scale-110"
        />
      </div>

      {/* Decorative Ring */}
      <div className="absolute inset-0 rounded-2xl border-2 border-white/30 transform scale-110 group-hover:scale-125 transition-transform duration-300"></div>
    </div>
  );
}
