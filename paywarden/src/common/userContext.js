import { createContext, useEffect } from "react";
export const UserContext = createContext({});
export const UserProvider = ({ children }) => {
  const userVerification = () =>{
    const token = localStorage.getItem("auth token")
    console.log(token)
  }
  useEffect(()=>{
    userVerification()
  },[])
  return (
    <UserContext.Provider value={{ userVerification}}>
      {children}
    </UserContext.Provider>
  );
};
