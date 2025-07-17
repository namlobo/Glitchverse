import React, {createContext, useContext, useState, useEffect, Children } from 'react';
import axios from 'axios';

const AuthContext = createContext(); //create Context

export const useAuth = () => useContext(AuthContext); //hook

//provided component
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null); //store user info
    const [token, setToken] = useState(null); //JWT token

    //run on mount: auto-login if token exists
    useEffect(() =>{
        const storedToken = localStorage.getItem("token");
        if(storedToken){
            setToken(storedToken);
            fetchUserData(storedToken);
        }
    }, []);

    const fetchUserData = async(token) =>{
        try{
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/user/me`,{
        headers: { Authorization: `Bearer ${token}` }
      });
       setUser(res.data.user); // backend should return user
        } catch(err){
            console.error("Failed to fetch user data: ", err);
            logout();
        }
    };

    const login = (token) => {
    console.log("Logged in..")
    localStorage.setItem("token", token);
    // console.log("TOKEN:", localStorage.getItem("Token: ",token));
    console.log("TOKEN:", token);
    setToken(token);
    fetchUserData(token);
  };

  const logout = () => {
    console.log("Logging out...")
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
    console.log("TOKEN:", token);

    // console.log("Token after logout: ",localStorage.getItem("token"));
  };
  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );

};
