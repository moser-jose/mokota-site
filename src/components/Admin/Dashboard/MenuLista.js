import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MenuLista() {
    return (
        <div className="menu-bot">
            <ul>
                <li>
                    <a href="/"><FontAwesomeIcon className="icon" icon="user-circle" /> Minha Conta</a>
                </li>
            </ul>
        </div>
    )
}
