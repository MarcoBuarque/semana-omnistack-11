import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import './style.css'
import logoImg from './../../assets/logo.svg'

export default function Register() {
  return (
    <div className="div-init">
      <div> 
        <img src={logoImg} alt="Be The Hero"></img>
        <h1>Cadastro</h1>
        <h3>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</h3>
        <Link to="/" className="back-link"> 
          <FiLogIn size={16} color="#E02041" />
          Volte para o login
        </Link>
      </div>
      <div>
        <form>
          <h1>Faça seu login</h1>

          <input placeholder="Nome da ONG"></input>
          <input type="email" placeholder="E-mail"></input>
          <input placeholder="WhatsApp"></input>
          <input placeholder="Cidade"></input>
          <input placeholder="UF"></input>
          <button className="button" type="submit">Entrar</button>
        </form>
      </div>
    </div>
)
} 