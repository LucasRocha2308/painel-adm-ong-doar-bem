import React from 'react'
import Card from '../../constants/CardName';

import './blankTitle.scss'

const BlankTitle = () => {
    return (
        <div className="title-space">
            <div className="title-content">
                <h1>Texto Exemplo</h1>
                <div>
                    <Card />
                </div>
                <p>Nome do Treco</p>
            </div>
        </div>
    )
}

export default BlankTitle;