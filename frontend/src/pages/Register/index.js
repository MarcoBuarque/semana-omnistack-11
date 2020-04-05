import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';
import logoImg from './../../assets/logo.svg';

export default function Register() {
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
 
        <form>
          <h1>Faça seu login</h1>

          <input placeholder="Nome da ONG"></input>
          <input type="email" placeholder="E-mail"></input>
          <input placeholder="WhatsApp"></input>

          <div className="input-group">
            <input placeholder="Cidade"></input>
            <input placeholder="UF" style={{ width: 80 }}></input>

          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
} 