import React, { useState } from 'react';
import USerContext from './UserContext';

const UserContextProvider = ({children})=>{
    const [user,setUser] = useState(null)
    return(
        <UserContextProvider value={{user,setUser}}>
        {children}
        </UserContextProvider>
    )
}

export default UserContextProvider;