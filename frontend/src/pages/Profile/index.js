import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

// Services
import api from '../../services/api'

// Style
import './style.css'
import logoImg from './../../assets/logo.svg';

export default function Profile() {
  const [ongIncidents, setIncidents] = useState([])

  const ongID = localStorage.getItem('ongId')
  const ongName = localStorage.getItem('ongName')

  async function fetchData (name) {
    try {
      const data = await api.get('profile', { 
        headers: {
          Authorization: name
        }
       })
       
      return data
    } catch (error) {
      alert('algum erro aconteceu')
    }
  }

  useEffect( async () => {
    const response = await fetchData(ongID)
    console.log('fetch ong incidents', response.data)


    setIncidents(response.data)

  }, []) 

  return (
    <div className="profile-content">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>{`Bem Vindo ${ongName}`}</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button type="button">
          <FiPower color="#E02041" size={18} />
        </button>
      </header>
      
      <h1>Casos Cadastrados</h1>
      <ul>
        { ongIncidents.map(incident => {
            return (
                <li>
                  <strong>CASO:</strong>
                  <p>{`Caso teste: ${incident.title}`}</p>

                  <strong>DESCRIÇÃO:</strong>
                  <p>{`Descrição teste: ${incident.description}`}</p>

                  <strong>VALOR:</strong>
                  <p>{incident.value}</p>

                  <button type="button" >
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