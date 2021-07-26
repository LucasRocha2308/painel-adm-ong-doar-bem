import HeaderPanel from "../../components/HeaderPanel";
import MenuLateral from "../../components/MenuLateral";
import BlankTitle from "../../components/BlankTitle";
import ContentCard from "../../components/ContentCard";

import useForm from '../../hook/useForm';
import useRequestData from '../../constants/requered'

import './styles.scss'

const InfoCampaign = () => {

  const [form, onChange, clear] = useForm({
    campaign_name: "", campaign_type: "", campaign_description: "", campaign_status: "",
    campaign_days_left: "", campaign_scores: "", campaign_register: ""
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
      <BlankTitle title="INFORMAÇÃO DA CAMPANHA" user="CAMPANHA SOL" />
      <ContentCard>
        <div className="campaign-options-space">

          <label htmlFor="campaign_name">Organização</label><br></br>
          <input name="campaign_name" type="text" onChange={onChange} value={form.campaign_name} /><br></br>

          <label htmlFor="campaign_type">Tipo de Arrecadação</label><br></br>
          <input name="campaign_type" type="text" onChange={onChange} value={form.campaign_type} /><br></br>

          <label htmlFor="campaign_description">Texto da Campanha</label><br></br>
          <textarea name="campaign_description" onChange={onChange} value={form.campaign_description}
            rows={10}
          /><br></br>

          <label htmlFor="campaign_status">Status</label><br></br>

          <select name="campaign_status" id="state" onChange={onChange} value={form.campaign_status}>
            <option value="AC">Em Andamento</option>
            <option value="AL">Aprovado</option>
            <option value="AP">Recusado</option>
            <option value="AP">Finalizado</option>
          </select>
          <br></br>

          <label htmlFor="campaign_days_left">Dias Restantes</label><br></br>
          <input name="campaign_days_left" onChange={onChange} value={form.campaign_days_left} /><br></br>

          <label htmlFor="campaign_scores">Metas</label><br></br>
          <input name="campaign_scores" onChange={onChange} value={form.campaign_scores} /><br></br>

          <label htmlFor="campaign_register">Data de Cadastro</label><br></br>
          <input name="campaign_register" type="date" onChange={onChange} value={form.campaign_register}
          /><br></br>

          <button onClick={Submit}>Histórico</button>
        </div>
      </ContentCard>
    </div>
  );
};

export default InfoCampaign;
