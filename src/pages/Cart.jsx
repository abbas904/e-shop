import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EmptyCart from '../assets/Images-main/emptycart.png';
import { FaTrashAlt } from 'react-icons/fa'
import Modal from '../components/Modal'
import ChangeAdddress from '../components/ChangeAdddress'
import { decreaseQuantity, removeFromCart, increaseQuantity } from '../redux/CartSlice'
import { useNavigate } from 'react-router-dom'


 

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const [address, setAddress] = useState('ksa, jeddah street 123')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate=useNavigate()

  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
      {cart.products.length > 0 ? (
        <div>
          <h3 className='text-2xl font-bold mb-4 text-pink-950'>Shopping Cart</h3>
          <div className='flex flex-col md:flex-row justify-between space-x-0 md:space-x-10 mt-8'>
            {/* Product List */}
            <div className='md:w-2/3'>
              <div className='flex justify-between border-b items-center mb-4 text-xs'>
                <p className='font-semibold text-pink-600 text-lg'>PRODUCT</p>
                <div className='flex space-x-8 justify-center'>
                  <p className='font-semibold text-pink-600 text-lg'>PRICE</p>
                  <p className='font-semibold text-pink-600 text-lg'>QUANTITY</p>
                  <p className='font-semibold text-pink-600 text-lg'>SUBTOTAL</p>
                  <p className='font-semibold text-pink-600 text-lg'>REMOVE</p>
                </div>
              </div>
              <div>
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className='flex items-center justify-between p-3 border-b'
                  >
                    <div className='md:flex items-center space-x-4'>
                      <img
                        src={product.image}
                        alt={product.name}
                        className='w-16 h-16 object-contain rounded'
                      />
                      <div className='flex-1 ml-4'>
                        <h3 className='text-lg font-semibold'>{product.name}</h3>
                      </div>
                    </div>
                    <div className='flex space-x-16 items-center justify-center'>
                      <p className='text-lg flex items-center'>${product.price}</p>
                      <div className='flex items-center justify-center border'>
                        <button className='text-xl font-bold px-1.5 border-r'
                        onClick={() => dispatch(decreaseQuantity(product.id))}>-</button>
                        <p className='text-xl font-bold px-2'>{product.quantity}</p>
                        <button className='text-xl px-1.5 border-l'
                         onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
                      </div>
                      <p>${(product.quantity * product.price).toFixed(2)}</p>
                      <button className='text-pink-600 hover:text-pink-800'
                      onClick={() => dispatch(removeFromCart(product.id))}>

                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cart Summary */}
            <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border mt-6 md:mt-0'>
              <h3 className='text-sm font-bold mb-5'>CART TOTAL</h3>
              <div className='flex justify-between mb-5 border-b pb-1'>
                <span className='font-bold text-lg text-pink-700'>Total Items:</span>
                <span className='font-bold text-lg'>{cart.totalQuantity}</span>
              </div>
              <div className='mb-4 border-b pb-2'>
                <p className='font-bold text-md text-pink-500'>Shipping:</p>
                <p className='text-md text-black font-bold'>
                  Shipping to:
                  <span className='text-xs font-bold'> {address}</span>
                </p>
                <button
                  className='text-md font-bold text-pink-500 hover:underline mt-1'
                  onClick={() => setIsModalOpen(true)}
                >
                  Change Address
                </button>
              </div>
              <div className='mt-4 font-bold text-lg'>
                <span>Total Price: </span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>
              <button className='w-full mt-6 bg-pink-500 hover:bg-pink-600 text-white py-2 rounded cursor-pointer'
              onClick={()=> navigate('/checkout')}>
                Process To Checkout
              </button>
            </div>
          </div>

          {/* Modal for Address Change */}
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <h2 className='text-xl font-bold mb-4 text-center text-pink-700'>
              Change Shipping Address
            </h2>
            <ChangeAdddress setAddress={setAddress} setIsModalOpen={setIsModalOpen} />
          </Modal>
        </div>
      ) : (
        <div className='flex justify-center'>
          <img src={EmptyCart} alt='Empty Cart' className='h-96' />
        </div>
      )}
    </div>
  )
}

export default Cart
