import HeaderPanel from "../../components/HeaderPanel";
import MenuLateral from "../../components/MenuLateral";
import './styles.scss'

const AdministrationPanel = () => {
  return (
    <div className="container">
      <HeaderPanel />
      <MenuLateral />
    </div>
  );
};

export default AdministrationPanel;
