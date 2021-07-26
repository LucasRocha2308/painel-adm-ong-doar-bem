import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import logo from '../../assets/img/logo_menu.png'
import fotoUsuario from '../../assets/img/fotoUsuario.png'
import { AiOutlineDown, AiOutlineTeam, AiOutlineMessage, AiOutlineLogout } from 'react-icons/ai'

import './headerPanel.scss'
import { useAuth } from '../../providers/Auth'

const HeaderPanel = () => {
const history = useHistory()
const { logout } = useAuth()

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
              <a href="."> <AiOutlineTeam size={18} className="dropdown-icons" /> Sua Conta</a>
              <a href="."> <AiOutlineMessage size={18} className="dropdown-icons" /> Mensagem</a>
              <button className="button-page "  onClick={() => logout(history)}> <AiOutlineLogout size={18} className="dropdown-icons" /> Sair</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default HeaderPanel
