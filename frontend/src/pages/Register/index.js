import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

// Services
import api from '../../services/api';

// Style
import './style.css';
import logoImg from './../../assets/logo.svg';

export default function Register() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsApp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister (event) {
    event.preventDefault(); //evita que a pagina recarregue appós submeter o form

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    }

    try {
      const response = await api.post('ongs', data)
      console.log('response register', response)

      alert(`Seu ID de Acesso: ${response.data.id}`)

      history.push('/')
    } catch (error) {
      console.log('error', error)
      alert(`Error: ${error.mensage}`)      
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"></img>
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>
          <Link to="/" className="back-link"> 
            <FiArrowLeft size={16} />
            Volte para o login
          </Link>
        </section> 
 
        <form onSubmit={handleRegister}>
          <h1>Faça seu login</h1>

          <input
            placeholder="Nome da ONG" 
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={event => setWhatsApp(event.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={event => setCity(event.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={event => setUf(event.target.value)}
            />

          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
} 