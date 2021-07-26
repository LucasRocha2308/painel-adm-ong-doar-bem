import HeaderPanel from "../../components/HeaderPanel";
import MenuLateral from "../../components/MenuLateral";
import BlankTitle from "../../components/BlankTitle";
import ContentCard from "../../components/ContentCard";

import useForm from '../../hook/useForm';
import useRequestData from '../../constants/requered'

import './styles.scss'

const InfoONG = () => {

  const [form, onChange, clear] = useForm({
    organization: "", cnpj: "", found_date: "", scope_area: "",
    org_fone: "", org_email: "", org_address: "", org_city: "",
    org_state: "", user_who_made: "", made_date: ""
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
          <label htmlFor="organization">Organização</label><br></br>
          <input name="organization" type="text" onChange={onChange} value={form.organization} /><br></br>

          <label htmlFor="cnpj">CNPJ</label><br></br>
          <input name="cnpj" type="text" onChange={onChange} value={form.cnpj} /><br></br>

          <label htmlFor="found_date">Fundada em</label><br></br>
          <input name="found_date" type="date" onChange={onChange} value={form.found_date}
          /><br></br>

          <label htmlFor="scope_area">Área de Atuação</label><br></br>
          <input name="scope_area" type="text" onChange={onChange} value={form.scope_area} /><br></br>

          <label htmlFor="org_fone">Telefone</label><br></br>
          <input name="org_fone" type="text" onChange={onChange} value={form.org_fone} /><br></br>

          <label htmlFor="org_email">Email</label><br></br>
          <input name="org_email" type="text" onChange={onChange} value={form.org_email} /><br></br>

          <label htmlFor="org_address">Telefone</label><br></br>
          <input name="org_address" type="text" onChange={onChange} value={form.org_address} /><br></br>

          <div className="side-side-input">
            <div>
              <label htmlFor="org_city">Cidade</label><br></br>
              <input name="org_city" type="text" onChange={onChange} value={form.org_city} /><br></br>
            </div>
            <div>
              <label htmlFor="org_state">Estado</label><br></br>

              <select name="org_state" id="state" onChange={onChange} value={form.org_state}>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
                <option value="EX">Estrangeiro</option>
              </select>
            </div>
          </div>

          <label htmlFor="user_who_made">Cadastro feito por</label><br></br>
          <input name="user_who_made" onChange={onChange} value={form.user_who_made} /><br></br>

          <label htmlFor="made_date">Cadastrado Em</label><br></br>
          <input name="made_date" type="date" onChange={onChange} value={form.made_date} /><br></br>

          <button onClick={Submit}>Histórico</button>
        </div>
      </ContentCard>
    </div>
  );
};

export default InfoONG;
