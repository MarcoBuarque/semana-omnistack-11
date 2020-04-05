import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';
import logoImg from './../../assets/logo.svg';


export default function NewIncident() {
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
 
        <form>
          <h1>Faça seu login</h1>

          <input placeholder="Titulo do caso"></input>
          <textarea placeholder="Descrição"></textarea>

          <input placeholder="Valor em reais"></input>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>    
  )
}