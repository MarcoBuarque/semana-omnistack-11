import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

// Services
import api from '../../services/api'

// Layout
import './style.css';
import logoImg from './../../assets/logo.svg';


export default function NewIncident() {
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident (event) {
    event.preventDefault(); //evita que a pagina recarregue appós submeter o form

    const data = {
      title,
      description,
      value
    };

    try {
      const response = await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      });
      console.log('response register', response);


      history.push('/profile');
    } catch (error) {
      console.log('error', error);
      alert('Erro ao cadastrar caso, tente novamente.');
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"></img>
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso</p>
          <Link to="/profile" className="back-link"> 
            <FiArrowLeft size={16} />
            Voltar para home
          </Link>
        </section> 
 
        <form onSubmit={handleNewIncident}>
          <h1>Faça seu login</h1>

          <input
            placeholder="Titulo do caso"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={event => setDescription(event.target.value)}
          />

          <input
            placeholder="Valor em reais"
            value={value}
            onChange={event => setValue(event.target.value)}
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>    
  )
}