import { useState } from "react"

type LoginProps = {
    login: (name:string , password:string)=> void
} 
export default function Login ({login}:LoginProps) {
    const [name , setName] = useState("");
    const [passWord , setPassWord] = useState("");
    return <>
        <section className="log-in">
            <h1>Log In </h1>
            <div>
                <input type="text" placeholder="name" onChange={(e)=> {
                setName(e.target.value);
            }}/><br />
            <br />
            <input type="text" placeholder="Password" onChange={(e)=> {
                setPassWord(e.target.value);
            }}/><br />
            <br />
            <button className="submit" onClick={()=> {
                login(name , passWord);
            }}>Submit</button>
            </div>
        </section>
    </>
}