import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { goToInformation } from '../../routes/coodination'
import logo from '../../assets/img/logo_menu.png'
import fotoUsuario from '../../assets/img/fotoUsuario.png'
import { AiOutlineDown, AiOutlineTeam, AiOutlineMessage, AiOutlineLogout } from 'react-icons/ai'

import './headerPanel.scss'

const HeaderPanel = () => {

  const history = useHistory()


  return (
    <header>
      <nav className='header-nav'>
        <Link to='/'>
          <img className="logo" src={logo} alt='Logo Doar Bem' />
        </Link>
        <div className="info__usuario">
          <div className="info__usuario-descricao">
            <span>Maria de Serrão</span>
            <p>Administradora</p>
          </div>

          <img className="usuario" src={fotoUsuario} alt="foto usuario" />

          <div className="dropdown-user">
            <AiOutlineDown size={20} />
            <div className="dropdown-user-content">
             <a><button className="button" onClick={() => goToInformation(history)}> <AiOutlineTeam size={18} className="dropdown-icons" /> Sua Conta</button></a>
              <a href=""> <AiOutlineMessage size={18} className="dropdown-icons" /> Mensagem</a>
              <a href=""> <AiOutlineLogout size={18} className="dropdown-icons" /> Sair</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default HeaderPanel
