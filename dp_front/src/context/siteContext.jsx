import React, { createContext, useEffect, useState } from 'react'
import userService from '../services/user_service'

export const SiteContext = createContext(null);

export const SiteContextProvider = (props) => {
    const [ uid, setUid ] = useState('')
    const [ user, setUser ] = useState({ user: "blank" })
    
    useEffect(()=>{
        userService.getInfo(uid).then((res)=>{
            console.log('Uid :', uid);
            console.log('User :', res.data);
            setUser(res.data);
        }).catch((err)=>{
            console.log('Error :',err.response.data);
        })
    },[uid])
    
    const contextValue = {
        uid,
        setUid,
        user,
    }
    return <SiteContext.Provider value={contextValue} >{props.children}</SiteContext.Provider>
}

