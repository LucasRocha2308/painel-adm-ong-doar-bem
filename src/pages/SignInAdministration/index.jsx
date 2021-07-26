import React from 'react'
import { useHistory } from 'react-router-dom'

import './styles.scss'

const SignInAdministration = ( ) => {

    const history = useHistory()

    const Logar = ({ email, password }) => {
        history.push("/usuario");
    }

    return (
        <div className="container__form">
            <h1>Login</h1>
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