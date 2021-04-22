import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { Link as Linka } from 'react-router-dom'
import LogoBranco from '../../assets/img/logo_branco.svg'
import Logo from '../../assets/img/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
    const [menu, setMenu] = useState(false);

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
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
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
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
                    <Linka to="/"><img src={Logo} alt="" /></Linka>
                    <div onClick={handleClick} className={menu === true ? "bar change" : "bar"}>
                        <span id={menu === false ? "bar1" : "bar11"}></span>
                        <span id="bar2"></span>
                        <span id={menu === false ? "bar3" : "bar33"}></span>
                    </div>
                </div>
                <div className={menu === true ? " menu-nav menu-nav-dis" : "menu-nav"}>
                    <ul className="nav">
                        <li className="m-home"><Link onClick={handleClickBody} className="link" duration={1000} smooth={true} to="home">Home</Link></li>
                        <li className="m-sobre"><Link onClick={handleClickBody} className="link" duration={1000} smooth={true} to="sobre">O Curso</Link></li>
                        <li className="m-sobre"><Link onClick={handleClickBody} className="link" duration={1000} smooth={true} to="projectos">Projectos</Link></li>
                        <li className="m-sobre"><Link onClick={handleClickBody} className="link" duration={1000} smooth={true} to="pagamento">Pagamento</Link></li>
                        <li className="m-sobre"><Link onClick={handleClickBody} className="link" duration={1000} smooth={true} to="inscrever">Inscrever-se</Link></li>
                        <li className="m-sobre"><Link onClick={handleClickBody} className="link" duration={1000} smooth={true} to="faq">FAQ</Link></li>
                        <div id="animacao" className="animacao s-home"></div>
                    </ul>
                    <Linka to="minha-conta" onClick={handleClickBody} className={scrollPosition > 70 ? "btn-azul" : "btn-branco"}>Login</Linka>
                    <p><span>moskotas</span> &copy; {new Date().getFullYear()} - <a href='https://wa.me/244923819414' target='_blank'>whats</a> Todos direitos reservados -
                    <span className="block"><Linka onClick={handleClickBody} to="/termos"> Termos e Condições</Linka> | <Linka onClick={handleClickBody} to="/privacidade">Privacidade</Linka></span></p>
                </div>
            </div>
        </div >
    )
}

export default Header
