import React, { useState, useEffect, createContext } from 'react';
import { auth, createUserProfileDocument } from '../firebase';

export const UserContext = createContext({ user: null });

const UserProvider = ({children}) => {
    const [user, setUser] = useState([])

    useEffect(() => {
        const unsubscribeFromAuth =
        auth.onAuthStateChanged(async userAuth => {
            const user = await createUserProfileDocument(userAuth)

            setUser(user);
        })

        return () => unsubscribeFromAuth();
    }, [])

    return (
        <UserContext.Provider value={user}>{children}</UserContext.Provider>
    );
}

export default UserProvider;