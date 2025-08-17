import React from 'react'

const ConfirmRide = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[90%] absolute top-0'
                onClick={() => {
                    props.setConfirmRidePanelOpen(false)
                    props.setVehicleFound(false)
                }}
            ><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-xl font-semibold mb-5'>Confirm your Ride</h3>

            <div className='flex gap-2 justify-between flex-col items-center'>
                <img className='h-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1GH_1MoFhFiPLon-4Zh79ac_lTOYHU8b3Bwr04wie-_3suaeWXfPXmm5kjbUFWiZWWV8&usqp=CAU" alt="" />
                <div className='w-full mt-5'>

                    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>5454/35-W</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.pickup}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>5454/35-W</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.destination}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-money-rupee-circle-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹{props.fare[props.vehicleType]}</h3>
                            <p className='text-sm -mt-1 text-gray-600'>cash</p>
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => {
                        props.createRide()
                        props.setConfirmRidePanelOpen(false)
                        props.setVehicleFound(true)
                    }}
                    className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
            </div>
        </div>
    )
}

export default ConfirmRide