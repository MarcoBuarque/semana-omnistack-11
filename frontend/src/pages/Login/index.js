import React, { useState } from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

// Services
import api from '../../services/api'

// Style
import heroesImg from './../../assets/heroes.png'
import logoImg from './../../assets/logo.svg'
import './style.css'

export default function Login(){
  const [id, setIDLogin] = useState('')

  const history = useHistory();

  async function validateLogin (event) {
    event.preventDefault(); //evita que a pagina recarregue appós submeter o form

    try {
      const response = await api.post('session', { id })
      console.log('repsonse login', response)

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      
      history.push('/profile')
    } catch (error) {
      alert(`Falha no Login, tente novamente`)
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero"></img>

        <form onSubmit={validateLogin}>
          <h1>Faça seu login</h1>

          <input
            placeholder="sua ID"
            value={id}
            onChange={event => setIDLogin(event.target.value)}
          />
          <button className="button" type="submit">Entrar</button>

          <Link to="/register" className="back-link"> 
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes"></img>
    </div>
  )
}