type NavBarProps= {
    HomeFunction: ()=> void
    aboutFunction: ()=> void
    Contact: ()=> void
    login: (x:boolean)=> void
    reseet:() => void
}
export default function NavBar ({aboutFunction , Contact  , HomeFunction , login , reseet}:NavBarProps) {
    return <>
        <nav>
            <h1 className="logo">
                KamelMaher
            </h1>
            <ul>
                <li className="active" onClick={HomeFunction}>Home</li>
                <li onClick={aboutFunction}>About</li>
                <li onClick={Contact}>Contact</li>
                <li onClick={()=> {
                    reseet();
                    login(true)
                }}>LogOut</li>
            </ul>
        </nav>
    </>
}