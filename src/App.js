import Header from "./Componentes/Header"
import Cart from "./Componentes/CartWidget"
import Btn from "./Componentes/Boton"
import "./estilos.css"
//import ItemListContainer from  "./Componentes/ItemListContainter"
import ItemDetailContainer from "./Componentes/ItemDetailContainer"
import ItemDetail from "./Componentes/ItemDetail"


const App = ()  => {
    
    return(
        <>
            <Header />
            <Cart/>
            {/* <ItemListContainer/> */}
            <ItemDetailContainer/>
            <Btn/>
        </>
    )
}  
export default App
