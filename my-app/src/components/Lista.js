import React, {useState} from 'react'

const Lista = () => {

  const [arrayNumero, setNumero] =useState([1,2,3,4,5,6,7,8])
  return (
    <>
    <h2>Lista</h2>
    {
      arrayNumero.map((item,index) => {
        return <p key={index}>{item} - {index}</p>
      })
    }
    </>
  )
}

export default Lista