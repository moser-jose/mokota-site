import React, { useState, useCallback } from 'react'
import Logo from '../../assets/img/logo_branco.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { Link as Linka } from 'react-scroll'
import { useAllContext } from '../../contexts/AllContexts'
function Footer() {
    const { setSobre, setServicos, setPortfolio, setContacto } = useAllContext();

    const clickSobre = useCallback(
        () => {
            setSobre(true)
            setServicos(false)
            setPortfolio(false)
            setContacto(false)
        },
        [setContacto, setPortfolio, setServicos, setSobre],
    )
    const clickServicos = useCallback(
        () => {
            setSobre(false)
            setServicos(true)
            setPortfolio(false)
            setContacto(false)
        },
        [setContacto, setPortfolio, setServicos, setSobre],
    )
    const clickPortfolio = useCallback(
        () => {
            setSobre(false)
            setServicos(false)
            setPortfolio(true)
            setContacto(false)
        },
        [setContacto, setPortfolio, setServicos, setSobre],
    )
    const clickContacto = useCallback(
        () => {
            setSobre(false)
            setServicos(false)
            setPortfolio(false)
            setContacto(true)
        },
        [setContacto, setPortfolio, setServicos, setSobre],
    )
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
                            <li><a href="/">Home</a></li>
                            <li ><Linka onClick={clickSobre} duration={1000} smooth={true} to="sobre">Sobre nós</Linka></li>
                            <li ><Linka onClick={clickServicos} duration={1000} smooth={true} to="servicos">Serviços</Linka></li>
                            <li ><Linka onClick={clickPortfolio} duration={1000} smooth={true} to="portfolio">Portfólio</Linka></li>
                            <li><a href="/cursos">Cursos</a></li>
                            <li ><Linka onClick={clickContacto} duration={100} smooth={true} to="contactos">Contacto</Linka></li>
                        </ul>

                        <div className="newsletter">
                            <p>Receba notificações por e-mail</p>
                            <form action="" method="post">
                                <div className="email">
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
                        <span title="Facebook"><a target="_blank" rel="noreferrer" href="https://www.facebook.com/mekadir"><i className="iconspeck speck-facebook"></i></a></span>
                        <span title="Instagram"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/mekadir_oficial/"><i className="iconspeck speck-instagram"></i></a></span>
                        <span title="Twitter"><a target="_blank" rel="noreferrer" href="https://www.twitter.com/mekadiroficial/"><i className="iconspeck speck-twitter"></i></a></span>
                        <span title="Youtube"><a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCPvCI8ftR37KuwxhvMJQWIQ"><i className="iconspeck speck-youtube"></i></a></span>
                        <span title="Github"><a target="_blank" rel="noreferrer" href="https://github.com/mekadir-oficial"><i className="iconspeck speck-github"></i></a></span>
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
