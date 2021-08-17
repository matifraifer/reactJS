import ItemDetail from "./ItemDetail";
import { prodUnico } from "./unico";
import React, {useEffect, useState} from "react";


const ItemDetailContainer = (greeting) => {
    const [unico,setUnico] = useState([])

    useEffect(()=>{
    
        const promise = new Promise((resolve,reject)=>{
          setTimeout(()=>{
            resolve(unico)
          },2000)
        })
    
        promise.then((unico)=>setUnico(prodUnico))
      
      },[])
    console.log(greeting)

    return(
        <ItemDetail/>
        )
}
export default ItemDetailContainer