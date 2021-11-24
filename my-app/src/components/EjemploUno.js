import React, {useState} from 'react';
import { useForm } from 'react-hook-form';

const EjemploUno = () => {

  const {register, formState: { errors }, handleSubmit} = useForm();

  const [entradas, setEntradas] = useState([])

  const onSubmit = (data,e) => {
    console.log(data)
    setEntradas([
      ...entradas,
      data
    ])

    e.target.reset()
  }

  return(
    <>
    <h1>Ejemplo #1</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="titulo"
        placeholder="Ingrese un titulo"
        className="form-control my-2"
        type="text"
        
        {...register("titulo", {
          required: true,
          minLength:2,
          message: "Campo obligatorio"
        })}
      /> 
      <input
        name="descripcion"
        placeholder="Ingrese descripcion"
        className="form-control my-2"
        type="text"

        {...register("descripcion", {
          required: "Required",
          minLength:2,
          message: "Campo obligatorio"
        })}
      />

      <button className="btn btn-primary">Agregar</button>
    </form>
    <ul>
      {
      entradas.map((item)=>{
        return <li>{item.titulo}-{item.descripcion}</li>
      })
    }
    </ul>
    </>
  )
}

export default EjemploUno