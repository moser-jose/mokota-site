import React from 'react'
import { Link as Linka } from 'react-router-dom'
import Logo from '../../assets/img/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {

    return (
        <div className='header menu-privacidade'>
            <div className="pre-header">
                <div className="container">
                    <div className="info">
                        <p className="telefone">
                            <FontAwesomeIcon icon="phone-alt" /> +(244) 923819414 | +(244) 931000000
                        </p>
                        <p className="email"><FontAwesomeIcon icon="envelope" /> info@mokota.com</p>
                        <p className="endereco"><FontAwesomeIcon icon="map-marker-alt" /> Rua Governador Calheiro n&ordm; 45
                            Cidade Alta, Huambo, Angola
                        </p>
                    </div>
                </div>
            </div>
            <div className="container menu">
                <div className="logoprincipal">
                    <Linka to="/"><img src={Logo} alt="" /></Linka>
                    <div className="bar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="menu-nav">
                    <ul className="nav">
                        <li className="m-home"><Linka className="link" to="/">Home</Linka></li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Header
