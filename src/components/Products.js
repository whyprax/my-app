/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts, STATUSES } from "../store/productSlice";

const Products = () => {
  //   const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  //   useEffect(() => {
  //     const getProducts = async () => {
  //       const res = await fetch("https://fakestoreapi.com/products");
  //       const data = await res.json();
  //       setProducts(data);
  //     };

  //     getProducts();
  //   }, []);

  const handleClick = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h1 className="text-2xl font-bold">Loading</h1>;
  }

  if (status === STATUSES.ERROR) {
    return <h1 className="text-2xl font-bold text-red-600">Error</h1>;
  }

  return (
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
  );
};

export default Products;
