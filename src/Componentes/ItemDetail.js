import React, { useState } from "react"
import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
    
const onAdd= (cantidad) =>{
    console.log("State upLifting")
    console.log("recibi info dde un hijo")
    console.log(cantidad)
}

 return(
    <div>
        <div>{item.img}</div>
        <h1>{item.titulo}</h1>
        <h3>{item.descripcion}</h3>
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd}></ItemCount>
    </div>
 )
}

export default ItemDetail