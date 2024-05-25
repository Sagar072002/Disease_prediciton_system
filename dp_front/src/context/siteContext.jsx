import React, { createContext, useEffect, useState } from 'react'
import userService from '../services/user_service'
import { checkUser, checkUserState, clearToken } from '../services/user_service';
import { checkDoc } from '../services/doc_service';

export const SiteContext = createContext(null);

export const SiteContextProvider = (props) => {
    const [ uid, setUid ] = useState('')
    const [ user, setUser ] = useState({ user: "blank" })
    const [ userState, setUserState ] = useState({
                                                    path:"",
                                                    gender: "",
                                                    age: "",
                                                    quesList :{},
                                                    SymList: {},
                                                    SymValList: {},
                                                })

    const logout = ()=>{
        console.log("called logout")
        clearToken()
        setUid('')
        window.location.reload()
        // console.log(uid)
    }

    useEffect(()=>{
        const res1 = checkUser();
        const res2 = checkUserState()
        const res3 = checkDoc()
        // console.log("res: ",res)
        if(res1!=''){
            setUid(res1)
        }else{
            setUid(res3)
        }
        setUserState(res2)
    },[])
    
    useEffect(()=>{
        if(uid){userService.getInfo(uid).then((res)=>{
            console.log('Uid :', uid);
            console.log('User :', res.data);
            setUser(res.data);
        }).catch((err)=>{
            console.log('Error :',err);
        })}
    },[uid])
    
    const contextValue = {
        uid,
        setUid,
        logout,
        user,
        userState,
        setUserState,
    }
    return <SiteContext.Provider value={contextValue} >{props.children}</SiteContext.Provider>
}