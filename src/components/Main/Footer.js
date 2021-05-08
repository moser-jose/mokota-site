import React from 'react'
import Logo from '../../assets/img/logo_branco.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import {Link as Linka} from 'react-scroll'
function Footer() {
    return (

        <footer>
            <div className="footer container">

                <div className="foo">
                    <div className="foot">
                        <div className="marca">
                            <div className="logor">
                                <a href="/"><img src={Logo} alt="" /></a>
                                <p>A Mekadir é uma empresa especializada no desenvolvimento de 
                                    soluções tecnológicas personalizadas atendendo a demanda do cliente, 
                                    nossos projectos se baseiam no desenvolvimento de sistemas informáticos entre outros.</p>
                                <Linka className="btnsaiba" duration={1000} to="sobre" smooth={true} >Saiba mais</Linka>
                            </div>
                            <div className="contacto">
                                <h1>Endereço</h1>
                                <p><span><FontAwesomeIcon icon="map-marker-alt" /></span> Rua Governador Calheiro nº 45 Cidade Alta, Huambo, Angola</p>
                                <h1>Contactos</h1>
                                <p><span><FontAwesomeIcon icon="phone-alt" /></span> (+244) 923819414</p>
                                <p><span><FontAwesomeIcon icon="phone-alt" /></span> (+244) 931000000</p>
                                <p><a href="mailto:geral@mokota.com"><span><FontAwesomeIcon icon="envelope" /></span> geral@mekadir.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="foot foot1">
                        <p>Links</p>

                        <ul className="nav">
                            <li className="m-home"><a href="#home">Home</a></li>
                            <li className="m-sobre"><a href="#sobre">Sobre nós</a></li>
                            <li className="m-servicos"><a href="#servicos">Serviços</a></li>
                            <li className="m-cusros"><a href="#cursos">Cursos</a></li>
                            <li className="m-contacto"><a href="#contato">Contacto</a></li>
                            <li className="m-faq"><a href="#faq">FAQ</a></li>
                            <div id="animacao" className="animacao s-home"></div>
                        </ul>

                        <div className="newsletter">
                            <p>Receba notificações por e-mail</p>
                            <form action="" method="post">
                                <div className="email">

                                    <span><FontAwesomeIcon icon="envelope" /></span>
                                    <input type=" text" placeholder="Introduza o e-mail" />
                                </div>
                                <input type="submit" value="Submeter" />
                            </form>
                        </div>

                    </div>

                    <div className="foot foot2 ult">
                        <p>Mapa</p>
                    </div>
                </div>

                <div className="foot-p">
                    <p className="termos"><span><Link to="/termos">
                        Termos e Condições </Link></span> |
                        <span><Link to="/privacidade"> Privacidade</Link></span></p>
                    <div className="redes-s">
                        <span title="Facebook"><a href="/"><i className="iconspeck speck-facebook"></i></a></span>
                        <span title="Instagram"><a href="https://www.instagram.com/mokota_code/"><i className="iconspeck speck-instagram"></i></a></span>
                        <span title="Twitter"><a href="/"><i className="iconspeck speck-twitter"></i></a></span>
                        <span title="Youtube"><a href="/"><i className="iconspeck speck-youtube"></i></a></span>
                        <span title="Github"><a href="https://github.com/mokota-code"><i className="iconspeck speck-github"></i></a></span>
                    </div>
                    <p className="copy">
                        <Link to="/">mekadir</Link> &copy; {new Date().getFullYear()}. Todos direitos reservados
                    </p>

                </div>
            </div>
        </footer>

    )
}

export default Footer
