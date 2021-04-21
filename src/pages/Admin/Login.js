import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../../assets/img/logo.svg'
import IMG from '../../assets/img/login.svg'
import '../../assets/sass/onBack/Login.scss'
import Input from '../../components/Admin/Formulario/Input'
import Button from '../../components/Admin/Formulario/Button'
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
          {/* <div className="info-per">
            <p>Ainda não possui uma conta? <Link className="link" to="/">Regista-se</Link> agora e tenha acesso a todos os materiais do curso desejado. Saiba como funciona a nossa plataforma e esteja por dentro das novidades dos nossos cursos.</p>
            <span><FontAwesomeIcon className="icon" icon="layer-group" /> Cursos dedicados</span>
            <span><FontAwesomeIcon className="icon" icon="certificate" /> Certificado Garantido</span>
            <span><FontAwesomeIcon className="icon" icon="code" /> Domine a programação</span>
            <span><FontAwesomeIcon className="icon" icon="laptop-code" /> Crie projetos reais</span>
          </div> */}

          <img src={IMG} alt="" />
        </div>

        <div className="form">
          <form id="login" name="login" method="POST">
            <Link to="/"><img src={Logo} alt="Mokota - soluções tecnológicas" /></Link>
            <p className="texto">Acessa a sua conta</p>
            <Input name="email" type="email" label="E-mail *" placeholder="" />
            <Input name="password" type="password" label="Senha *" placeholder="" />

            <div className="but">
              <Link to="/">Recuperar a senha</Link>

              <Link className="button" to="/dashboard">Entrar</Link>
            </div>
            <footer><p><span>moskotas</span> &copy; {new Date().getFullYear()} - Todos direitos reservados - <span className="block"><Link to="/termos"> Termos e Condições</Link> | <Link to="/privacidade">Privacidade</Link></span></p></footer>

          </form>

        </div>

        {/*  */}
      </div>
    </section >

  )
}

export default Login
