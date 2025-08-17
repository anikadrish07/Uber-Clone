
import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[90%] absolute top-0'
        onClick={() => {
          props.setw(false)
        }}
      ><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
      <div className='flex items-center justify-between'>
        <img className='h-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1GH_1MoFhFiPLon-4Zh79ac_lTOYHU8b3Bwr04wie-_3suaeWXfPXmm5kjbUFWiZWWV8&usqp=CAU" alt="" />
            <div className='text-right'>
              <h2 className='text-lg font-medium capitalize'>{props.ride?.captain.fullname.firstname}</h2>
              <h4 className='text-lg font-semibold -mb-1 -mt-1'>{props.ride?.captain.vehicle.plate}</h4>
              <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
              <h1 className='text-lg font-bold '>{props.ride?.otp}</h1>
            </div>
      </div>

      <div className='flex gap-2 justify-between flex-col items-center'>
        <div className='w-full mt-5'>

          <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>5454/35-W</h3>
              <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
            </div>
          </div>

          <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>5454/35-W</h3>
              <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
            </div>
          </div>

          <div className='flex items-center gap-5 p-3'>
            <i className="ri-money-rupee-circle-line"></i>
            <div>
              <h3 className='text-lg font-medium'>₹{props.ride?.fare}</h3>
              <p className='text-sm -mt-1 text-gray-600'>cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WaitingForDriver