import { useState } from "react"
import "./App.css"
import Login from "./components/Login"
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import SignIn from "./components/SignIn";
import Contact from "./components/Contact";
export type user ={
  id:number;
  userName: string;
  passWord: string;
}
function App() {
  
  const [signin , setSignIn] = useState(true);
  const [login , setLogin] = useState(false);
  const [navBar , setNavBar] = useState(false);
  const [home , setHome] = useState(false);
  const [about , setAbout] = useState(false);
  const [contact , setContact] = useState(false);
  const [users , setUsers] = useState<user[]>([]);

  function reset() {
    setAbout(false)
    setHome(false)
    setContact(false)
    setSignIn(false)
    setLogin(false)
  }
  function homeFunction () {
    reset()
    setHome(true);
  }
  
  function aboutFunction () {
    reset()
    setAbout(true)
  }
  function ContactFunction () {
    reset()
    setContact(true)
  }
  function logIn(name:string , password:string) {
    let valid = false;
    const data = localStorage.getItem("users");
    if(data) 
    {
      const Arr = JSON.parse(data);
      setUsers(Arr);
    Arr.map((e:user)=> {
      if(e.userName == name && e.passWord == password)
        valid = true;
    })
  }
    if(valid) {
      setNavBar(true);
      setLogin(false)
    }else {
      return <h1>Error</h1>
    }
  }
  function updateUsers (arr:user[]) {
    setUsers(arr);
  }
  return (
    <>
      {signin ? <SignIn users = {users} update= {updateUsers} login= {setLogin} reset={reset}/>: null  } 
      {navBar ? < NavBar reseet={reset} login={setLogin} HomeFunction ={homeFunction} aboutFunction = {aboutFunction} Contact = {ContactFunction} /> : null}
      {home ? <Home />: null }
      {about ? <About /> : null}
      {contact ? <Contact /> : null}
      {login ? <Login login={logIn}  /> : null}
    </>
  )
}

export default App;