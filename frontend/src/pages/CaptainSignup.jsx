import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext' 
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})
    const [vehicelColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')

    const { captain, setCaptain } = React.useContext(CaptainDataContext);
  
  const submitHandler = async (e) => {
    e.preventDefault()
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicelColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

      if (response.status === 201) {
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain/home')
      }
      // Handle login logic here
      setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')
      setVehicleColor('')
      setVehiclePlate('')
      setVehicleCapacity('')
      setVehicleType('')
    } catch (error) {
      if (error.response) {
        console.error('Validation Error:', error.response.data); 
        //alert(error.response.data.message || 'Registration failed'); 
      } else {
        console.error('Unexpected Error:', error.message);
      }
    }
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
          className="space-y-4">

          {/* Username */}
          <div >
            <h3 className="text-base font-medium mb-1">What's our captain name</h3>
            <div className='flex gap-4'>
              <input
                required
                type="text"
                placeholder="First Name"
                className="px-4 py-1 w-1/2 border border-gray-300 rounded bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <input
                required
                type="text"
                placeholder="Last Name"
                className="px-4 py-1 w-1/2 border border-gray-300 rounded bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-base font-medium mb-1">What's our captain email</h3>
            <input
              required
              type="email"
              placeholder="email@example.com"
              className="w-full px-4 py-1 border border-gray-300 rounded bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
              className="w-full px-4 py-1 border border-gray-300 rounded bg-gray-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Vehicle Information */}
          <div>
            <h3 className="text-base font-medium mb-1">Vehicle Information</h3>

            <div className="flex gap-4 mb-1">
              <input
                required
                type="text"
                placeholder="Vehicle Color"
                className="w-1/2 px-2 py-1 border text-sm border-gray-300 rounded bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={vehicelColor}
                onChange={(e) => setVehicleColor(e.target.value)}
              />

              <input
                required
                type="text"
                placeholder="Vehicle Plate"
                className="w-1/2 px-2 py-1 border border-gray-300 rounded bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
              />
            </div>

            <div className="flex gap-4">
              <input
                required
                type="number"
                placeholder="Capacity"
                className="w-1/2 px-2 py-1 border border-gray-300 rounded bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
              />

              <select
                required
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-1/2 px-2 py-1 border border-gray-300 rounded bg-gray-100 text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="">Select Type</option>
                <option value="car">Car</option>
                <option value="motorcycle">Bike</option>
                <option value="auto">Auto</option>
              </select>
            </div>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded font-semibold text-lg"
          >
            Create Captain Account
          </button>

          {/* Login Link */}
          <p className="text-center text-sm mt-0">
            Already have a account ?{' '}
            <Link to="/captain/login" className="py-1 text-blue-600 font-medium">
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

export default CaptainSignup