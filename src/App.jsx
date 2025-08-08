import React, { Suspense, lazy, useState } from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// Route-based code splitting
const Home = lazy(() => import('./pages/Home'))
const Shop = lazy(() => import('./pages/Shop'))
const Cart = lazy(() => import('./pages/Cart'))
const Checkout = lazy(() => import('./pages/Checkout'))
const Order = lazy(() => import('./pages/Order'))
const FilterData = lazy(() => import('./pages/FilterData'))
const ProductDetails = lazy(() => import('./pages/ProductDetails'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Footer = lazy(() => import('./components/Footer'))
function App() {
  const [order, setOrder] = useState(null);
  return (
  <BrowserRouter>
    <Navbar/>
    <Suspense fallback={<div className="py-10 text-center">Loading...</div>}>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
        <Route path='checkout' element={<Checkout setOrder={setOrder}/>}></Route>
        <Route path='order-confirmation' element={<Order order={order}/>}></Route>
        <Route path='filter-data' element={<FilterData order={order}/>}></Route>
        <Route path='product/:id' element={<ProductDetails order={order}/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
      </Routes>
    </Suspense>
    <ToastContainer />
    <Suspense fallback={null}>
      <Footer/>
    </Suspense>
  </BrowserRouter>
  )
}

export default App
