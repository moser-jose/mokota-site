import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Voltar() {
    return (
        <div className="menu-bot">
            <ul>
                <li>
                    <NavLink to="/dashboard"><FontAwesomeIcon className="icon" icon="arrow-circle-left" /> Voltar</NavLink>
                </li>
            </ul>
        </div>
    )
}
