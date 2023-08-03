import Link from "next/link";


export default function Register() {
  
  return (
    <div >
      Login page
      <Link href="/">HOME</Link>

      <br/>
      <input placeholder="username"/>
      <br/>
      <input placeholder="pass" type="password"/>
    </div>
  );
}