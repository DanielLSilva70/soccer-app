import React, {createContext, useContext, useEffect} from 'react'
import {getAuth, onAuthStateChanged} from "firebase/auth"

const auth = createContext();

export const useAuth = () => {
    return useContext(auth)
}

export default function AuthContext() {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    let auth = getAuth();

    useEffect(() => {
        let unsub = onAuthStateChanged(auth,(user) => {
            setCurrentUser(user)
            setPending(false);
        })
        return unsub;
    },[auth])
  return (
    <Auth.Provider value={{
        currentUser
    }}>
        {children}
    </Auth.Provider>
  )
}
