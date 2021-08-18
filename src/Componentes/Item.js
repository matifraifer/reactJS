import React from "react"
import "../estilos.css"



const Item = ({producto}) => {
   

    return(
       <ul>
           <div className="imagenProdu">{producto.img}</div>
           <div>{producto.titulo}</div>
           <div>{producto.descripcion}</div>
           
       </ul>
    )
}

export default Item