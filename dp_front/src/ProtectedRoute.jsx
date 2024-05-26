import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { SiteContext } from './context/siteContext'

const ProtectedRoute = ({children, allowedRoles}) => {

    const {role} = useContext(SiteContext)
    const isAllowed = allowedRoles.includes(role)
    const accessibleRoute = isAllowed ? children : <Navigate to='/' replace={true} />
    return accessibleRoute;
}

export default ProtectedRoute
