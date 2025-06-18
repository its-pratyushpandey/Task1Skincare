import React from "react";

const Sunscreen: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-fuchsia-100">
    <h1 className="text-5xl font-extrabold text-pink-600 mb-6 drop-shadow-lg">Sunscreen</h1>
    <p className="text-lg text-gray-700 max-w-xl text-center mb-10">Protect your skin with our premium sunscreens, offering broad-spectrum defense and a luxurious feel.</p>
    {/* Sunscreen product details or carousel can go here */}
  </div>
);

export default Sunscreen;
