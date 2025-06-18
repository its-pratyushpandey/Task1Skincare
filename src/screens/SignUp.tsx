import React from "react";

const SignUp: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-fuchsia-100">
    <h1 className="text-5xl font-extrabold text-pink-600 mb-6 drop-shadow-lg">Sign Up</h1>
    <form className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col gap-5">
      <input type="text" placeholder="Name" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400" required />
      <input type="email" placeholder="Email" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400" required />
      <input type="password" placeholder="Password" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400" required />
      <button type="submit" className="bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-bold py-2 rounded-lg shadow-md hover:from-pink-600 hover:to-fuchsia-600 transition-all duration-200">Create Account</button>
    </form>
  </div>
);

export default SignUp;
