// Serum page: Showcases serum products and details
import React from "react";

const Serum: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-fuchsia-100">
    <h1 className="text-5xl font-extrabold text-pink-600 mb-6 drop-shadow-lg">Serum</h1>
    <p className="text-lg text-gray-700 max-w-xl text-center mb-10">Discover our advanced serums, designed to target specific skin needs and deliver visible results.</p>
    {/* Serum product details or carousel can go here */}
  </div>
);

export default Serum;
