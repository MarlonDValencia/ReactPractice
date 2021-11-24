import React from 'react'
import {useForm} from 'react-hook-form'

const EjemploUno = () => {

  const {register,errors,handleSubmit} = useForm()
  const onSubmit = (data,e) => {
    
  }

  return(
    <>
    <h1>Ejemplo Uno</h1>
    <form onSubmit={handleSubmit}>
      <input
        name="titulo "
        placeholder="Ingrese un titulo"
        className="form-control my-2"
        type="text"
      />
      <input
        name="descripcion"
        placeholder="Ingrese descripcion"
        className="form-control my-2"
        type="text"
      />
      <button className="btn btn-primary">Agregar</button>
    </form>
    </>
  )
}

export default EjemploUno