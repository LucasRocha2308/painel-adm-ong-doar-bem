import HeaderPanel from "../../components/HeaderPanel";
import MenuLateral from "../../components/MenuLateral";
import BlankTitle from "../../components/BlankTitle";
import ContentCard from "../../components/ContentCard";

import useForm from '../../hook/useForm';
import useRequestData from '../../constants/requered'

import './styles.scss'

const InfoAccount = () => {

  const [form, onChange, clear] = useForm({
    name: "", cpf: "", birth: "", fone: "",
    address: "", city: "", state: "", email: "",
    occupation: "", register: ""
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
          <label htmlFor="name">Nome</label><br></br>
          <input name="name" type="text" onChange={onChange} value={form.name} /><br></br>

          <label htmlFor="cpf">CPF</label><br></br>
          <input name="cpf" type="text" onChange={onChange} value={form.cpf} /><br></br>

          <label htmlFor="birth">Nascimento</label><br></br>
          <input name="birth" type="date" onChange={onChange} value={form.birth}
          /><br></br>

          <label htmlFor="fone">Telefone</label><br></br>
          <input name="fone" type="text" onChange={onChange} value={form.fone} /><br></br>

          <label htmlFor="address">Endereço</label><br></br>
          <input name="address" type="text" onChange={onChange} value={form.address} /><br></br>

          <div className="side-side-input">
            <div>
              <label htmlFor="city">Cidade</label><br></br>
              <input name="city" type="text" onChange={onChange} value={form.city} /><br></br>
            </div>
            <div>
              <label htmlFor="state">Estado</label><br></br>

              <select name="state" id="state" onChange={onChange} value={form.state}>
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

          <label htmlFor="email">E-mail</label><br></br>
          <input name="email" type="email" onChange={onChange} value={form.email} /><br></br>

          <div className="side-side-input">
            <div>
              <label htmlFor="occupation">Função</label><br></br>

              <select name="occupation" id="funcoes" onChange={onChange} value={form.occupation}>
                <option value="ADM">Administração</option>
                <option value="AUD">Auditoria</option>
                <option value="AQU">Aquisição</option>
                <option value="SUP">Suporte</option>
              </select>
            </div>

            <div>
              <label htmlFor="register">Cadastrado Em</label><br></br>
              <input name="register" type="date" onChange={onChange} value={form.register} /><br></br>
            </div>
          </div>
          <button onClick={Submit}>Histórico</button>
        </div>
      </ContentCard>
    </div>
  );
};

export default InfoAccount;
