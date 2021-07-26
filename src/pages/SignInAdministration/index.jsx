import React from 'react'
import { useHistory } from 'react-router-dom'
import logo from '../../assets/img/logo_menu.png'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAuth } from "../../providers/Auth";
import './styles.scss'

const SignInAdministration = ( ) => {

    const history = useHistory()

   
    const { signIn } = useAuth();
    const schema = yup.object().shape({
        email: yup.string().email("E-mail inválido").required("Campo obrigatório!"),
      password: yup.string().required("Campo obrigatório!"),
    });
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmitFunction = (data) => {
        signIn(data, history);
        console.log(data)
    };


    return (
        <form onSubmit={handleSubmit(onSubmitFunction)} className="container__form">
            <img className="logo" src={logo} alt='Logo Doar Bem' />
            <div className="info_header">
                <h1>Login</h1>
            </div>

            <div className="form">
                <label htmlFor="">E-mail</label>
                <span>{errors?errors.email?.message:""}</span>
                <input type="text"
                {...register("email")}
                error = {!!errors}
                 />
                <label htmlFor="">Senha</label>
                <span>{errors?errors.password?.message:""}</span>
                <input 
                  {...register("password")}
                  error = {!!errors}
                type="password" />
                <button type="submit">Entrar</button>
            </div>
        </form>
    )
}

export default SignInAdministration;