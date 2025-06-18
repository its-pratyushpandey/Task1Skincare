// App component: Handles all route definitions for the app
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Desktop } from "./screens/Desktop/Desktop";
import AllProducts from "./screens/AllProducts";
import Serum from "./screens/Serum";
import Sunscreen from "./screens/Sunscreen";
import Bundle from "./screens/Bundle";
import SignUp from "./screens/SignUp";
import Like from "./screens/Like";
import Cart from "./screens/Cart";
import Profile from "./screens/Profile";

const App: React.FC = () => (
  // Router wraps all routes for navigation
  <Router>
    <Routes>
      {/* Home/Landing page */}
      <Route path="/" element={<Desktop />} />
      {/* Product-related pages */}
      <Route path="/products" element={<AllProducts />} />
      <Route path="/serum" element={<Serum />} />
      <Route path="/sunscreen" element={<Sunscreen />} />
      <Route path="/bundle" element={<Bundle />} />
      {/* User-related pages */}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/like" element={<Like />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
);

export default App;
