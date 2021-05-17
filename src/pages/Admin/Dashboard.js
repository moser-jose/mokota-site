import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeaderAdmin from '../../components/Admin/Dashboard/HeaderAdmin'
import '../../assets/sass/onBack/Dashboard.scss';
import MenuLista from '../../components/Admin/Dashboard/MenuLista';
import { useUserContext } from '../../contexts/UserContext';
import ReactNaive from '../../assets/img/img-curso/react-native.png'
import { Link } from 'react-router-dom';
function Dashboard() {
    const { cursos } = useUserContext();
    return (
        <>
            <HeaderAdmin>
                <MenuLista />
            </HeaderAdmin>
            <div className="content">
                <div className="conteudo">
                    <div className="meuscursos">
                        <h1 className="h1"><FontAwesomeIcon className="icon" icon="layer-group" />Cursos da Mokota</h1>
                        <div className="cursos-container">
                            <div className="cursos">
                                <ul>
                                    {
                                        cursos.map((dados, key) => (

                                            <li key={key}>

                                                {
                                                    dados.dados_do_curso.map((item) => (
                                                        <>
                                                            <div className="img">
                                                                <img src={ReactNaive} alt=""></img>
                                                                <span className="edicao">{item.edicao}ª Edição</span>
                                                            </div>
                                                            <h1>{dados.curso}</h1>
                                                            <p>
                                                                Neste curso completo você irá aprender a criar aplicativos nativos para Android e iOS, desde o zero, passando pelo design e a lógica das aplicações até a sua implementação.
                                                                Você usará ferramentas incríveis e criará <h3>4 apps</h3> e <h3>3 Api's</h3> e publique seus aplicativos.
                                                            </p>
                                                            <div className="datas">
                                                                <span className="data">Ínicio: <h3>{moment(item.inicio).format('DD-MM-YYYY')}</h3></span>
                                                                <span className="data">Fim: <h3>{moment(item.fim).format('DD-MM-YYYY')}</h3></span>
                                                            </div>
                                                        </>
                                                    ))
                                                }
                                                <Link to={`curso/${dados.slug}`} className="vermais">ver dados</Link>
                                            </li>
                                        ))
                                    }
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
