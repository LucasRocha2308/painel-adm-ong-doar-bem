import { Link } from 'react-router-dom'
import './MenuLateral.scss'

import usuario from '../../assets/img/usuario.png'
import campanha from '../../assets/img/campanha.png'
import doador from '../../assets/img/doador.png'
import ong from '../../assets/img/ong.png'
import aquisicao from '../../assets/img/aquisicao.png'

const MenuLateral = () => {
    return (
        <>
        <aside class="sidebar">
            <nav >
                <ul>
                    <li>
                        <Link to="/">
                            <div className="content">
                                <img src={usuario} alt="icone de usuario" />
                                <span> Usuário </span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <div className="content">
                                <img src={campanha} alt="icone de campanha" />
                                <span> Campanha </span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <div className="content">
                                <img src={doador} alt="icone de doador" />
                                <span> Doador </span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <div className="content">
                                <img src={ong} alt="icone de ONG" />
                                <span> Ong </span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <div className="content">
                                <img src={aquisicao} alt="icone de aquisição" />
                                <span> Aquisição </span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <div className="content">
                                <img src={aquisicao} alt="icone de suporte" />
                                <span> Suporte </span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
        </>
    )
}

export default MenuLateral