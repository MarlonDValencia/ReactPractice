import React,{useState} from 'react'

const Contador = () => {
  const [numero, setNumero] = useState(0);
  const aumentar =  () => {
    setNumero(numero+1)
  }
  return(
  <>
    <h3>Contador sin implementar {numero}</h3>
    <button className="btn btn-primary" onClick={aumentar}>Numero +1!</button>
  </>
  );
}

export default Contador;