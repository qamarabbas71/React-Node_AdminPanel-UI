import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser]= useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async(form) => {
       await axios.post("http://localhost:3001/api/auth/login", form,{
            withCredentials: true,
        }).then((res) => {
            setCurrentUser(res.data)
            // console.log(currentUser)
        })
    }
    const logout = async() => {
        await axios.post("http://localhost:3001/api/auth/logout")
     }

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    return(
        <AuthContext.Provider value={{currentUser, login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}