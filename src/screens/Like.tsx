// Like page: Shows user's liked/favorite products
import React from "react";

const Like: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-fuchsia-100">
    <h1 className="text-5xl font-extrabold text-pink-600 mb-6 drop-shadow-lg">Liked Products</h1>
    <p className="text-lg text-gray-700 max-w-xl text-center mb-10">Your favorite skincare picks are saved here for quick access. Explore and shop your most-loved products anytime.</p>
    {/* Liked products grid or carousel can go here */}
  </div>
);

export default Like;
