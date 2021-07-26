import React from 'react'
import HeaderPanel from "../../components/HeaderPanel";
import MenuLateral from "../../components/MenuLateral";
import { goToEditPage } from '../../routes/coodination';

import { AiFillEdit } from 'react-icons/ai';

import './styled.scss'
import { useHistory } from 'react-router-dom';



const InformacoesUsuario = () => {
    const history = useHistory()
    const InformacoesUser = localStorage.getItem("userData");
    const userData = JSON.parse(InformacoesUser)

console.log(userData)

    return (

        <div> 
            
            <HeaderPanel/>
            <MenuLateral/>
             <div className="main-content-space">
           
            <div className="main-ifor">
                <button className="button-none" onClick={()=> goToEditPage(history)}>  <AiFillEdit/></button>
                <h2 className="name">Nome: {userData.name}</h2>
                <h2 className="name" >CPF: {userData.cpf}</h2>
                <h2 className="name" >Nascimento: {userData.birth}</h2>
                <h2 className="name" >Endereço: {userData.address}</h2>
                <h2 className="name" >Cidade: {userData.city}</h2>
                <h2 className="name" >Estado: {userData.state}</h2>
                <h2 className="name" >E-mail: {userData.email}</h2>
                <h2 className="name" >Telefone: {userData.fone}</h2>
                <h2 className="name" >Função: {userData.occupation}</h2>
                <h2 className="name" >Registrado em: {userData.register}</h2>
               
            </div>
        </div>
        </div>
        
       
        
    )
        
  }

export default InformacoesUsuario