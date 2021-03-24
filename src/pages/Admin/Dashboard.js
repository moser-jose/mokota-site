import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeaderAdmin from '../../components/Admin/Dashboard/HeaderAdmin'
import '../../assets/sass/onBack/Dashboard.scss'
import Code from '../../assets/img/code.jpg'

function Dashboard() {
    const estado = 1;
    return (
        <>
            <HeaderAdmin></HeaderAdmin>
            <div className="content">
                <div className="conteudo">
                    <div className="meuscursos">
                        <h1 className="h1"><FontAwesomeIcon className="icon" icon="layer-group" /> Meus Cursos</h1>
                        <div className="cursos-container">
                            <div className="cursos">
                                <div className="curso">
                                    {estado === 1 ?
                                        <div className="activo">
                                            <h1>Activo</h1>
                                        </div>
                                        :
                                        estado === 2 ?
                                            <>
                                                <div className="activo" style="background-color: #c29502">
                                                    <h1>Por Activar</h1>
                                                </div>
                                                <span className="estado"></span>
                                            </>
                                            :
                                            <div className="activo" style="background-color: #dd3309">
                                                <h1>Não activo</h1>
                                            </div>
                                    }
                                    <div className="aulas">

                                        <span className="numero-aulas">2 Aulas</span>
                                        <span modulo="{{$user->slug}}" id="modulo" className="modulos">
                                            <span>
                                                23 modulos
                                            </span>
                                        </span>
                                        <span className="horas">23 Horas</span>
                                    </div>
                                    <div className="img">
                                        <img src={Code} alt="" srcset=""></img>
                                        <div></div>

                                    </div>
                                    <div className="favorito">
                                        <FontAwesomeIcon icon="heart" />
                                    </div>

                                    <div className="dados-curso">
                                        <h1>Criação de Aplicativos Mobile com React Native Completo</h1>

                                        <p>Aprenda neste curso completo como criar aplicativos nativos para Android e iOS.
                                        Você irá aprender com as tecnologias mais poderosas 100% na prática.
                                        Criando 5 apps e ainda publicando nas famosas lojas AppStore e Google Play</p>
                                    </div>
                                    <div className="percentagem">
                                        <div className="perc">
                                            <span class="num">4 / 14</span>

                                            <span class="barra">
                                                <span style={{ width: '23%' }}></span>
                                            </span>
                                            <span class="pr">23%</span>
                                        </div>
                                        <div className="categoria">
                                            <h1>Design e Código</h1>
                                        </div>
                                    </div>
                                    <div className="footer">
                                        <a href="/">
                                            Continuar curso
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="meuscursos" id="meuscertificados">
                        <h1 className="h1"><FontAwesomeIcon className="icon" icon="certificate" /> Meus Certificados</h1>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dashboard
