import React, {useState} from 'react'

const Formulario = () => {

  const[datos,setDatos] = useState(
    {
      nombre: "",
      apellido: "",
    }
  )

  const handleInputChange = (e) => {
    console.log(e.target.value)
    /*Se crea una copia de el valor anterior de los datos con ...datos de esa
    forma no se borrara el estado anterior de la constante datos*/
    setDatos({
      ...datos,
       [e.target.name] : e.target.value
    })
  }

  return (
    <>
  <h1>Formulario</h1>
    <form className="row">
      <div className="col-md-3">

      <input
        onChange={handleInputChange}
        name="nombre"
        type="text"
        className="form-control"
        placeholder="Ingrese su nombre"
        ></input>

      </div>
      <div className="col-md-3">

      <input
      onChange={handleInputChange}
      name="apellido"
      type="text"
      className="form-control"
      placeholder="Ingrese su apellido"
      ></input>

      </div>
      <div className="col-md-3">
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </div>
  </form>

  <p>{datos.nombre} - {datos.apellido}</p>
  </>
  )
}

export default Formulario;