import React from "react";

const Profile: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-fuchsia-100">
    <h1 className="text-5xl font-extrabold text-pink-600 mb-6 drop-shadow-lg">My Profile</h1>
    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col gap-5 items-center">
      <div className="w-24 h-24 rounded-full bg-pink-200 flex items-center justify-center text-4xl font-bold text-pink-600 mb-4">
        <span>PP</span>
      </div>
      <div className="text-lg font-semibold text-gray-800">Pratyush Pandey</div>
      <div className="text-gray-500">pratyush@email.com</div>
      <button className="mt-6 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:from-pink-600 hover:to-fuchsia-600 transition-all duration-200">Edit Profile</button>
    </div>
  </div>
);

export default Profile;
