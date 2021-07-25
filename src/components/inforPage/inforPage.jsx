import React from 'react';
import HeaderPanel from "../../components/HeaderPanel";
import MenuLateral from "../../components/MenuLateral";
import './styled.scss'

const information = () => {
    return (
        <div>
            <HeaderPanel/>
            <MenuLateral/>

            <div className="main-content-space" >
                <div className="main-content">
                     <h1>Informações da conta</h1>
                </div>
            </div>
        </div>
    )
}

export default information;