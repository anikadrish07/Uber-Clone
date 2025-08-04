import React from 'react'

const LocationSearchPanel = (props) => {


  const locations = [
    "bkc, kalina , insignia, street 506, mumbai",
    "10b street, newtown, gouranganagar, kolkata",
    "20B street, newtown, gouranganagar, kolkata"
  ]

  return (
    <div>

      {
        locations.map(function (e, x) {
          return <div
            key={x}
            onClick={() => {
              props.setVehiclePanelOpen(true)
              props.setpanelOpen(false)
            }}
            className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-8 mr-2 rounded-full'><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>{e}</h4>
          </div>
        })
      }
    </div>
  )
}

export default LocationSearchPanel