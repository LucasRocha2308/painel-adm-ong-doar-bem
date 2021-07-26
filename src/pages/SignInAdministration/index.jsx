import React from 'react'
import { useHistory } from 'react-router-dom'
import logo from '../../assets/img/logo_menu.png'

import './styles.scss'

const SignInAdministration = ( ) => {

    const history = useHistory()

    const Logar = ({ email, password }) => {
        history.push("/usuario");
    }

    return (
        <div className="container__form">
             <img className="logo" src={logo} alt='Logo Doar Bem' />
            <div className="info_header">
                <h1>Login</h1>
               
            </div>

            <div className="form">
                <label htmlFor="">E-mail</label>
                <input type="text" />
                <label htmlFor="">Senha</label>
                <input type="password" />
                <button onClick={Logar}>Entrar</button>
            </div>
        </div>
    )
}

export default SignInAdministration;