import Link from 'next/link'
import styles from '../designs/login.module.css'
import { useState } from 'react'
import axios from "axios"

export default function Register() {
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  const [vis,setVis] = useState(false)
  const Login = () => {
    console.log('jjj')
    axios
    .post("http://localhost:1234/login", {name:name,password:pass})
    .then((res) => {
      console.log(res.data)
      localStorage.setItem("auth token",res.data)
    })
    .catch((err) => {
      console.log("got err")
    });
  }
  return (
    <div className={styles.base}>
      <div className={styles.body}>

      <Link href="/" style={{textDecoration:"none"}}><h1 className={styles.Title}>Very Good Web App</h1></Link>{' '}
      <h3 className={styles.title}>Register</h3>
      <input placeholder='Username' className={styles.username} onChange={(e)=> setName(e.target.value)}/>
      <input type={!vis?'password': "text"} placeholder='Password'className={styles.username} onChange={(e)=> setPass(e.target.value)} />
      <button className={styles.button} onClick={()=> Login()}>Log In</button>
      <h2 className={styles.eyeshit} onClick={()=> setVis(!vis)}>👁</h2>
      </div>
    </div>
  )
}
