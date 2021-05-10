import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/img/logo.svg'
import IMG from '../../assets/img/login.svg'
import '../../assets/sass/onBack/Login.scss'
import Input from '../../components/Admin/Formulario/Input'
import Alerta from '../../components/Admin/Formulario/Alerta'
import Head from '../../helper/Head'
function RecuperarSenha() {

  const mensagem = [
    0,
    "este é um erro de aviso"
  ]

  return (
    <section className="container-form">
      <Head
        title="Recuperar a senha"
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
            <p className="texto">Recuperar a senha</p>
            <Input name="email" type="email" label="E-mail *" placeholder="" />
            <div className="but">
              <NavLink to="/minha-conta">Possui uma conta? faça o Login</NavLink>

              <NavLink className="button" to="/dashboard">Enviar</NavLink>
            </div>
            <footer><p><span>mekadir</span> &copy; {new Date().getFullYear()} - Todos direitos reservados - <span className="block"><NavLink to="/termos"> Termos e Condições</NavLink> | <NavLink to="/privacidade">Privacidade</NavLink></span></p></footer>

          </form>

        </div>

        {/*  */}
      </div>
    </section >

  )
}

export default RecuperarSenha
