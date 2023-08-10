import axios from 'axios'
import { createContext, useEffect } from 'react'
export const UserContext = createContext({})
//My name is danny
//im doing useless stuff just for my git repo
export const UserProvider = ({ children }) => {
  const userVerification = () => {
    const token = localStorage.getItem('auth token')
    console.log(token)
    if(token){
      axios
      .get('http://localhost:1234/verify', {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res.data)
      })
    }
  }
  useEffect(() => {
    userVerification()
  }, [])
  return (
    <UserContext.Provider value={{ userVerification }}>
      {children}
    </UserContext.Provider>
  )
}
