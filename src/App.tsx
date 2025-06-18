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
  <Router>
    <Routes>
      <Route path="/" element={<Desktop />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/serum" element={<Serum />} />
      <Route path="/sunscreen" element={<Sunscreen />} />
      <Route path="/bundle" element={<Bundle />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/like" element={<Like />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
);

export default App;
