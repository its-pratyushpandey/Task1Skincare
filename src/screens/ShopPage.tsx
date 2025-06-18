import React from "react";

/**
 * ShopPage - Premium shop landing page for all products
 */
const ShopPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fefff4] to-[#f7e7f7] flex flex-col items-center justify-center px-8 py-16">
      <h1 className="text-6xl font-extrabold text-[#2d3b36] mb-6 drop-shadow-xl">Shop All Products</h1>
      <p className="text-xl text-[#525349] mb-12 max-w-2xl text-center">
        Discover our curated collection of premium skincare products. Each item is crafted with the finest natural ingredients and advanced science to give your skin the care it deserves.
      </p>
      {/* Example product grid - replace with real data as needed */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl">
        {[1,2,3].map((i) => (
          <div key={i} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform hover:scale-105 border border-[#e7e8e0]">
            <div className="w-40 h-40 bg-gradient-to-tr from-pink-100 to-fuchsia-100 rounded-full flex items-center justify-center mb-6">
              <img src={`https://c.animaapp.com/mc171d2jh6zhlR/img/skin-care-beauty-cosmetic-packaging-design-agency-mumbai-delhi-b-1.png`} alt="Product" className="w-28 h-28 object-cover rounded-full" />
            </div>
            <h2 className="text-2xl font-bold text-[#2d3b36] mb-2">Premium Serum {i}</h2>
            <p className="text-[#525349] mb-4 text-center">A luxurious serum to rejuvenate and hydrate your skin for a radiant glow.</p>
            <button className="bg-[#2d3b36] text-[#fefff4] px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#3d4b46] transition-colors">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
