import React, { createContext } from 'react'
import userService from '../services/user_service'

export const SiteContext = createContext(null);

export const SiteContextProvider = (props) => {

    const contextValue = {}
    return <SiteContext.Provider value={contextValue} >{props.children}</SiteContext.Provider>
}

