import { TitleRounded } from '@material-ui/icons';
import React from 'react'
import Card from '../../constants/CardName';

import './blankTitle.scss'

const BlankTitle = ({ title, user }) => {
    return (
        <div className="title-space">
            <div className="title-content">
                <h1>{title}</h1>
                <div>
                    <Card />
                </div>
                <p>{user}</p>
            </div>
        </div>
    )
}

export default BlankTitle;