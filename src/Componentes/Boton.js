import { useState } from "react"

const Btn = () =>{



    const [contador, setContador] = useState(0)
    const sumarContador = () =>{
        setContador(contador + 1)
    }
    const restarContador = () =>{
        setContador(contador - 1)
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
            </div>
        </>
    )
}

export default Btn