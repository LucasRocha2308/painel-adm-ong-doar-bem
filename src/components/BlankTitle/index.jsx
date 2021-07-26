import React from 'react'
import fotoUsuario from '../../assets/img/fotoUsuario.png'

import './blankTitle.scss'

const BlankTitle = () => {
    return (
        <div className="title-space">
            <div className="title-content">
                <h1>Texto Exemplo</h1>
                <img src={fotoUsuario} alt="" />
                <p>Nome do Treco</p>
            </div>
        </div>
    )
}

export default BlankTitle;