import React from "react";

const AllProducts: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-fuchsia-100">
    <h1 className="text-5xl font-extrabold text-pink-600 mb-6 drop-shadow-lg">All Products</h1>
    <p className="text-lg text-gray-700 max-w-xl text-center mb-10">Browse our complete collection of premium skincare products, crafted for every skin type and concern.</p>
    {/* Product grid or carousel can go here */}
  </div>
);

export default AllProducts;
