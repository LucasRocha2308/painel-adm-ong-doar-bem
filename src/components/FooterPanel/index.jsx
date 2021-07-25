/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { Link } from 'react-router-dom'

import './footerPanel.scss'

import tech4covid19Br from '../../assets/img/tech4.png'
import atados from '../../assets/img/atados.png'
import facebook from '../../assets/img/facebook.png'
import instagram from '../../assets/img/instagram.png'
import linkedIn from '../../assets/img/linkedin.png'

const FooterPanel = ()=> (
  <footer>
    <div className='mainSection'>
      <div className='wrapper'>
        <div className='column'>
          <p className='titles'>Ajuda</p>
          <p>
            <Link to='/faq' className='items'>Perguntas Frequentes</Link>
          </p>
          <p>
            <Link to='/termos' className='items'>Termos e Condições</Link>
          </p>
          <p>
            <Link to='/contato' className='items'>Fale Conosco</Link>
          </p>
        </div>
        <div className='column'>
          <p className='titles'>Contato</p>
          <p>
            <a href="mailto:doarbem@hotmail.com">doarbem@hotmail.com</a>
          </p>
          <p>
            <Link to='/sobre'>Quem Somos</Link>
          </p>
        </div>
        <div className='column'>
          <p className='titles'>Apoio</p>
          <a href="https://tech4covid19.org" target="_blank"><img className='logo-backers margin-logo' src={tech4covid19Br} alt="Logo-arte da Tech4covid19Br"/></a>          
          <a href="https://www.atados.com.br" target="_blank"><img className='logo-backers' src={atados} alt="Logo-arte da Atados"/></a>
        </div>
        <div className='column'>
          <p className='titles'>Redes Sociais</p>
          <a href="https://www.facebook.com/DoarBem-111930133986791/">
            <img className='logo-social-media margin-logo' src={facebook} alt="Ícone com link para o perfil do Facebook"/>
          </a>
          <a href="https://www.instagram.com/doar_bem/">
            <img className='logo-social-media margin-logo' src={instagram} alt="Ícone com link para o perfil do Instagram"/>
            </a>
          <a href="https://www.linkedin.com/in/projeto-doar-bem">
            <img className='logo-social-media' src={linkedIn} alt="Ícone com link para o perfil do LinkedIn"/>
          </a>
        </div>
      </div>
      <div className='copyright'>
        <p>Doar Faz Bem <span>| 2020 - Direitos reservados.</span></p>
      </div>
    </div>

  </footer>
)

export default FooterPanel
