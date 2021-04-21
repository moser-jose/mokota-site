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
                        <h1 className="h1"><FontAwesomeIcon className="icon" icon="layer-group" />Cursos da Mokota</h1>
                        <div className="cursos-container">
                            <div className="cursos">
                                <ul>
                                    <li>
                                        Desenvolvimento de Aplicativos com React Native completo
                                        <span className="edicao">1ª Edição</span>
                                        <span className="data">Ínicio 22/09/2021</span>
                                        <span className="data">Fim 22/10/2021</span>
                                        <span className="pre">53 Alunos Pré-Inscritos</span>
                                        <span className="matriculados">10 Alunos Matriculados</span>
                                        </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dashboard
