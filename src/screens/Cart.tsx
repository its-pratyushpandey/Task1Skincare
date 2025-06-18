// Cart page: Displays items added to the shopping cart
import React from "react";

const Cart: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-fuchsia-100">
    <h1 className="text-5xl font-extrabold text-pink-600 mb-6 drop-shadow-lg">Your Cart</h1>
    <p className="text-lg text-gray-700 max-w-xl text-center mb-10">Review your selected skincare products and proceed to checkout for a glowing transformation.</p>
    {/* Cart items and checkout button can go here */}
  </div>
);

export default Cart;
