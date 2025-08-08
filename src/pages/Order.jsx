import React from 'react'
import  {useNavigate} from 'react-router-dom'
const Order= ({order}) => {
  const navigate=useNavigate()
  return (
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
      <h2 className='text-2xl font-bold mb-4 text-pink-950'>thank you for your order</h2>
      <p className='text-lg text-pink-700 mb-4'>Your order has been placed successfully!</p>
      <div className='bg-gray-100 p-4 mt-6 border rounded-lg '>
        <h3 className='text-lg font-semibold mb-2'>Order Summary</h3>
        <p className='mb-2 text-black'>Order Number: {order.orderNumber}</p>
        <div className='mt-4'>
            <h2 className='text-lg font-semibold mb-2 text-black'>Shipping Information</h2>
            <p>{order.shippingInformation.address}</p>
            <p>{order.shippingInformation.city}</p>
            <p>{order.shippingInformation.zip}</p>
        </div>
        <div className='mt-4'>
            <h4 className='text-md font-semibold mb-2'>Product Ordered</h4>
            {order.products.map(product => (
                <div key={product.id} className='flex justify-between mt-2'>
                    <p>{product.name} x {product.quantity}</p>
                    <p>Price: ${product.price *  product.quantity}</p>
                </div>
            ))}
        </div>
        <div className='flex justify-between mt-4'>
            <span className='font-bold text-lg text-pink-800'>Total:</span>
            <span className='font-semibold'>${order.totalPrice.toFixed(2)} </span>
        </div>
        <div className=' mt-6'>
            <button className='bg-green-700 text-white py-2 px-4 hover:bg-green-800 cursor-pointer'>Order tracking</button>
            <button className='bg-pink-700 text-white py-2 px-4 ml-2 hover:bg-pink-800 cursor-pointer'
            onClick={()=> navigate('/')}>countinue shopping</button>
        </div>
      </div>

    </div>
  )
}

export default Order
