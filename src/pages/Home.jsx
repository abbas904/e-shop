import React, { useEffect, useMemo, lazy, Suspense, useRef } from 'react'
import { Categories, mockData } from '../assets/MockData'
import HeroImage from '../assets/Images-main/shop.png'
import InfoSection from '../components/InfoSection'
import CategorySection from '../components/CategorySection'
import { setProducts } from '../redux/ProductSlice'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { motion } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const LazyShop = lazy(() => import('./Shop'))

const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.product)
  const topProducts = useMemo(() => products.products.slice(0, 5), [products.products])

  const prevRef = useRef(null)
  const nextRef = useRef(null)

  useEffect(() => {
    dispatch(setProducts(mockData))
  }, [dispatch])

  // Framer Motion Variants
  const containerFade = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  }
  const heroImageVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
  }
  const heroTextVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.15 } }
  }
  const listStagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
  }
  const listItem = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } }
  }
  const sectionUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  return (
    <motion.div
      className="bg-white mt-2 px-4 md:px-16 lg:px-24"
      variants={containerFade}
      initial="hidden"
      animate="show"
    >
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        {/* تصنيفات */}
        <motion.div className="w-full md:w-3/12" initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.div className='bg-pink-800 text-white text-xs font-bold py-2 px-2' variants={sectionUp}>SHOP By Categories</motion.div>
          <motion.ul className='space-y-4 bg-white text-pink-700 pt-3 px-3 border-1' variants={listStagger}>
            {Categories.map((category, index) => (
              <motion.li
                className='flex items-center text-sm font-medium py-2 '
                key={index}
                variants={listItem}
              >
                <div className='w-2 h-2 border border-pink-700 rounded-full mr-2'></div>
                {category}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* صورة وبقية المحتوى */}
        <motion.div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative " initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.img
            src={HeroImage}
            loading="eager"
            decoding="sync"
            className='w-full h-full object-cover'
            alt="Hero"
            variants={heroImageVariants}
          />
          <motion.div className='absolute top-16 left-8' variants={heroTextVariants}>
            <p className='text-white text-2xl font-bold mb-4 drop-shadow'>Welcome To | <span className='text-pink-400'>Sh</span>oppix</p>
            <h1 className='text-3xl font-bold text-pink-800'>Discover The Best Products !</h1>
            <p className='text-black text-lg py-1.5 mt-2 rounded-2xl '>Millions + of products!</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className='text-pink-800 bg-gray-400 px-8 py-1 mt-4 hover:bg-black rounded-2xl transition-colors duration-300 hover:cursor-pointer'
            >
              SHOP NOW
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionUp}>
        <InfoSection />
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionUp}>
        <CategorySection />
      </motion.div>

      {/* Top Products باستخدام Swiper مع أسهم خارج الصور */}
      <motion.div
        className="max-w-full mx-auto py-12 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={sectionUp}
      >
        <motion.h2 className="text-2xl font-bold mb-6 text-center">Top Products</motion.h2>
        <div className="relative flex items-center">
          {/* زر السهم اليسار خارج السلايدر */}
          <button
            ref={prevRef}
            className="absolute left-0 z-10 bg-gray-300 rounded-full p-3 hover:bg-gray-400"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            ‹
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={3}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              1280: { slidesPerView: 4 },
              1024: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              640: { slidesPerView: 1 },
              480: { slidesPerView: 1 },
            }}
            style={{ paddingBottom: '40px', width: '100%' }}
          >
            {topProducts.map(product => (
              <SwiperSlide key={product.id}>
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <ProductCard product={product} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* زر السهم اليمين خارج السلايدر */}
          <button
            ref={nextRef}
            className="absolute right-0 z-10 bg-gray-300 rounded-full p-3 hover:bg-gray-400"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            ›
          </button>
        </div>
      </motion.div>

      <Suspense fallback={null}>
        <LazyShop />
      </Suspense>
    </motion.div>
  )
}

export default Home
