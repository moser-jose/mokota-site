import React, { useEffect, useState, useCallback } from 'react'
import {
    Link
} from 'react-scroll'
import { Link as Linka } from 'react-router-dom'
import LogoBranco from '../../assets/img/logo_branco.svg'
import Logo from '../../assets/img/logo.svg'
import Moser from '../../assets/img/moser.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAllContext } from '../../contexts/AllContexts'
import { useAuthContext } from '../../contexts/AuthContext';

function Header() {
    const { autenticado, userOn, logout } = useAuthContext();


    const { menu, setMenu, sobre, setSobre, servicos, setServicos, portfolio, setPortfolio, contacto, setContacto } = useAllContext();
    const clickSobre = () => {
        setSobre(true)
        setServicos(false)
        setPortfolio(false)
        setContacto(false)
        setMenu(!menu);
        document.querySelector('body').classList.remove('body');
    }
    const clickServicos = () => {
        setSobre(false)
        setServicos(true)
        setPortfolio(false)
        setContacto(false)
        setMenu(!menu);
        document.querySelector('body').classList.remove('body');
    }
    const clickPortfolio = () => {
        setSobre(false)
        setServicos(false)
        setPortfolio(true)
        setContacto(false)
        setMenu(!menu);
        document.querySelector('body').classList.remove('body');
    }
    const clickContacto = () => {

        setSobre(false)
        setServicos(false)
        setPortfolio(false)

        setContacto(true)
        setMenu(!menu);
        document.querySelector('body').classList.remove('body');
    }
    const handleClick = () => {
        setMenu(!menu);
        if (!menu) {
            document.querySelector('body').classList.add('body');
        }
        else {
            document.querySelector('body').classList.remove('body');
        }
        console.log(menu)
    }
    const handleClickBody = () => {
        setMenu(!menu);
        document.querySelector('body').classList.remove('body');
    }

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll =
        () => {
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
                        <p className="email"><FontAwesomeIcon icon="envelope" /> geral@mekadir.com</p>
                        <p className="endereco"><FontAwesomeIcon icon="map-marker-alt" /> Rua Governador Calheiro n&ordm; 45
                            Cidade Alta, Huambo, Angola
                        </p>
                    </div>
                </div>
            </div>
            <div className="container menu">
                <div className="logoprincipal">
                    <a href="/"><img src={scrollPosition > 70 ? Logo :
                        menu === true ? Logo
                            : LogoBranco} alt="" /></a>
                    <div onClick={handleClick} className={menu === true ? "bar change" : "bar"}>
                        <span id={menu === false ? "bar1" : "bar11"}></span>
                        <span id="bar2"></span>
                        <span id={menu === false ? "bar3" : "bar33"}></span>
                    </div>
                </div>
                <div className={menu === true ? " menu-nav menu-nav-dis" : "menu-nav"}>
                    <ul className="nav-home">
                        <li className="m-home"><a className="link" href="/">Home</a></li>
                        <li className="m-sobre"><Link onClick={clickSobre} className="link" duration={1000} smooth={true} to="sobre">Sobre nós</Link></li>
                        <li className="m-servicos"><Link onClick={clickServicos} duration={1000} smooth={true} className="link" to="servicos">Serviços</Link></li>
                        <li className="m-portfolio"><Link onClick={clickPortfolio} duration={1000} smooth={true} className="link" to="portfolio">Portfólio</Link></li>
                        <li className="m-cusros"><a className="link" href="/cursos">Cursos</a></li>
                        <li className="m-contacto"><Link onClick={clickContacto} uration={1000} smooth={true} className="link" to="contactos">Contacto</Link></li>
                        <div id="animacao" className={
                            sobre === true ? 'animacao s-sobre' :
                                servicos === true ? 'animacao s-servicos' :
                                    portfolio === true ? 'animacao s-portfolio' :
                                        contacto === true ? 'animacao s-contato' :
                                            'animacao s-home'
                        }></div>
                    </ul>
                    {autenticado ?
                        <span /* onClick={handleClickBody} */ className={scrollPosition > 70 ? "btn-azul" : "btn-branco"}>
                            {userOn && userOn.nome + ' ' + userOn.sobre_nome}
                            <img src={Moser} alt=""></img>
                            <div className="opcoes">
                                <ul>
                                    <li><Linka to="/dashboard"><FontAwesomeIcon className="icon" icon="tachometer-alt" /> Dashboard</Linka></li>
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
