import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import NoProduct from "../assets/Images-main/not_found.png";

const FilterData = () => {
  const filtered = useSelector((state) => state.product.filterdSData);
  const filterProducts = useMemo(() => filtered, [filtered]);
  return (
    <div className=" mx-auto py-12 px-4 md:px-16 lg:px-24">
   {filterProducts.length > 0 ? (
  <>
    <h2 className="text-2xl font-bold mb-6 text-center text-pink-800 cursor-pointer">
      Shop
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
      {filterProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </>
) : (
  <div className="flex justify-center">
    <img src={NoProduct} alt="No products found" loading="lazy" decoding="async" />
  </div>
)}

    </div>
  );
};

export default FilterData;
