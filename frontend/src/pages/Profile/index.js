import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

// Services
import api from '../../services/api'

// Style
import './style.css'
import logoImg from './../../assets/logo.svg';

export default function Profile() {
  
  const [ongIncidents, setOngIncidents] = useState([]);

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  async function fetchData(ongId) {
    try {
      const data = await api.get('profile', { 
        headers: {
          Authorization: ongId
        }
       })
       
      return data
    } catch (error) {
      alert('algum erro aconteceu')
    }
  }

  async function handleDeleteIncident(id) {
    console.log('idddd ', id, ongId)
    try {
      const response = await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      console.log('response delete incident', response);
      setOngIncidents(ongIncidents.filter(incident => incident.id !== id));

      //alert('Incidente deletado com sucesso!');
    } catch (error) {
      alert('Erro ao deletar incidente, tente novamente', error);
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  useEffect( async () => {
    const response = await fetchData(ongId);
    console.log('fetch ong incidents', response.data);


    setOngIncidents(response.data);

  }, [ongId]) 

  return (
    <div className="profile-content">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>{`Bem Vindo ${ongName}`}</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button type="button" onClick={handleLogout}>
          <FiPower color="#E02041" size={18} />
        </button>
      </header>
      
      <h1>Casos Cadastrados</h1>
      <ul>
        { ongIncidents.map(incident => {
            return (
                <li key={incident.id}>
                  <strong>CASO:</strong>
                  <p>{`Caso teste: ${incident.title}`}</p>

                  <strong>DESCRIÇÃO:</strong>
                  <p>{`Descrição teste: ${incident.description}`}</p>

                  <strong>VALOR:</strong>
                  <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                  <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                    <FiTrash2 size={20} color="#a8a83" />
                  </button>
                </li>
            )
          })
        }
      </ul>
    </div>  
  )
}