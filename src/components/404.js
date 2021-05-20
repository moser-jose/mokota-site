import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../assets/img/logo.svg'
import { Link } from 'react-router-dom'
export default function NotFound() {
    return (
        <div className="notfound">
            <div className="container">
                <img src={Logo} alt="" />
                <div className="not">
                    <span className="ico">
                        <FontAwesomeIcon icon="frown" />
                    </span>
                    <div className="h1">
                        <h2>Página não encontrada.</h2>
                        <h1>404</h1>
                        <p>A página que você está a procurar pode ter sido removida
                        devido<br /> a mudança de nome ou está temporariamente indisponível.</p>
                    </div>
                </div>
                <Link className="link" to="/"> Página Principal</Link>
                <ul className="redes">
                    <li><a href="/"><span className="iconspeck speck-facebook"></span></a></li>
                    <li><a href="/"><span className="iconspeck speck-twitter"></span></a></li>
                    <li><a href="/"><span className="iconspeck speck-github"></span></a></li>
                    <li><a href="https://www.instagram.com/mokota_code/"><span className="iconspeck speck-instagram"></span></a></li>
                    <li><a href="/"><span className="iconspeck speck-youtube"></span></a></li>
                </ul>
            </div>
        </div>
    )
}
