import Item from "./Item"
import React from "react"

const ItemList = ({productos}) => {
    console.log(productos)
    return(
        <ul>
            {productos.map( producto =>{
                return <Item producto = {producto}/>
            })}
        </ul>
    )
}

export default ItemList