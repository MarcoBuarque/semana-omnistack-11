import React from 'react'
import { FiLogIn } from 'react-icons/fi'

import heroesImg from './../../assets/heroes.png'
import logoImg from './../../assets/logo.svg'
import './style.css'

export default function Login(){
  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero"></img>

        <form>
          <h1>Faça seu login</h1>

          <input placeholder="sua ID"></input>
          <button className="button" type="submit">Entrar</button>

          <a href="/register"> 
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </a>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes"></img>
    </div>
  )
}