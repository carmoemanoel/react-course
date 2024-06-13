import { useState } from 'react'
import './style.css'
import axios from 'axios'

export default function GetCep(){

  const [cep, setCep] = useState(null)

  const [address , setAddress] = useState(null)

  console.log(cep,'cep')
  console.log(address,'address')

  async function handleAddress(){
    try{
      const response = await axios.get(`http:// viacep.com.br/ws/${cep}/json/`);
      setAddress(response.data)
    } catch(error){
      console.log(error)
    }
        
  }

  return(
    <div className='container'>
      <div className="getcep">
      
      <h1 className='title'>Busque seu cep aqui!</h1>

      <input placeholder='Digite seu cep' type="number" name='' id='' className='input' onChange={(e) => setCep(e.target.value)} />

      <button type='button' onClick={handleAddress}>Buscar</button>

    </div>

      {
        address &&
        
        <div>
          <p>Rua: {address.logradouro}</p>
          <p>DDD: {address.ddd}</p>
          <p>Bairro: {address.bairro}</p>
          <p>Cidade:{address.localidade}</p>
        </div>
      }

    </div>
  )
}