import HeaderPanel from "../../components/HeaderPanel";
import MenuLateral from "../../components/MenuLateral";

// import ContentCard from "../../components/ContentCard";

import FooterPanel from "../../components/FooterPanel";

import { AiOutlineDown, AiFillDelete, AiOutlineUserAdd } from 'react-icons/ai';

import './styles.scss'

const AcquisitionAdministration = () => {
  return (
    <div className="container">
      <HeaderPanel />
      <MenuLateral />

      {/* <ContentCard> */}
      <div className="main-content-space">
        <div className="main-content">
          <h1>Olá mundo AQUISIÇÃO</h1>
          <input type="text" name="search-user" id="search-user" placeholder="Pesquisar Usuário" />
          <div className="users-table">
            <table>
              <tr>
                <th>Nome<AiOutlineDown size={12} className="icon"/></th>
                <th>Função<AiOutlineDown size={12} className="icon"/></th>
                <th>Último Acesso<AiOutlineDown size={12} className="icon"/></th>
                <th><AiOutlineUserAdd size={22} /></th>
              </tr>
              <tr>
                <td>Jill</td>
                <td>Smith</td>
                <td>50</td>
                <td><AiFillDelete size={20} /></td>
              </tr>
              <tr>
                <td>Eve</td>
                <td>Jackson</td>
                <td>94</td>
                <td><AiFillDelete size={20} /></td>
              </tr>
              <tr>
                <td>Eve</td>
                <td>Jackson</td>
                <td>94</td>
                <td><AiFillDelete size={20} /></td>
              </tr>
              <tr>
                <td>Eve</td>
                <td>Jackson</td>
                <td>94</td>
                <td><AiFillDelete size={20} /></td>
              </tr>
              {/* <tr>
                <td>Eve</td>
                <td>Jackson</td>
                <td>94</td>
                <td><AiFillDelete size={20} /></td>
              </tr> */}
            </table>
          </div>
        </div>
      </div>
      {/* </ContentCard> */}
      <FooterPanel/>

    </div>
  );
};

export default AcquisitionAdministration;
