import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../redux/AuthSlice'

const Register = ({ openLogin, onRegistered }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !password) return
    // Demo register: accept any non-empty inputs
    dispatch(loginSuccess({ name, email }))
    if (onRegistered) onRegistered()
  }
  return (
      <div>
      <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>
      <form onSubmit={handleSubmit}>
       <div className='mb-4'>
        <label htmlFor="" className='block text-pink-600'>Name</label>
        <input
          type="text"
          className='border border-pink-600 w-full px-3 py-2'
          placeholder='Enter your Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
       </div>
       <div className='mb-4'>
        <label htmlFor="" className='block text-pink-600'>Email</label>
        <input
          type="email"
          className='border border-pink-600 w-full px-3 py-2'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
       </div>
       <div className='mb-4'>
        <label htmlFor="" className='block text-pink-600'>Password</label>
        <input
          type="password"
          className='border border-pink-600 w-full px-3 py-2'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
       </div>
      
       <div className='mb-4'>
        <button type='submit' className='bg-pink-600 text-white py-2 border border-green-600 '>Sign Up</button>
       </div>
      </form>
      <div className='text-center'>
        <span className='text-pink-600'>Already have an account?</span>
        <button className='ml-2 text-pink-600 border border-pink-600' onClick={openLogin}>Login</button>
      </div>
    </div>
  )
}

export default Register
