import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) =>{



    const [contador, setContador] = useState(0)
    const sumarContador = () =>{
        setContador(contador + 1)
    }
    const restarContador = () =>{
        setContador(contador - 1)
    }
    const confirmar = () => {
        onAdd(contador)
    }



    return(
        <>
            <div>
                <div className="cont">{contador}</div>
                <button className="boton" onClick={sumarContador}>
                    Sumar
                </button>
                <button className="boton" onClick={restarContador}>
                    Restar
                </button>
                <button className="boton" onClick={confirmar}>
                    confirmar
                </button>
            </div>
        </>
    )
}

export default ItemCount