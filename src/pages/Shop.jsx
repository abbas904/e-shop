import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { motion } from "framer-motion";

function Shop() {
    const products = useSelector(state => state.product)
    const productList = useMemo(() => products.products, [products.products])
  return (
       <motion.div
      className="mx-auto py-12 px-4 md:px-16 lg:px-24"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-pink-800 cursor-pointer">
        Shop
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </motion.div>

  )
}

export default Shop
