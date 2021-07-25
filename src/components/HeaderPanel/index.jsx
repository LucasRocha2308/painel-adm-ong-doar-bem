import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/img/logo_menu.png'
import fotoUsuario from '../../assets/img/fotoUsuario.png'
import { AiOutlineDown } from 'react-icons/ai'

import './headerPanel.scss'

const HeaderPanel = () => {

  return (
    <header>
      <nav className='header-nav'>
        <Link to='/'>
        <img className="logo" src={logo} alt='Logo Doar Bem' />
        </Link>
        <div className="info-usuario">
            <span>Maria de Serrão</span>
            <img className="usuario" src={fotoUsuario} alt="foto usuario" />
            <AiOutlineDown/>
        </div>
      </nav>
    </header>
  )
}

export default HeaderPanel
