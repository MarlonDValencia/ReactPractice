import React from 'react'
import Avatar from './Avatar'

const Comentario = (props) => {
  return(
    <>
      <h1>Comentarios</h1>
      <hr />
      <div className="media">
        <Avatar urlImagen={props.sujeto.urlImagen}/>
        <div className="media-body">
          <h5 className="mt-0">{}</h5>
          {props.sujeto.texto}
        </div>
      </div>
    </>
  )
}

export default Comentario