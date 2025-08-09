import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaCarSide, FaQuestion } from "react-icons/fa";
import { addToCart } from "../redux/CartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const newProduct = products.find((product) => product.id === parseInt(id));
    setProduct(newProduct);
  }, [id, products]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ ...product, quantity }));
    }
  };

  if (!product) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-6 md:py-10">
      <div className="container max-w-xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Product Section */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 bg-white rounded-lg md:rounded-xl shadow-lg p-4 md:p-8 lg:p-10">
          {/* Product Image */}
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              decoding="async"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square object-contain rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            />
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 flex flex-col gap-4 md:gap-6">
            {/* Title + Price */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {product.name}
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-pink-700">
                ${product.price}
              </p>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-3 md:gap-4">
              <input
              id="quantity"
                type="number"
                
                value={quantity}
                onChange={(e) =>
                  setQuantity(parseInt(e.target.value) || 1)
                }
                className="border border-gray-300 rounded-lg p-2 w-16 md:w-20 text-sm md:text-base text-center focus:ring-2 focus:ring-pink-400 focus:outline-none"
              />
              <button
                onClick={handleAddToCart}
                className="bg-pink-600 hover:bg-pink-700 text-white font-medium text-sm md:text-base py-2.5 md:py-3 px-5 md:px-6 rounded-lg shadow-md transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>

            {/* Shipping & Questions */}
            <div className="flex flex-col gap-3 mt-4 text-gray-700 text-sm md:text-base">
              <p className="flex items-center gap-2">
                <FaCarSide className="text-pink-600" /> Deliver & Return
              </p>
              <p className="flex items-center gap-2">
                <FaQuestion className="text-pink-600" /> Ask a Question
              </p>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-6 md:mt-10 bg-white rounded-lg md:rounded-xl shadow-md p-4 md:p-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
            Product Description
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {product.description ||
              "This is a high-quality product that meets your needs. It has been crafted with attention to detail, ensuring both durability and style. Perfect for daily use or special occasions."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
