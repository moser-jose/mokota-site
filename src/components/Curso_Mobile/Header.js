import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { Link as Linka } from 'react-router-dom'
import LogoBranco from '../../assets/img/logo_branco.svg'
import Logo from '../../assets/img/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
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
                        <p className="email"><FontAwesomeIcon icon="envelope" /> info@mokota.com</p>
                        <p className="endereco"><FontAwesomeIcon icon="map-marker-alt" /> Rua Governador Calheiro n&ordm; 45
                            Cidade Alta, Huambo, Angola
                        </p>
                    </div>
                </div>
            </div>
            <div className="container menu">
                <div className="logoprincipal">
                    <Linka to="/"><img src={scrollPosition > 70 ? Logo : LogoBranco} alt="" /></Linka>
                    <div className="bar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="menu-nav">
                    <ul className="nav">
                        <li className="m-home"><Link className="link" duration={1000} smooth={true} to="home">Home</Link></li>
                        <li className="m-sobre"><Link className="link" duration={1000} smooth={true} to="sobre">O Curso</Link></li>
                        <li className="m-sobre"><Link className="link" duration={1000} smooth={true} to="projectos">Projectos</Link></li>
                        <li className="m-sobre"><Link className="link" duration={1000} smooth={true} to="faq">FAQ</Link></li>

                        <div id="animacao" className="animacao s-home"></div>
                    </ul>
                    <Link duration={1000} smooth={true} to="inscrever" className={scrollPosition > 70 ? "btn-azul" : "btn-branco"}>Inscrever-se</Link>


                </div>
            </div>
        </div >
    )
}

export default Header
