import React from 'react'; 
import Saludo from './components/Saludo'
import Comentario from './components/Comentario'

function App() {

  const sujeto ={
    nombre: "Maglon",
    urlImagen: "https://via.placeholder.com/64",
    texto: "lorem ipsum dolor sit amet, consectetur",
  }

  return (
    <>
    <div className="container mt-5">
    <Saludo  persona="David" />
    <Comentario sujeto={sujeto}/>
    <Comentario sujeto={sujeto}/>
    </div>
    </>
  );
}

export default App;
