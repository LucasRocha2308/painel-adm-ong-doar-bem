import HeaderPanel from "../../components/HeaderPanel";
import MenuLateral from "../../components/MenuLateral";
import ContentCard from "../../components/ContentCard";
import { AiOutlineDown, AiFillDelete, AiOutlineUserAdd } from 'react-icons/ai';

import './styles.scss'

const AdministrationPanel = () => {
  return (
    <div className="container">
      <HeaderPanel />
      <MenuLateral />
      <ContentCard />
    </div>
  );
};

export default AdministrationPanel;
