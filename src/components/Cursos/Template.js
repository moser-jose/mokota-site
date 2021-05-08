import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Template({ img, icon, botao, texto, categoria, titulo, modulo, app, api, link }) {
    return (
        <div className="grid-1-3 template">
            <div className="img-c">
                <img src={img} alt="Curso React Native" ></img>
            </div>
            <div className="texto">
                <span><FontAwesomeIcon className="icon" icon={icon} /> {categoria}</span>
                <div className="modulos-curso">
                    <span>{modulo}</span>
                    <span>{api}</span>
                    <span>{app}</span>
                </div>
                <h1>{titulo}</h1>
                <p>{texto}</p>
            </div>
            <div className="botao">
                {link !== '' ?
                    <NavLink to={link}>{botao}</NavLink>
                    :
                    <span className="brevemente">{botao}</span>
                }
            </div>
        </div>
    )
}
