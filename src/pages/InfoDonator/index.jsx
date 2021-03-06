import HeaderPanel from "../../components/HeaderPanel";
import MenuLateral from "../../components/MenuLateral";
import BlankTitle from "../../components/BlankTitle";
import ContentCard from "../../components/ContentCard";

import useForm from '../../hook/useForm';
import useRequestData from '../../constants/requered'

import './styles.scss'

const InfoDonator = () => {

  const [form, onChange, clear] = useForm({
    donator_name: "", donator_cpf: "", donator_fone: "", donator_email: "",
    donator_city: "", donator_state: "", partner: "",
    qty_donated_items: "", donated_items_date: ""
  })

  const Submit = () => {
    useRequestData(form)
    console.log(form)
    clear()
  }

  return (
    <div >
      <HeaderPanel />
      <MenuLateral />
      <BlankTitle />
      <ContentCard>
        <div className="campaign-options-space">

          <label htmlFor="donator_name">Nome</label><br></br>
          <input name="donator_name" type="text" onChange={onChange} value={form.donator_name} /><br></br>

          <label htmlFor="donator_cpf">CPF</label><br></br>
          <input name="donator_cpf" type="text" onChange={onChange} value={form.donator_cpf} /><br></br>

          <label htmlFor="donator_fone">Telefone</label><br></br>
          <input name="donator_fone" type="text" onChange={onChange} value={form.donator_fone} /><br></br>

          <label htmlFor="donator_email">Email</label><br></br>
          <input name="donator_email" type="email" onChange={onChange} value={form.donator_email} /><br></br>

          <div className="side-side-input">
            <div>
              <label htmlFor="donator_city">Cidade</label><br></br>
              <input name="donator_city" type="text" onChange={onChange} value={form.donator_city} /><br></br>
            </div>
            <div>
              <label htmlFor="donator_state">Estado</label><br></br>

              <select name="donator_state" id="state" onChange={onChange} value={form.donator_state}>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amap??</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Cear??</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Esp??rito Santo</option>
                <option value="GO">Goi??s</option>
                <option value="MA">Maranh??o</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Par??</option>
                <option value="PB">Para??ba</option>
                <option value="PR">Paran??</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piau??</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rond??nia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">S??o Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
                <option value="EX">Estrangeiro</option>
              </select>
            </div>
          </div>

          <label htmlFor="partner">Campanha Apoiada</label><br></br>
          <input name="partner" type="email" onChange={onChange} value={form.partner} /><br></br>

          <label htmlFor="qty_donated_items">Qtd. Items Doados</label><br></br>
          <input name="qty_donated_items" onChange={onChange} value={form.qty_donated_items} /><br></br>

          <label htmlFor="donated_items_date">Data de Doa????o</label><br></br>
          <input name="donated_items_date" type="date" onChange={onChange} value={form.donated_items_date} /><br></br>

          <button onClick={Submit}>Hist??rico</button>
        </div>
      </ContentCard>
    </div>
  );
};

export default InfoDonator;
