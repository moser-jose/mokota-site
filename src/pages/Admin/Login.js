import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/img/logo.svg'
import IMG from '../../assets/img/login.svg'
import '../../assets/sass/onBack/Login.scss'
import Input from '../../components/Admin/Formulario/Input'
import Alerta from '../../components/Admin/Formulario/Alerta'
import Head from '../../helper/Head'
import { useAuthContext } from '../../contexts/AuthContext'
import useForm from '../../hooks/useForm'

function Login() {
  const email = useForm('', 'E-mail');
  const senha = useForm('senha', 'Senha');

  const { login, error } = useAuthContext();

  async function handleSubmit(event) {
    event.preventDefault();
    if (email.validate() && senha.validate()) {
      login(email.value, senha.value);
      
    }
  }

  return (
    <section className="container-form">
      <Head
        title="Minha Conta"
        description="Acesse a sua conta na plataforma da Mekadir"
      />

      <div className="container-data">
        <div className="info">
          <img src={IMG} alt="" />
        </div>
        <div className="form-cont">
          {error && <Alerta mensagem={error} />}
          <div className="form">
            <form id="login" name="login" method="POST" onSubmit={handleSubmit}   >
              <a href="/"><img src={Logo} alt="Mokota - soluções tecnológicas" /></a>
              <p className="texto">Acessa a sua conta</p>
              <Input type="text" classN={error ? 'error-red' : ''} name="email" placeholder="" label="Usuário ou E-mail *" {...email} ></Input>

              <Input name="senha" type="password" classN={error && error.type === 'senha' ? 'error-red' : ''} placeholder="" label="Senha *" {...senha} />

              <div className="but">
                <NavLink to="/recuperar-senha">Recuperar a senha</NavLink>

                <button className="button">Entrar</button>
              </div>
              <footer><p><span>mekadir</span> &copy; {new Date().getFullYear()} - Todos direitos reservados - <span className="block"><NavLink to="/termos"> Termos e Condições</NavLink> | <NavLink to="/privacidade">Privacidade</NavLink></span></p></footer>

            </form>

          </div>
        </div>
      </div>
    </section >

  )
}

export default Login
