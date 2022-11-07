import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };

    getProducts();
  }, []);

  const handleClick = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="px-24 py-8 flex flex-col gap-8">
      <h1 className="font-bold text-2xl">Welcome to the Redux toolkit store</h1>
      <h2 className="font-semibold text-xl">Products</h2>
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
              onClick={() => handleClick(product)}
              className="bg-green-500 text-white px-6 py-4 rounded"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
