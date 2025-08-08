import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../redux/AuthSlice'

const Login = ({openSignUp, onLoggedIn}) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Demo login: accept any non-empty credentials
    if (!email || !password) return
    const user = { email }
    dispatch(loginSuccess(user))
    if (onLoggedIn) onLoggedIn()
  }
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Login</h2>
      <form onSubmit={handleSubmit}>
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
       <div className='mb-4 flex justify-between items-center'>
        <label htmlFor="">
            <input type="checkbox" className='form-checkbox' />
            <span className='ml-2 text-pink-600'>Remember me</span>
        </label>
        <a href="" className='text-pink-600'>Forget Password?</a>
       </div>
       <div className='mb-4'>
        <button type='submit' className='bg-pink-600 text-white py-2 border hover:bg-pink-950 rounded-2xl cursor-pointer px-4 '>Login</button>
       </div>
      </form>
      <div className='text-center'>
        <span className='text-pink-600'>Don't have an account?</span>
        <button className='ml-2 text-pink-600 border border-pink-600' onClick={openSignUp}>Sign Up</button>
      </div>
    </div>
  )
}

export default Login
