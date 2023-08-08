import Link from 'next/link'
import styles from '../designs/login.module.css'

export default function Register() {
  return (
    <div className={styles.base}>
      <div className={styles.body}>

      <Link href="/" style={{textDecoration:"none"}}><h1 className={styles.Title}>Very Good Web App</h1></Link>{' '}
      <h3 className={styles.title}>Register</h3>
      <input placeholder='Username' className={styles.username}/>
      <input placeholder='Password'className={styles.username} />
      <button className={styles.button}>Log In</button>
      </div>
    </div>
  )
}
