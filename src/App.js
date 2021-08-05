import Header from "./Header"
import ItmList from "./ItemListContainter"
import Cart from "./CartWidget"
import Btn from "./Boton"
import "./estilos.css"


const App = ()  => {
    
    const textProp="esto es informacion que le mandamos al prop" 
    const nombre = "Mathias"
    return(
        <>
            <Header nombre={nombre} />
            <Cart/>
            <ItmList greeting={textProp}/>
            {textProp}
            <Btn stock="5" inicial="1"/>
        </>
    )
}  
export default App
