import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="px-24 py-8 flex flex-col gap-8">
      <h1 className="font-bold text-2xl">Welcome to the Redux toolkit store</h1>
      <h2 className="font-semibold text-xl">Products</h2>
      <Products />
    </div>
  );
};

export default Home;
