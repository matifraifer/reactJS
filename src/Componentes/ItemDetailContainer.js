import ItemDetail from "./ItemDetail";
import { prodUnico } from "./unico";
import React, {useEffect, useState} from "react";

const init = {id: 1, titulo: "producto 1", descripcion: "loren ipsun", precio: 100, img: "img", stock: 10}
const ItemDetailContainer = (greeting) => {
    
    const [item,setItem] = useState(false)

    useEffect(()=>{
          setTimeout(()=>{
            Promise
            .resolve(init)
            .then(response =>{
              setItem(response)
            })
          },2000)
      },[])
    console.log(greeting)

    return(
        <>
        <p>Detalle del Item</p>
        <ItemDetail item={item}/>
        </>
        )
}
export default ItemDetailContainer