import React from 'react'
import {
    NavLink
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../../../assets/img/logo.svg'
import Moser from '../../../assets/img/moser.jpg'
import '../../../assets/sass/onBack/AdminHeader.scss'

function HeaderAdmin({children }) {
    return (
        <>

            <section className="direito">
                <div className="header">
                    <div className="logo">
                        <a href="/"><img src={Logo} alt="" /></a>
                    </div>
                    <div className="theme">
                        <div>
                            <input type="checkbox" className="checkbox" id="chk" />
                            <label className="label" htmlFor="chk">
                                <FontAwesomeIcon icon="sun" />
                                <FontAwesomeIcon icon="moon" />
                                <div className="ball"></div>
                            </label>
                        </div>
                    </div>
                    <div className="notification">
                        <div className="not">
                            <span>9</span>
                        </div>
                        <FontAwesomeIcon className="icon" icon="bell" />
                    </div>
                    <div className="user">
                        <p>Moser José<i className="fas fa-caret-down"></i></p>
                        <img src={Moser} alt="" />
                        <div className="green"></div>
                        <div className="opcoes">
                            <ul>
                                <li><a href="/"><FontAwesomeIcon className="icon" icon="layer-group" /> Meus Cursos</a></li>
                                <li><a href="/"><FontAwesomeIcon className="icon" icon="user-circle" /> Minha Conta</a></li>
                                <li><a href="/"><FontAwesomeIcon className="icon" icon="sign-out-alt" /> Sair</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pre-content">
                {children}
                </div>
            </section>

        </>
    )
}

export default HeaderAdmin
