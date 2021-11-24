import React from 'react'
import {useForm} from 'react-hook-form'

const FormHook = () => {

  const {register,errors,handleSubmit} = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
  <>
  <h1>Formulario</h1>
  <form onSubmit={handleSubmit(onSubmit)}>
    <input
      name="titulo"
      type="text"
      className="form-control my-2"
      {...register("tairol", { required: "Required"})}
    />
      <button className="btn btn-primary">Submit</button>
  </form>
  </>)
}

export default FormHook