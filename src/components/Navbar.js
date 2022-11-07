import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-200 px-24 py-4 flex justify-between">
      <div>
        <h1 className="text-xl font-black">Shopping Cart Redux Toolkit</h1>
      </div>
      <div className="flex gap-6 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <h3>Cart Items: 3</h3>
      </div>
    </nav>
  );
};

export default Navbar;
