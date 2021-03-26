import React from 'react'
import JS from '../../assets/img/img-curso/js.svg'
import Rea from '../../assets/img/img-curso/react-c.svg'
import Design from '../../assets/img/img-curso/design-xd.svg'
import Node from '../../assets/img/img-curso/node-m.svg'
import Fire from '../../assets/img/img-curso/fire.svg'
import GitH from '../../assets/img/img-curso/git-h.svg'
import Desenv from '../../assets/img/img-curso/desenv.svg'
function Modulos() {
    return (
        <div className="modulos">
            <div className="container">

                <div className="container mod-l">
                    <div className="grid-2">
                        <img src={Desenv}></img>
                        <span className="mod">
                            1º
                            <span>Módulo</span>
                        </span>
                    </div>

                    <div className="grid-2">
                        <img src={JS}></img>
                        <span className="mod">
                            2º
                            <span>Módulo</span>
                        </span>
                    </div>
                    <div className="grid-2">
                        <img src={Rea}></img>
                        <span className="mod">
                            3º
                            <span>Módulo</span>
                        </span>
                    </div>
                    <div className="grid-2">
                        <img src={Design}></img>
                        <span className="mod">
                            4º
                            <span>Módulo</span>
                        </span>
                    </div>
                    <div className="grid-2">
                        <img src={Node}></img>
                        <span className="mod">
                            5º
                            <span>Módulo</span>
                        </span>
                    </div>
                    <div className="grid-2">
                        <img src={Fire}></img>
                        <span className="mod">
                            6º
                            <span>Módulo</span>
                        </span>
                    </div>
                    <div className="grid-2">
                        <img src={GitH}></img>
                        <span className="mod">
                            7º
                            <span>Módulo</span>
                        </span>
                    </div>
                    <div className="grid-2"></div>
                </div>
                {/* <div className="container">
                    <div className="grid-2"></div>
                    <div className="grid-2"></div>
                    <div className="grid-2"></div>
                    <div className="grid-2"></div>
                    <div className="grid-2"></div>
                    <div className="grid-2"></div>
                </div> */}


                {/* 
                <ul>
                    <li>Conceitos e Configuração do Ambiente de Desenvolvimento</li>
                    <li>Javascript ES6</li>
                    <li>Design é Tudo (Adobe XD)</li>
                    <li>React Native (Cross-Plataform)</li>
                    <li>Criando API com Nodejs e Express</li>
                    <li>Dominando o Realme e o Firebase (MongoDB)</li>
                    <li>Publicando App na google play (android) e na AppStore (ios)</li>
                </ul>
 */}

            </div>


        </div>
    )
}

export default Modulos
