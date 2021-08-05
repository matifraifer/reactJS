import NavBar from "./NavBar"


const Header = ({nombre}) => {

    return(
    <header>
        <h1 >Hola {nombre}!</h1>
        <NavBar/>
    </header>)
    
}
export default Header