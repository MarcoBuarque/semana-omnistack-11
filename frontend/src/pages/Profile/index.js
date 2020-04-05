import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

// Services
import api from '../../services/api'

// Style
import './style.css'
import logoImg from './../../assets/logo.svg';

export default function Profile() {
  const ongName= localStorage.getItem('ongName')

  useEffect( () => {

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
        <li>
          <strong>CASO:</strong>
          <p>Caso teste:</p>

          <strong>DESCRIÇÃO</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>120,00</p>

          <button type="button" >
            <FiTrash2 size={20} color="#a8a83" />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso teste:</p>

          <strong>DESCRIÇÃO</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>120,00</p>

          <button type="button" >
            <FiTrash2 size={20} color="#a8a83" />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso teste:</p>

          <strong>DESCRIÇÃO</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>120,00</p>

          <button type="button" >
            <FiTrash2 size={20} color="#a8a83" />
          </button>
        </li>
      </ul>

    </div>  
  )
}