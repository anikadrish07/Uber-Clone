import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captainData, setCaptainData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setCaptainData({ email: email, password: password })
    // Handle login logic here
    console.log(captainData)
    setEmail('')
    setPassword('')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-white to-gray-100 px-6 py-5">
      <div className="w-full max-w-md">
        {/* Uber Logo */}
        <img
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="Uber"
          className="w-20 mb-0"
        />

        <form onSubmit={(e) => {
          submitHandler(e)
        }}
          className="space-y-6">
          {/* Email */}
          <div>
            <h3 className="text-lg font-medium mb-1">What's your email</h3>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="email@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Password */}
          <div>
            <h3 className="text-lg font-medium mb-1">Enter Password</h3>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
              className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded font-semibold text-lg"
          >
            Login
          </button>

          {/* Signup Link */}
          <p className="text-center text-sm">
            Want to Join as a Captain ?{' '}
            <Link to="/captain/signup" className="text-blue-600 font-medium">
              Register as a Captain
            </Link>
          </p>
        </form>
      </div>

      {/* Sign in as Captain button at bottom */}
      <div className="w-full max-w-md mt-8">
        <Link
          type="button"
          to="/login"
          className="flex item-center justify-center w-full bg-yellow-800 hover:bg-green-700 text-white font-semibold py-3 rounded"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin