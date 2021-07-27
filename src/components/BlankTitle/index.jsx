import React from 'react'
import Card from '../../constants/CardName';

import './blankTitle.scss'

const BlankTitle = () => {
    return (
        <div className="title-space">
            <div className="title-content">
                <h1>TEXTO HEADER EXEMPLO</h1>
                <div>
                    <Card />
                </div>
                <p>NOME DE PERFIL EXEMPLO</p>
            </div>
        </div>
    )
}

export default BlankTitle;