import React, { createContext, useEffect, useState } from 'react';
import userService from '../services/user_service';
import { checkUser, checkUserState, clearToken } from '../services/user_service';
import { checkDoc } from '../services/doc_service';
import { checkAdmin } from '../services/admin_service';

export const SiteContext = createContext(null);

export const SiteContextProvider = (props) => {
    const [uid, setUid] = useState('');
    const [user, setUser] = useState({ user: "blank" });
    const [userState, setUserState] = useState({
        path: "",
        gender: "",
        age: "",
        quesList: {},
        SymList: {},
        SymValList: {},
    });

    const logout = () => {
        console.log("called logout");
        clearToken();
        setUid('');
        window.location.reload();
    };

    useEffect(() => {
        const fetchData = async () => {
            const res1 = checkUser();
            const res2 = checkUserState();
            const res3 = checkDoc();
            const res4 = checkAdmin();

            if (res1 !== '') {
                setUid(res1);
            } else if (res3 !== '') {
                setUid(res3);
            } else {
                setUid(res4);
            }
            setUserState(res2);
        };

        // Run fetchData only in the client-side environment
        if (typeof window !== 'undefined') {
            fetchData();
        }
    }, []);

    useEffect(() => {
        if (uid) {
            userService.getInfo(uid)
                .then((res) => {
                    console.log('Uid :', uid);
                    console.log('User :', res.data);
                    setUser(res.data);
                })
                .catch((err) => {
                    console.log('Error :', err);
                });
        }
    }, [uid]);

    const contextValue = {
        uid,
        setUid,
        logout,
        user,
        userState,
        setUserState,
    };

    return (
        <SiteContext.Provider value={contextValue}>
            {props.children}
        </SiteContext.Provider>
    );
};
