import Header from "./Componentes/Header"
import Cart from "./Componentes/CartWidget"
import "./estilos.css"
import ItemListContainer from  "./Componentes/ItemListContainer"
import ItemDetailContainer from "./Componentes/ItemDetailContainer"
import ItemDetail from "./Componentes/ItemDetail"
import ItemCount from "./Componentes/ItemCount"

const App = ()  => {
    
    return(
        <>
            <Header />
            <Cart/>
            {/* <ItemListContainer/> */}
            <ItemDetailContainer/>
            {/* <ItemCount/> */}
        </>
    )
}  
export default App
