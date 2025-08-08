import React from 'react'
import {FaShippingFast,FaHeadset,FaHandshake,FaTag,FaLock} from 'react-icons/fa'

function InfoSection() {
    const infoItems=[
        {
            icon:<FaShippingFast className='text-3xl text-pink-700'/>,
            title:'Fast Delivery',
            description:'Get your products delivered to your doorstep in no time.',
        },
     {
        icon:<FaHeadset className='text-3xl text-pink-700'/>,
        title:'Customer Support',
        description:'We are here to assist you with any questions or concerns.',
     },
     {
        icon:<FaHandshake className='text-3xl text-pink-700'/>,
        title:'Secure Payments',
        description:'Your payments are safe and secure with us.',
     },
    {
        icon:<FaTag className='text-3xl text-pink-700'/>,
        title:'Quality Assurance',
        description:'We guarantee the quality of our products.',
    },
    {
        icon:<FaLock className='text-3xl text-pink-700'/>,
        title:'Privacy Policy',
        description:'We respect your privacy and have a strong privacy policy.',
    },
    ]
  return (
    <div className='bg-white pb-8 pt-12 mt-10'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
       {infoItems.map((item,index)=>(
           <div key={index} className='flex flex-col items-center text-center p-4 border border-pink-700 rounded-lg shadow-md`
           transform scale-90 transition-transform duration-300 hover:scale-100 cursor-pointer'>
            {item.icon}
            <h3 className='mt-4 text-lg font-semibold'>{item.title}</h3>
            <p className='mt-2 text-pink-600'>{item.description}</p>
           </div>
       ))}
      </div>
    </div>
  )
}

export default InfoSection
