import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/img/logo.svg'
import IMG from '../../assets/img/login.svg'
import '../../assets/sass/onBack/Login.scss'
import Input from '../../components/Admin/Formulario/Input'
import Alerta from '../../components/Admin/Formulario/Alerta'
import Head from '../../helper/Head'
function Login() {

  const mensagem = [
    0,
    "este é um erro de aviso"
  ]

  return (
    <section className="container-form">
      <Head
        title="Minha Conta"
        description="Home do site Dogs, com o feed de fotos."
      />
      <Alerta mensagem={mensagem} />
      <div className="container-data">
        <div className="info">

          <img src={IMG} alt="" />
        </div>

        <div className="form">
          <form id="login" name="login" method="POST">
            <NavLink to="/"><img src={Logo} alt="Mokota - soluções tecnológicas" /></NavLink>
            <p className="texto">Acessa a sua conta</p>
            <Input name="email" type="email" label="E-mail *" placeholder="" />
            <Input name="password" type="password" label="Senha *" placeholder="" />

            <div className="but">
              <NavLink to="/recuperar-senha">Recuperar a senha</NavLink>

              <NavLink className="button" to="/dashboard">Entrar</NavLink>
            </div>
            <footer><p><span>mekadir</span> &copy; {new Date().getFullYear()} - Todos direitos reservados - <span className="block"><NavLink to="/termos"> Termos e Condições</NavLink> | <NavLink to="/privacidade">Privacidade</NavLink></span></p></footer>

          </form>

        </div>

        {/*  */}
      </div>
    </section >

  )
}

export default Login
