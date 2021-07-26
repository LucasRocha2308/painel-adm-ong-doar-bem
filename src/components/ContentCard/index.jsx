import React from 'react'

import './ContentCard.scss'

const ContentCard = ( {children}) => {
    return (
        <div className="main-content-space">
            <div className="main-content">
               {children}
            </div>
        </div>
    )
}

export default ContentCard;