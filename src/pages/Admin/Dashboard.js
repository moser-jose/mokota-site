import React, { useEffect, useState } from 'react';

import Moser from '../../assets/img/moser.jpg'
import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeaderAdmin from '../../components/Admin/Dashboard/HeaderAdmin'
import Logo from '../../assets/img/logo_branco.svg'

import '../../assets/sass/onBack/Dashboard.scss';
import MenuLista from '../../components/Admin/Dashboard/MenuLista';
import { useAuthContext } from '../../contexts/AuthContext';
import ReactNaive from '../../assets/img/img-curso/react-native.png'
import { Link, NavLink } from 'react-router-dom';
import { useAllContext } from '../../contexts/AllContexts';
import MenuEsquerdo from '../../components/Admin/Dashboard/MenuEsquerdo';
import Loading from '../../components/Admin/Loading';

function Dashboard() {
    
    const [stateCursos, setStateCursos] = useState(true);
    const [alunos, setAlunos] = useState(true);
    const [usuarios, setUsuarios] = useState(true);
    const { loading, cursosDados, alunosDados, usuariosDados, logout, updateStateUser, userOn } = useAuthContext();
    const [menu, setMenu] = useState(false);

    const [cursosMenu, setCursosMenu] = useState(false);

    async function logoutUser(email) {
        await updateStateUser(email);
        logout();
    }
    const handleClick = () => {
        setMenu(!menu);
        /*  if (!menu) {
             document.querySelector('body').classList.add('body');
         }
         else {
             document.querySelector('body').classList.remove('body');
         } */
    }
    return (
        loading === false ?
            <div className="dash">
                <MenuEsquerdo menu={menu} handleClick={handleClick} />
                <div className={menu ? "direito- direito-menu" : "direito-"}>
                    <div className="content">
                        <HeaderAdmin icon="tachometer-alt" titulo="Dashboard Mekadir" descricao="Consulte todas as actividades realizadas"></HeaderAdmin>
                        <div className="conteudo">
                            <div className="meuscursos">
                                <span className="span-h1" onClick={() => setUsuarios(!usuarios)}>
                                    <h1 className="h1"><FontAwesomeIcon className="icon" icon="user-circle" />Usuários</h1>
                                    <span className="span-span" >
                                        <FontAwesomeIcon className={usuarios ? "icon" : "icon icon-sh"} icon="angle-up" />
                                    </span>
                                </span>
                                <div className={usuarios === true ? "cursos-container show" : "cursos-container hide"}>
                                    <div className="cursos">
                                        <ul className="alun">
                                            {
                                                usuariosDados && usuariosDados.map((dados, key) => (
                                                    <li className="al" key={key}>
                                                        <>
                                                            <div className="img">
                                                                <img src="http://localhost:4000/assets/img/usuarios/1622769353607eqmoser.jpg" alt=""></img>
                                                                <span className={dados.estado === true ? "online" : "offline"}>
                                                                    {dados.estado === true ? "Online" : "Offline"}
                                                                </span>
                                                            </div>
                                                            <h1>{dados.nome + " " + dados.sobre_nome}</h1>
                                                            <h2>{dados.email}</h2>
                                                            <h2><span>{dados.privilegio.privilegio}</span></h2>


                                                            <Link to={`/dashboard/curso/${dados.id}`} className="vermais">ver dados</Link>
                                                        </>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="conteudo">
                            <div className="meuscursos">
                                <span className="span-h1">
                                    <h1 className="h1"><FontAwesomeIcon className="icon" icon="layer-group" />Cursos da Mokota</h1>
                                    <span className="span-span" onClick={() => setStateCursos(!stateCursos)}>{
                                        stateCursos === true ?
                                            <FontAwesomeIcon className="icon" icon="angle-up" /> :
                                            <FontAwesomeIcon className="icon" icon="angle-down" />}
                                    </span>
                                </span>
                                <div className={stateCursos === true ? "cursos-container show" : "cursos-container hide"}>
                                    <div className="cursos">
                                        <ul>
                                            {
                                                cursosDados && cursosDados.map((dados, key) => (

                                                    <li key={key}>

                                                        {
                                                            dados.dados_do_curso.map((item) => (
                                                                <div key={item.id}>
                                                                    <div className="img">
                                                                        <img src={ReactNaive} alt=""></img>
                                                                        <span className="edicao">{item.edicao}ª Edição</span>
                                                                    </div>
                                                                    <h1>{dados.curso}</h1>
                                                                    <p>
                                                                        Neste curso completo você irá aprender a criar aplicativos nativos para Android e iOS, desde o zero, passando pelo design e a lógica das aplicações até a sua implementação.
                                                                Você usará ferramentas incríveis e criará <span>4 apps</span> e <span>3 Api's</span> e publique seus aplicativos.
                                                            </p>
                                                                    <div className="datas">
                                                                        <span className="data">Ínicio: <h3>{moment(item.inicio).format('DD-MM-YYYY')}</h3></span>
                                                                        <span className="data">Fim: <h3>{moment(item.fim).format('DD-MM-YYYY')}</h3></span>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                        <Link to={`/dashboard/curso/${dados.slug}`} className="vermais">ver dados</Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="conteudo">
                            <div className="meuscursos">
                                <span className="span-h1" onClick={() => setAlunos(!alunos)}>
                                    <h1 className="h1"><FontAwesomeIcon className="icon" icon="user-circle" />Alunos da Mekadir</h1>
                                    <div className="estuda">
                                        <span className="qnt-est">{alunosDados && alunosDados.length} Alunos</span>
                                        <span className="span-span" onClick={() => setAlunos(!alunos)}>
                                            <FontAwesomeIcon className={alunos ? "icon" : "icon icon-sh"} icon="angle-up" />
                                        </span></div>





                                </span>
                                <div className={alunos === true ? "cursos-container show" : "cursos-container hide"}>
                                    <div className="cursos">
                                        <ul className="alun">
                                            {
                                                alunosDados && alunosDados.map((dados, key) => (

                                                    <li className="al" key={key}>

                                                        {
                                                            <>
                                                                <div className="img">
                                                                    <img src={ReactNaive} alt=""></img>
                                                                </div>
                                                                <h1>{dados.nome}</h1>
                                                            </>

                                                        }
                                                        <Link to={`/dashboard/curso/${dados.id}`} className="vermais">ver dados</Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <Loading />
    )
}

export default Dashboard
