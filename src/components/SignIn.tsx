import { useState } from "react";
import { user } from "../App"
type SignInProps = {
    users: user[];
    update: (arr:user[])=> void
    login:(x:boolean)=> void
    reset:()=> void
}
export default function SignIn ({users , update , login , reset} : SignInProps) {
    const [name , setName] = useState("");
    const [passWord , setPassWord] = useState("");
    return <>
        <section>
            <h1>Sign In </h1>
            <div className="sign-in">
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
                const user = {id:Math.floor(Math.random() * 1000) , userName: name , passWord : passWord}
                let found = true;
                users.map((e)=> {
                    if(e.userName == name)
                    {
                        found = false
                        return
                    }
                })
                if(found) {
                    const newArr = [user , ...users];
                    update(newArr);
                    console.log(newArr)
                    localStorage.setItem("users" ,JSON.stringify(newArr));
                    reset()
                    login(true)
                }
            }}>Submit</button>
            <button onClick={()=> {
                reset();
                login(true)
            }}>Login</button>
            </div>
        </div>
        </section>
    </>
}