import React from 'react'
import IMG from '../../assets/img/code.jpg'
export default function Portifolio() {
    return (

        <div className="portfolio">
            <div className="container">
                <div className="eq-cab">
                    <h1 className="titulo"><span>Nossos</span> Projectos</h1>
                </div>

                <div className="tabs-projetos">
                    <ul>
                        <li>Todos</li>
                        <li>Sites</li>
                        <li>Sistemas web</li>
                        <li>Apps mobile</li>
                        <div id="animacao" className="todos-p"></div>
                    </ul>
                    <div className="projetos-todos">
                        <div className="grid-1-3">
                            <img src={IMG} alt=""></img>
                            <div className="saiba-pro">
                                <h2>Página web</h2>
                                <h1>Hinário Adventista do Sétimo Dia</h1>
                                <a href="/" >Saiba mais</a>
                            </div>
                        </div>
                        <div className="grid-1-3">
                            <img src={IMG} alt=""></img>
                            <div className="saiba-pro">
                                <h2>Sistema web</h2>
                                <h1>Hinário Adventista do Sétimo Dia</h1>
                                <a href="/" >Saiba mais</a>
                            </div>
                        </div>
                        <div className="grid-1-3">
                            <img src={IMG} alt=""></img>
                            <div className="saiba-pro">
                                <h2>app mobile</h2>
                                <h1>Hinário Adventista do Sétimo Dia</h1>
                                <a href="/" >Saiba mais</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
