"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "/lib/firebase"

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user,setUser] = useState(undefined);

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user);
      }else{
        setUser(null);
      }
    })
    return ()=> unsub()
  },[])

  return <AuthContext.Provider value={{
    user,
    isLoading: user === undefined,

  }}>{children}</AuthContext.Provider>;
}


export const useAuth = () =>  useContext(AuthContext);