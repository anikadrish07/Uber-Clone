import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="h-screen w-full bg-cover bg-center relative bg-[url(https://plus.unsplash.com/premium_photo-1682834983265-27a10ba5232c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)]">
            
            {/* Uber logo at top-left */}
            <img 
                className="w-16 absolute top-6 left-4" 
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" 
                alt="Uber logo" 
            />

            {/* Bottom content */}
            <div className="absolute bottom-0 w-full bg-white px-5 py-6">
                <h2 className="text-2xl font-bold text-black">Get Started with Uber</h2>
                <Link to = '/login' className="flex item-center justify-center w-full bg-black text-white py-3 rounded mt-4 text-base">Continue</Link>
            </div>
        </div>
    )
}

export default Home