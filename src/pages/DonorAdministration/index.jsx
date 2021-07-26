import HeaderPanel from "../../components/HeaderPanel";
import MenuLateral from "../../components/MenuLateral";
// import ContentCard from "../../components/ContentCard";
import FooterPanel from "../../components/FooterPanel";
import { AiOutlineDown, AiFillDelete, AiOutlineUserAdd } from 'react-icons/ai';
import { goToCadastro } from "../../routes/coodination";
import './styles.scss'
import { useHistory } from "react-router-dom";

const DonorAdministration = () => {
  const history = useHistory()
  return (
    <div className="container">
      <HeaderPanel />
      <MenuLateral />

      {/* <ContentCard> */}
      <div className="main-content-space">
        <div className="main-content">
          <h1>Administração de Doadores</h1>
          <input type="text" name="search-user" id="search-user" placeholder="Pesquisar Usuário" />
          <div className="users-table">
            <table>
              <tr>
                <th>Nome<AiOutlineDown size={12} className="icon"/></th>
                <th>Campanha<AiOutlineDown size={12} className="icon"/></th>
                <th>Última doação<AiOutlineDown size={12} className="icon"/></th>
                <th><button className="button-page " onClick={() => goToCadastro(history)} ><AiOutlineUserAdd size={22} /></button></th>
              </tr>
              <tr>
                <td>Alexandre Souza</td>
                <td>Campanha Sol</td>
                <td>01/01/2001 às 15h32</td>
                <td><AiFillDelete size={20} /></td>
              </tr>
              <tr>
                <td>Bruno Souza</td>
                <td>Campanha de Sucesso</td>
                <td>09/05/2021 às 23h40</td>
                <td><AiFillDelete size={20} /></td>
              </tr>
              <tr>
                <td>Alexandre Souza</td>
                <td>Campanha Sol</td>
                <td>09/05/2021 às 23h40</td>
                <td><AiFillDelete size={20} /></td>
              </tr>
              <tr>
                <td>Bruno Souza</td>
                <td>Campanha de Sucesso</td>
                <td>09/05/2021 às 23h40</td>
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

export default DonorAdministration;
