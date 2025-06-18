// Bundle page: Displays skincare bundles and offers
import React from "react";

const Bundle: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-fuchsia-100">
    <h1 className="text-5xl font-extrabold text-pink-600 mb-6 drop-shadow-lg">Bundles</h1>
    <p className="text-lg text-gray-700 max-w-xl text-center mb-10">Save more with our exclusive skincare bundles, curated for complete routines and glowing results.</p>
    {/* Bundle product details or carousel can go here */}
  </div>
);

export default Bundle;
