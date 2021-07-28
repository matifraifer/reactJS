
// 1 Tener react en scope
import React from "react"

//  2 tener REACT_DOM en scope
import ReactDOM from "react-dom"
import  App from "./App.js"



//  4 Renderizar la app UNA UNICA VEZ 
ReactDOM.render(<App/>, document.getElementById('root'))
/*
el primer parametro "a" es la aplicacion que se quiere dibujar
y el parametro "B" es el elemento donde queremos que se dibuje. Solo se pone una vez por aplicacion y al principio.
Aca va toda la aplicacion entera de react.
Se coloca un componente super general, ene l cual dentro del mismo hay otros componentes */
