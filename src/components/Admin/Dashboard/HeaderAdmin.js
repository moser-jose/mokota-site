import React, { useState } from 'react'
import {
    NavLink
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../../../assets/img/logo.svg'
import Moser from '../../../assets/img/moser.jpg'
import '../../../assets/sass/onBack/AdminHeader.scss'
import { useAuthContext } from '../../../contexts/AuthContext'

function HeaderAdmin({ icon, titulo, descricao }) {
    /* const { logout } = useAuthContext(); */

    const [usuarios, setUsuarios] = useState(true);
    const { cursosDados, alunosDados, usuariosDados, logout, updateStateUser, userOn } = useAuthContext();
    const [menu, setMenu] = useState(false);

    async function logoutUser(email) {
        await updateStateUser(email);
        logout();
    }

    return (
        <div className="cabecario">
            <div className="dash-1">
                <p><FontAwesomeIcon className="icon" icon={icon} /> {titulo}
                    <span>{descricao}</span></p>
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
                <p>
                    {userOn && userOn.nome + " " + userOn.sobre_nome}
                    <span>{userOn && userOn.email}</span>
                    <span className="priv">{userOn && userOn.privilegio.privilegio}</span>
                </p>
                <img src={Moser} alt="" />
                <FontAwesomeIcon className="icon" icon="angle-down" />
                <div className="opcoes">
                    <ul>
                        <li><a href="/"><FontAwesomeIcon className="icon" icon="layer-group" /> Meus Cursos</a></li>
                        <li><a href="/"><FontAwesomeIcon className="icon" icon="user-circle" /> Minha Conta</a></li>
                        <li onClick={logoutUser}><span><FontAwesomeIcon className="icon" icon="sign-out-alt" /> Sair</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeaderAdmin
