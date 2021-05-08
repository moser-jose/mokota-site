import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { Link as Linka } from 'react-router-dom'
import Logo from '../../assets/img/logo.svg'
import LogoBranco from '../../assets/img/logo_branco.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
    const [menu, setMenu] = useState(false);

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
        document.querySelector('body').classList.remove('body');
    }
    
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
                    <Linka to="/"><img src={Logo} alt="" /></Linka><div onClick={handleClick} className={menu === true ? "bar change" : "bar"}>
                        <span id={menu === false ? "bar1" : "bar11"}></span>
                        <span id="bar2"></span>
                        <span id={menu === false ? "bar3" : "bar33"}></span>
                    </div>
                </div>
                <div className={menu === true ? " menu-nav menu-nav-dis" : "menu-nav"}>
                    <ul className="nav">
                        <li className="m-home"><Linka className="link" to="/">Home</Linka></li>
                        <li className="m-sobre"><Linka className="link" to="/cursos">Cursos</Linka></li>
                        <li className="m-sobre"><Linka className="link" to="/cursos/certificados">Certificados</Linka></li>
                        <div id="animacao" className="animacao s-home"></div>
                    </ul>
                    <Linka to="/minha-conta" onClick={handleClickBody} className="btn-azul">Login</Linka>
                    <p><span>mekadir</span> &copy; {new Date().getFullYear()} - Todos direitos reservados -
                    <span className="block"><Linka onClick={handleClickBody} to="/termos"> Termos e Condições</Linka> | <Linka onClick={handleClickBody} to="/privacidade">Privacidade</Linka></span></p>
                </div>
            </div>
        </div >
    )
}

export default Header
