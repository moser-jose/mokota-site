import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { Link as Linka } from 'react-router-dom'
import Logo from '../../assets/img/logo.svg'
import LogoBranco from '../../assets/img/logo_branco.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuthContext } from '../../contexts/AuthContext';
import Moser from '../../assets/img/moser.jpg'
function Header() {
    const { autenticado, userOn, logout } = useAuthContext();
    const [menu, setMenu] = useState(false);
    const [faq, setFaq] = useState(false);

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleClick = () => {
        setMenu(!menu);
        if (!menu) {
            document.querySelector('body').classList.add('body');
        }
        else {
            document.querySelector('body').classList.remove('body');
        }
    }
    const handleClickBody = () => {
        setMenu(!menu);
        setFaq(!faq);
        document.querySelector('body').classList.remove('body');
    }
    const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
    }
    useEffect(() => {

        window.addEventListener('scroll', handleScroll, { passive: true });
        setScrollPosition(window.pageYOffset);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [scrollPosition]);
    return (
        <div className={scrollPosition > 70 ? 'header header-scroll' : 'header'}>
            <div className="pre-header">
                <div className="container">
                    <div className="info">
                        <p className="telefone">
                            <FontAwesomeIcon icon="phone-alt" /> +(244) 923819414 | +(244) 931000000
                        </p>
                        <p className="email"><FontAwesomeIcon icon="envelope" /> geral@moskotas.com</p>
                        <p className="endereco"><FontAwesomeIcon icon="map-marker-alt" /> Rua Governador Calheiro n&ordm; 45
                            Cidade Alta, Huambo, Angola
                        </p>
                    </div>
                </div>
            </div>
            <div className="container menu">
                <div className="logoprincipal">
                    <a href="/"><img src={scrollPosition > 70 ?
                        Logo :
                        menu === true ? Logo
                            : LogoBranco
                    } alt="" /></a><div onClick={handleClick} className={menu === true ? "bar change" : "bar"}>
                        <span id={menu === false ? "bar1" : "bar11"}></span>
                        <span id="bar2"></span>
                        <span id={menu === false ? "bar3" : "bar33"}></span>
                    </div>
                </div>
                <div className={menu === true ? " menu-nav menu-nav-dis" : "menu-nav"}>
                    <ul className="nav-cur">
                        <li ><a className="link" href="/">Home</a></li>
                        <li ><Linka className="link" to="/cursos/certificados">Certificados</Linka></li>
                        <li ><Link onClick={handleClickBody} className="link" duration={1000} smooth={true} to="faq">FAQ</Link></li>
                        <div id="animacao" className={faq === true ? "animacao s-faq" : "animacao s-curso"}>

                        </div>
                    </ul>
                    {autenticado ?
                        <span onClick={handleClickBody} className={scrollPosition > 70 ? "btn-azul" : "btn-branco"}>
                            {userOn && userOn.nome + ' ' + userOn.sobre_nome}
                            <img src={Moser} alt=""></img>
                            <div className="opcoes">
                                <ul>
                                    <li><Linka to="/dashboard"><FontAwesomeIcon className="icon" icon="tachometer-alt" /> Dashboard</Linka></li>
                                    <li><a href="/"><FontAwesomeIcon className="icon" icon="layer-group" /> Meus Cursos</a></li>
                                    <li><a href="/"><FontAwesomeIcon className="icon" icon="user-circle" /> Minha Conta</a></li>
                                    <li onClick={logout}><span><FontAwesomeIcon className="icon" icon="sign-out-alt" /> Sair</span></li>
                                </ul>
                            </div>
                        </span>
                        :
                        <Linka to="/minha-conta" onClick={handleClickBody} className={scrollPosition > 70 ? "btn-azul" : "btn-branco"}>Entrar</Linka>}
                    <p><span>mekadir</span> &copy; {new Date().getFullYear()} - Todos direitos reservados -
                    <span className="block"><Linka onClick={handleClickBody} to="/termos"> Termos e Condições</Linka> | <Linka onClick={handleClickBody} to="/privacidade">Privacidade</Linka></span></p>
                </div>
            </div>
        </div >
    )
}

export default Header
