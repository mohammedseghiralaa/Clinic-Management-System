"use client";
import { useState, useEffect } from "react";

export default function ClinicLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 10 + 5,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
    }));
    setParticles(newParticles);
  }, []);

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Login successful! Welcome to MediCare Clinic");
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-pink-500/20 to-orange-500/20 animate-[gradientShift_8s_ease-in-out_infinite]"></div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white/20 backdrop-blur-sm"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
          }}
        />
      ))}

      {/* Medical Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute text-7xl top-[10%] left-[10%] animate-[floatSpin_12s_ease-in-out_infinite]">
          💊
        </div>
        <div className="absolute text-6xl top-[20%] right-[15%] animate-[floatSpin_15s_ease-in-out_infinite] delay-1000">
          🩺
        </div>
        <div className="absolute text-8xl bottom-[15%] left-[15%] animate-[floatSpin_10s_ease-in-out_infinite] delay-500">
          ❤️
        </div>
        <div className="absolute text-7xl bottom-[20%] right-[20%] animate-[floatSpin_14s_ease-in-out_infinite] delay-2000">
          ⚕️
        </div>
        <div className="absolute text-6xl top-[50%] left-[5%] animate-[floatSpin_11s_ease-in-out_infinite] delay-1500">
          🏥
        </div>
        <div className="absolute text-7xl top-[60%] right-[10%] animate-[floatSpin_13s_ease-in-out_infinite] delay-800">
          💉
        </div>
        <div className="absolute text-6xl top-[35%] right-[40%] animate-[floatSpin_16s_ease-in-out_infinite] delay-300">
          🧬
        </div>
        <div className="absolute text-5xl bottom-[40%] left-[30%] animate-[floatSpin_9s_ease-in-out_infinite] delay-1200">
          💊
        </div>

        {/* Animated Rings */}
        <div className="absolute w-[500px] h-[500px] border-4 border-white/20 rounded-full top-[15%] right-[5%] animate-[ping_4s_ease-in-out_infinite]"></div>
        <div className="absolute w-[400px] h-[400px] border-4 border-cyan-300/20 rounded-full bottom-[5%] left-[10%] animate-[ping_5s_ease-in-out_infinite] delay-1000"></div>
        <div className="absolute w-[300px] h-[300px] border-4 border-teal-300/20 rounded-full top-[40%] left-[40%] animate-[ping_6s_ease-in-out_infinite] delay-2000"></div>
      </div>

      {/* Main Login Card */}
      <div className="relative z-10 w-full max-w-lg animate-[scaleUp_0.8s_ease-out]">
        {/* Glow Effect Behind Card */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 rounded-3xl blur-3xl opacity-60 animate-pulse"></div>

        <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border-2 border-white/50">
          {/* Animated Top Border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 animate-[slideRight_3s_ease-in-out_infinite]"></div>

          {/* Header Section with Gradient */}
          <div className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 p-8 relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute w-32 h-32 bg-white rounded-full -top-10 -left-10 animate-[pulse_3s_ease-in-out_infinite]"></div>
              <div className="absolute w-40 h-40 bg-white rounded-full -bottom-10 -right-10 animate-[pulse_4s_ease-in-out_infinite] delay-500"></div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent animate-[shimmer_4s_ease-in-out_infinite]"></div>

            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="relative animate-[bounceIn_1s_ease-out]">
                  {/* Multiple Glow Layers */}
                  <div className="absolute inset-0 bg-white rounded-2xl blur-xl opacity-60 animate-pulse"></div>
                  <div className="absolute inset-0 bg-cyan-300 rounded-2xl blur-2xl opacity-40 animate-[ping_2s_ease-in-out_infinite]"></div>

                  <div className="relative w-24 h-24 bg-white rounded-2xl flex items-center justify-center text-5xl shadow-2xl transform hover:scale-110 hover:rotate-12 transition-all duration-500 cursor-pointer">
                    <span className="animate-[wiggle_1s_ease-in-out_infinite]">
                      🏥
                    </span>
                  </div>

                  {/* Status Indicators */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white animate-[ping_2s_ease-in-out_infinite] shadow-lg"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white animate-pulse"></div>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-white text-center mb-2 animate-[slideDown_0.6s_ease-out] tracking-wide">
                MediCare Clinic
              </h1>
              <p className="text-cyan-100 text-center text-sm animate-[fadeIn_1s_ease-out_0.3s_both] font-medium">
                ✨ Your Health, Our Priority ✨
              </p>

              {/* Animated Wave Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-[slideRight_2s_ease-in-out_infinite]"></div>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-8 sm:p-10">
            <div className="text-center mb-8 animate-[fadeIn_0.8s_ease-out_0.2s_both]">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 mb-3">
                Welcome Back
              </h2>
              <p className="text-gray-600 text-sm font-medium">
                🔐 Sign in to access your medical portal
              </p>
            </div>

            <div className="space-y-6">
              {/* Email Input */}
              <div className="space-y-2 opacity-0 animate-[slideLeft_0.6s_ease-out_0.4s_forwards]">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-700 flex items-center gap-2"
                >
                  <span className="text-lg">📧</span>
                  Email Address
                </label>
                <div className="relative group">
                  {/* Animated Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 blur-lg transition-all duration-500 animate-[pulse_2s_ease-in-out_infinite]"></div>

                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="doctor@medicare.com"
                      className="w-full px-6 py-4 pr-14 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all outline-none font-medium placeholder:text-gray-400 hover:border-teal-300 hover:shadow-lg"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl group-hover:scale-125 group-focus-within:scale-125 transition-transform duration-300">
                      <span className="inline-block animate-[bounce_2s_ease-in-out_infinite]">
                        ✉️
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2 opacity-0 animate-[slideRight_0.6s_ease-out_0.5s_forwards]">
                <label
                  htmlFor="password"
                  className="block text-sm font-bold text-gray-700 flex items-center gap-2"
                >
                  <span className="text-lg">🔐</span>
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 blur-lg transition-all duration-500 animate-[pulse_2s_ease-in-out_infinite]"></div>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="••••••••••"
                      className="w-full px-6 py-4 pr-14 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all outline-none font-medium placeholder:text-gray-400 hover:border-teal-300 hover:shadow-lg"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl hover:scale-125 transition-all duration-300 hover:rotate-12"
                    >
                      {showPassword ? (
                        <span className="inline-block animate-[wiggle_0.5s_ease-in-out]">
                          👁️
                        </span>
                      ) : (
                        <span className="inline-block animate-[wiggle_0.5s_ease-in-out]">
                          🔒
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-sm opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-5 h-5 cursor-pointer accent-teal-500 transition-transform group-hover:scale-110"
                  />
                  <span className="text-gray-700 group-hover:text-teal-600 transition-colors font-medium">
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="text-teal-600 hover:text-teal-700 font-bold transition-all hover:underline hover:scale-105 inline-block"
                >
                  Forgot Password? 🔑
                </a>
              </div>

              {/* Login Button */}
              <div className="relative opacity-0 animate-[scaleUp_0.8s_ease-out_0.7s_forwards]">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 animate-[pulse_2s_ease-in-out_infinite]"></div>

                <button
                  onClick={handleLogin}
                  disabled={isLoading}
                  className="relative w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden group"
                >
                  {/* Shine Effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

                  <span className="relative flex items-center justify-center gap-3">
                    {isLoading ? (
                      <>
                        <span className="inline-block w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span className="animate-[pulse_1s_ease-in-out_infinite]">
                          Signing In...
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-xl animate-[bounce_1s_ease-in-out_infinite]">
                          🚀
                        </span>
                        <span>Sign In</span>
                        <span className="text-xl animate-[bounce_1s_ease-in-out_infinite] delay-150">
                          →
                        </span>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="relative my-8 opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-6 bg-white text-gray-600 font-bold text-sm">
                  ✨ Quick Access ✨
                </span>
              </div>
            </div>

            {/* Quick Access Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-6 opacity-0 animate-[fadeIn_1s_ease-out_0.9s_forwards]">
              <button
                onClick={() => alert("Patient Portal")}
                className="relative p-5 border-3 border-gray-200 rounded-2xl hover:border-teal-500 hover:bg-gradient-to-br hover:from-teal-50 hover:to-cyan-50 transition-all hover:-translate-y-2 hover:shadow-xl group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 to-cyan-400/0 group-hover:from-teal-400/10 group-hover:to-cyan-400/10 transition-all duration-500"></div>
                <div className="relative text-4xl mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 inline-block">
                  🏥
                </div>
                <div className="relative text-sm font-bold text-gray-700 group-hover:text-teal-600 transition-colors">
                  Patient Portal
                </div>
              </button>

              <button
                onClick={() => alert("Doctor Login")}
                className="relative p-5 border-3 border-gray-200 rounded-2xl hover:border-cyan-500 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 transition-all hover:-translate-y-2 hover:shadow-xl group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 transition-all duration-500"></div>
                <div className="relative text-4xl mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 inline-block">
                  👨‍⚕️
                </div>
                <div className="relative text-sm font-bold text-gray-700 group-hover:text-cyan-600 transition-colors">
                  Doctor Login
                </div>
              </button>
            </div>

            {/* Emergency & Support Links */}
            <div className="grid grid-cols-2 gap-4 mb-6 opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
              <a
                href="#"
                className="relative flex items-center justify-center gap-2 py-4 px-4 bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl hover:from-red-100 hover:to-pink-100 hover:border-red-300 transition-all text-red-600 font-bold text-sm hover:scale-105 hover:shadow-xl group overflow-hidden"
              >
                <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/10 transition-all duration-500"></div>
                <span className="relative text-2xl animate-[wiggle_1s_ease-in-out_infinite]">
                  🚨
                </span>
                <span className="relative">Emergency</span>
              </a>

              <a
                href="#"
                className="relative flex items-center justify-center gap-2 py-4 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl hover:from-blue-100 hover:to-indigo-100 hover:border-blue-300 transition-all text-blue-600 font-bold text-sm hover:scale-105 hover:shadow-xl group overflow-hidden"
              >
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-all duration-500"></div>
                <span className="relative text-2xl animate-[bounce_1s_ease-in-out_infinite]">
                  💬
                </span>
                <span className="relative">Support</span>
              </a>
            </div>

            {/* Register Link */}
            <div className="text-center text-sm text-gray-600 opacity-0 animate-[fadeIn_1s_ease-out_1.1s_forwards] mb-6">
              New patient?{" "}
              <a
                href="#"
                className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 font-bold hover:from-teal-700 hover:to-cyan-700 transition-all hover:scale-105 inline-block"
              >
                Register Now →
              </a>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-3 gap-3 mb-6 opacity-0 animate-[fadeIn_1s_ease-out_1.2s_forwards]">
              <div className="text-center p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:scale-105 transition-transform cursor-pointer">
                <div className="text-2xl mb-1 animate-[bounce_2s_ease-in-out_infinite]">
                  ⚡
                </div>
                <div className="text-xs font-bold text-gray-700">
                  Fast Access
                </div>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200 hover:scale-105 transition-transform cursor-pointer">
                <div className="text-2xl mb-1 animate-[wiggle_2s_ease-in-out_infinite]">
                  🔐
                </div>
                <div className="text-xs font-bold text-gray-700">Secure</div>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-200 hover:scale-105 transition-transform cursor-pointer">
                <div className="text-2xl mb-1 animate-[spin_3s_linear_infinite]">
                  ⭐
                </div>
                <div className="text-xs font-bold text-gray-700">Top Rated</div>
              </div>
            </div>

            {/* Footer Info */}
            <div className="pt-6 border-t-2 border-gradient-to-r from-teal-200 via-cyan-200 to-blue-200 text-center opacity-0 animate-[fadeIn_1s_ease-out_1.3s_forwards]">
              <p className="text-xs text-gray-600 font-semibold mb-2">
                🔒 Secure & HIPAA Compliant • Available 24/7
              </p>
              <div className="flex justify-center gap-2 text-xs text-gray-500">
                <span className="hover:text-teal-600 transition-colors cursor-pointer">
                  Terms
                </span>
                <span>•</span>
                <span className="hover:text-teal-600 transition-colors cursor-pointer">
                  Privacy
                </span>
                <span>•</span>
                <span className="hover:text-teal-600 transition-colors cursor-pointer">
                  Contact
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex justify-center items-center gap-8 text-gray-100 opacity-0 animate-[fadeIn_1.2s_ease-out_1.4s_forwards]">
          <div className="text-center group cursor-pointer hover:scale-110 transition-transform">
            <div className="text-3xl mb-2 group-hover:animate-[wiggle_0.5s_ease-in-out]">
              🛡️
            </div>
            <div className="text-sm font-bold">Secure</div>
          </div>
          <div className="text-center group cursor-pointer hover:scale-110 transition-transform">
            <div className="text-3xl mb-2 group-hover:animate-[bounce_0.5s_ease-in-out]">
              ✅
            </div>
            <div className="text-sm font-bold">Verified</div>
          </div>
          <div className="text-center group cursor-pointer hover:scale-110 transition-transform">
            <div className="text-3xl mb-2 group-hover:animate-[spin_0.5s_ease-in-out]">
              ⭐
            </div>
            <div className="text-sm font-bold">Rated 4.9</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) translateX(10px);
            opacity: 0.6;
          }
        }

        @keyframes floatSpin {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-50px) rotate(180deg);
            opacity: 0.5;
          }
        }

        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes gradientShift {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-10deg);
          }
          75% {
            transform: rotate(10deg);
          }
        }

        @keyframes bounceIn {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          60% {
            transform: scale(1.1);
            opacity: 1;
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
