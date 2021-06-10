import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../../../assets/img/logo_branco.svg'



function MenuEsquerdo({ menu, handleClick }) {

    const [cursosMenu, setCursosMenu] = useState(false);

    return (
        <div className={menu ? "esquerdo esquerdo-menu" : "esquerdo"}>
            <div className="esq">
                <div className="menu-img">
                    <a href="/"><img src={Logo} alt="" /></a>
                    <div className="menu">
                        <div onClick={handleClick} className={menu === true ? "bar change" : "bar"}>
                            <span id={menu === false ? "bar1" : "bar11"}></span>
                            <span id="bar2"></span>
                            <span id={menu === false ? "bar3" : "bar33"}></span>
                        </div>
                    </div>
                </div>
                <div className="esquerdo-esq">
                    <ul className="lista-menu">
                        <li className="menu-li">
                        <FontAwesomeIcon className="icon icon-dash" icon="tachometer-alt" /> <Link className="menu-a" to="/dashboard"> Dashboard</Link>
                        </li>

                        <li className={cursosMenu ? "menu-li show-cu" : "menu-li hide-cu"} onClick={() => setCursosMenu(!cursosMenu)}>
                            <FontAwesomeIcon className="icon icon-dash" icon="layer-group" /><span className="link" href="/">Cursos</span>

                            <FontAwesomeIcon className={cursosMenu ? "icon " : "icon icon-  "} icon="angle-up" />

                            <ul>
                                <li>Activos</li>
                                <li>Inactivos</li>
                            </ul>
                        </li>
                        <li className="menu-li"><FontAwesomeIcon className="icon icon-dash" icon="user-graduate" /><span className="link" href="/">Alunos</span><FontAwesomeIcon className="icon" icon="angle-down" /></li>
                        <li className="menu-li"><FontAwesomeIcon className="icon icon-dash" icon="award" /><span className="link" href="/">Certificados</span><FontAwesomeIcon className="icon" icon="angle-down" /></li>
                        <li className="menu-li"><FontAwesomeIcon className="icon icon-dash" icon="user-circle" /> <span className="link" href="/">Usuários</span> <FontAwesomeIcon className="icon" icon="angle-down" /></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default MenuEsquerdo
