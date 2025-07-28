import React, { createContext } from 'react'

export const userDataContext = createContext()

const userContext = ({ children }) => {
    const [user, setuser] = useState({
        fullName: {
            firstName: '',
            lastName: ''
        },
        email: '',
        //password: ''
    })
    return (
        <div>
            <userDataContext.Provider value={[user, setuser] }>
                {children}
            </userDataContext.Provider>
        </div>
    )
}

export default userContext