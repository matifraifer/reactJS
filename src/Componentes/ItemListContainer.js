import ItemList from "./ItemList";
import { prod } from "./productos";
import React, {useEffect, useState} from "react";

/* const operacion = new Promise(() =>{
    setTimeout(() => {
        console.log('hola')
    }, 2000);
}) */

const ItemListContainer = (greeting, nombre) => {
    const [productos,setProductos] = useState([])

    useEffect(()=>{
    
        const promise = new Promise((resolve,reject)=>{
          setTimeout(()=>{
            resolve(productos)
          },2000)
        })
    
        promise.then((productos)=>setProductos(prod))
      
      },[])
    console.log(greeting)

    return(
        <ItemList productos={productos}/>
        )
}
export default ItemListContainer