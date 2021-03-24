import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../../../assets/img/logo.svg'
import Moser from '../../../assets/img/moser.jpg'
import '../../../assets/sass/onBack/AdminHeader.scss'

function HeaderAdmin() {
    return (
        <>
            <div class="btn-top">
                <a class="btn-top-pag" href="/" title="voltar para o topo"><i class="fas fa-angle-up"></i></a>
            </div>
            <section class="direito" /* style="margin-left:0" */>
                <div class="header">
                    <div class="logo">
                        <a href="/"><img src={Logo} alt="" srcset="" /></a>
                    </div>
                    <div class="theme">
                        <div>
                            <input type="checkbox" class="checkbox" id="chk" />
                            <label class="label" for="chk">
                                <FontAwesomeIcon icon="sun" />
                                <FontAwesomeIcon icon="moon" />
                                <div class="ball"></div>
                            </label>
                        </div>
                    </div>
                    <div class="notification">
                        <div class="not">
                            <span>9</span>
                        </div>
                        <FontAwesomeIcon className="icon" icon="bell" />
                    </div>
                    <div class="user">
                        <p>Moser José<i class="fas fa-caret-down"></i></p>
                        <img src={Moser} alt="" />
                        <div class="green"></div>
                        <div class="opcoes">
                            <ul>
                                <li><a href="/"><FontAwesomeIcon className="icon" icon="layer-group" /> Meus Cursos</a></li>
                                <li><a href="/"><FontAwesomeIcon className="icon" icon="user-circle" /> Minha Conta</a></li>
                                <li><a href="/"><FontAwesomeIcon className="icon" icon="sign-out-alt" /> Sair</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="pre-content">
                    <div class="menu-bot">
                        <ul>
                            <li>
                                <a href="/"><FontAwesomeIcon className="icon" icon="layer-group" /> Meus Cursos</a>
                            </li>
                            <li>
                                <a href="#meuscertificados"><FontAwesomeIcon className="icon" icon="certificate" /> Meus Certificados</a>
                            </li>
                            <li>
                                <a href="#"><FontAwesomeIcon className="icon" icon="headset" /> Suporte</a>
                            </li>
                            <li>
                                <a href="/"><FontAwesomeIcon className="icon" icon="user-circle" /> Minha Conta</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>

        </>
    )
}

export default HeaderAdmin
