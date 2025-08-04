import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen bg-white'>
            <Link to='/home' className='fixed top-2 right-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <i className="text-lg font-medium ri-home-6-line"></i>
            </Link>

            <div className='h-1/2'>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>

            <div className='h-1/2 p-4'>
                <div className='flex items-center justify-between'>
                    <img className='h-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1GH_1MoFhFiPLon-4Zh79ac_lTOYHU8b3Bwr04wie-_3suaeWXfPXmm5kjbUFWiZWWV8&usqp=CAU" alt="" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>anik</h2>
                        <h4 className='text-lg font-semibold -mb-1 -mt-1'>WB 67 SD 7865</h4>
                        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                    </div>
                </div>

                <div className='flex gap-2 justify-between flex-col items-center'>
                    <div className='w-full mt-5'>
                        <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                            <i className="ri-map-pin-user-fill"></i>
                            <div>
                                <h3 className='text-lg font-medium'>5454/35-W</h3>
                                <p className='text-sm -mt-1 text-gray-600'>kalina, kbc, mumbai</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-5 p-3'>
                            <i className="ri-money-rupee-circle-line"></i>
                            <div>
                                <h3 className='text-lg font-medium'>₹192.65</h3>
                                <p className='text-sm -mt-1 text-gray-600'>cash</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
            </div>
        </div>
    )
}

export default Riding