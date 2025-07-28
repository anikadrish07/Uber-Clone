import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setUserData({ 
      fullName:{
        firstName: firstName,
        lastName: lastName
      },
      email: email, 
      password: password
     })
    // Handle login logic here
    console.log(userData)
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-white to-gray-100 px-6 py-10">
      <div className="w-full max-w-md">
        {/* Uber Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber"
          className="w-20 mb-8"
        />

        <form onSubmit={(e) => {
          submitHandler(e)
        }}
          className="space-y-6">

          {/* Username */}
          <div >
            <h3 className="text-base font-medium mb-1">What's your name</h3>
            <div className='flex gap-4'>
              <input
                required
                type="text"
                placeholder="First Name"
                className="px-4 py-2 w-1/2 border border-gray-300 rounded bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <input
                required
                type="text"
                placeholder="Last Name"
                className="px-4 py-2 w-1/2 border border-gray-300 rounded bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-base font-medium mb-1">What's your email</h3>
            <input
              required
              type="email"
              placeholder="email@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <h3 className="text-base font-medium mb-1">Enter Password</h3>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
              className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded font-semibold text-lg"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center text-sm">
            Already have a account ?{' '}
            <Link to="/login" className="text-blue-600 font-medium">
              Login here
            </Link>
          </p>
        </form>
      </div>

      <div className="w-full max-w-md mt-8">
        <p className='text-[10px] leading-tight'> This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy 
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default UserSignup