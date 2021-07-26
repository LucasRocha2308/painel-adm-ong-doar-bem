/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hook/useForm';
import Card from '../../constants/CardName';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from "@material-ui/core/Button";
import './styled.scss'
import useRequestData from '../../constants/requered'

const Information = () => {

    const [form, onChange, clear ] = useForm({name: "", cpf: "", birth:"", fone:"",
    address:"", city:"", state:"", email:"", 
    occupation:"", register:""})

    const submit = () => {
        useRequestData(form)
        clear()
    }

    console.log(form)
    
    return (
        <div>

            <div className="main-content-space" >
                <div className="main-content">
                     <h1>Informações da conta</h1>
                </div>

                <div>
                    <Card/>
                </div>

                <div className="main-ifor">
                    <form className="form-estilizado">

                       <div className="cards-input">
                        <TextField
                            name={"name"}
                            onChange={onChange}
                            value={form.name}
                            placeholder={"Nome"}
                            variant="filled"
                            required
                            label="Nome Completo"
                        />
                        </div>
                        
                        <div  className="cards-input">

                            
                            <TextField
                            className="input-fone"
                            value={form.cpf}
                            onChange={onChange}
                            variant="filled"
                            name={"cpf"}
                            placeholder={"CPF"}
                            label="CPF"
                            required
                            />
                            
                        </div>

                        <div  className="cards-input">
                            <TextField
                                type="date"
                                value={form.birth}
                                onChange={onChange}
                                name={"birth"}
                                variant="filled"
                                label="Nascimento"
                                required
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </div>

                        <div  className="cards-input">

                            <TextField mask="(99)99999-9999"
                            label="Telefone"
                            value={form.fone}
                            onChange={onChange}
                            name={"fone"}
                            required
                            variant="filled"

                            />
                        </div>
                    
                        <div  className="cards-input">
                                <TextField
                                label="Endereço"
                                value={form.address}
                                onChange={onChange}
                                name={"address"}
                                variant="filled"
                                required
                                
                                />
                        </div>
                    
                        <div  className="cards-input">
                            <TextField
                            label="Cidade"
                                value={form.city}
                                onChange={onChange}
                                name={"city"}
                                required
                                variant="filled"
                                
                            />
                        </div>

                        <div className="cards-input">

                            <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                            <Select id="state" required name="state" value={form.state} onChange={onChange}>
                                <option></option>
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
                            </Select>
                    
                        </div>
                    
                    
                        <div  className="cards-input">
                            <TextField
                                type={"email"}
                                label="E-mail"
                                name={"email"}
                                value={form.email}
                                onChange={onChange}
                                variant="filled"
                                required
                                
                            />
                        </div>
                        
                        <div  className="cards-input">

                            <InputLabel id="demo-simple-select-label">Função</InputLabel>
                            <Select required name={"occupation"} value={form.occupation} onChange={onChange}>
                                <option ></option>
                                <option value="Administração">Administrção</option>
                                <option value="Auditoria">Auditoria</option>
                                <option value="Aquisição">Aquisição</option>
                                <option value="Suporte">Suporte</option>
                            </Select>
                        </div>

                        <div className="cards-input">
                            <TextField
                                
                                type="date"
                                value={form.register}
                                onChange={onChange}
                                name={"register"}
                                variant="filled"
                                label="Cadastro"
                                required
                                InputLabelProps={{
                                shrink: true,
                                }}
                            
                            />
                        </div>
                        
                        
                        
                        <Button className="button"
                        onClick={submit}
                        variant="contained"
                        color="primary"
                        >Cadastrar</Button>
                   </form>
                </div>
            </div>

            
        </div>
    )
}

export default Information;