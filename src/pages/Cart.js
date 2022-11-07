import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClick = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div className="px-24 py-8 flex flex-col gap-8">
      <h1 className="font-bold text-2xl">Welcome to the Redux toolkit Cart</h1>
      <h2 className="font-semibold text-xl">Your Products</h2>
      <div className="flex flex-wrap gap-8 justify-between">
        {products.map((product) => (
          <div
            key={product.id}
            className="basis-1/4 flex flex-col justify-around items-center gap-4 text-center outline outline-4 outline-offset-2 outline-gray-200 rounded p-4"
          >
            <img className="w-1/2" src={product.image} alt={product.title} />
            <h3 className="font-semibold text-xl">{product.title}</h3>
            <span className="text-3xl">{product.price}</span>
            <button
              className="bg-red-500 text-white px-6 py-4 rounded"
              onClick={() => handleClick(product.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
