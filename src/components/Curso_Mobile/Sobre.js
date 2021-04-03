import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Moser from '../../assets/img/moser.jpg'
import PlaySobreSvg from './PlaySobreSvg';
import Javascript from '../../assets/img/img-curso/javascript.svg';
import Node from '../../assets/img/img-curso/nodejs.svg';
import Mongo from '../../assets/img/img-curso/mongodb.svg';
import Firebase from '../../assets/img/img-curso/firebase.svg';
import Express from '../../assets/img/img-curso/express.svg';
import Mysql from '../../assets/img/img-curso/mysql.svg';
import Npm from '../../assets/img/img-curso/npm.svg';
import ReactIcon from '../../assets/img/img-curso/react.svg';
import VCode from '../../assets/img/img-curso/visual-code.svg';
import Git from '../../assets/img/img-curso/git.svg';
import Github from '../../assets/img/img-curso/github.svg';
import AdobeXD from '../../assets/img/img-curso/adobe-xd.svg';
import AndroidStudio from '../../assets/img/img-curso/android-studio.svg';
import Play from '../../assets/img/img-curso/play.jpg';

const Sobre = () => {

    return (
        <section id="sobre" sclass="s-sobre" className="sobre ">

            <div className="sb container">
                <div className="grid-8 sobrenos">
                    <div className="eq-cab">
                        <h1 className="titulo">Sobre o <span>curso</span></h1>
                        <p className="desc"><span>Criação de Aplicativos Moveis com React Native Completo </span>
                        é um curso criado pela Mokota, com intuito de disseminar
                        o desenvolvimento de aplicações moveis por parte da juventude e não só,
                        despertar o lado criativo da juventude usando programação avançada.  </p>
                        <p className="desc">Neste curso completo você irá aprender a criar aplicativos
                        nativos para <span className="iconspeck speck-android-sp"></span> Android e <span className="iconspeck speck-apple"></span> iOS, desde o zero,
                        passando pelo design das aplicações até a sua implementação.
                        Você irá aprender com as tecnologias mais poderosas 100% na prática.
                        Criando 4 apps reais e ainda publicando nas famosas lojas <span className="iconspeck speck-appstore-sp"></span> AppStore e <span className="iconspeck speck-google-play"></span> Google Play.</p>
                        <p className="mais">Assista o video e saiba mais sobre o curso. ➝</p>
                    </div>
                </div>
                <div className="grid-8 sobre-video">
                    <PlaySobreSvg img={Play} />
                </div>
            </div>

            <div className="opc container">
                <div className="grid-4">
                    <span><FontAwesomeIcon className="icon" icon="mobile-alt" /></span>
                    <h1>4 Aplicativos Reais</h1>
                    <p>Crie quatro aplicativos reais, incríveis com design inédito e publique nas famosas lojas de Aplicativos</p>
                </div>
                <div className="grid-4">
                    <span><FontAwesomeIcon className="icon" icon="code" /></span>
                    <h1>8 Módulos</h1>
                    <p>São 8 módulos completos e estruturados de forma a facilitar o aprendizado e um conjunto de bonus incríveis</p>
                </div>
                <div className="grid-4">
                    <span><FontAwesomeIcon className="icon" icon="thumbs-up" /></span>
                    <h1>Sem Pré-requisitos</h1>
                    <p>Não precisa ter algum conhecimento de programação. Apenas trague um computador portátil</p></div>
                <div className="grid-4">
                    <span><FontAwesomeIcon className="icon" icon="calendar-alt" /></span>
                    <h1>1 Mês de Aulas</h1>
                    <p>Aulas de segunda/sexta e quatro horas/dia. Desfrute do tempo e crie aplicações de invejar.</p>
                </div>
            </div>
            <div className="equipa animacao-baixo">
                <div className="card card-l container">
                    <div className="grid-8 professor">
                        <div className="membro grid-4 animacao-baixo">
                            <div className="func">
                                <h1>O Professor</h1>
                            </div>
                            <div className="img">
                                <img className="img-img" src={Moser} alt="" />
                            </div>
                            <h1>Moser José</h1>
                            <h2>Programador Fullstack</h2>
                            <span><a href="https://www.facebook.com/moser.jos/" target="blank"><i className="iconspeck speck-facebook"></i></a></span>
                            <span><a href="https://www.linkedin.com/in/moser-jose/" target="blank"><i className="iconspeck speck-linkedin-sp"></i></a></span>
                            <span><a href="https://twitter.com/mosmmy" target="blank"><i className="iconspeck speck-twitter"></i></a></span>
                            <span><a href="https://www.instagram.com/mosmmy/" target="blank"><i className="iconspeck speck-instagram"></i></a></span>
                            <span><a href="https://github.com/moser-jose" target="blank"><i className="iconspeck speck-github"></i></a></span>
                        </div>
                        <div className="sobreM">
                            <ul>
                                <li>Licenciado em Engenharia Informática</li>
                                <li>Mestre em Engenharia Informática</li>
                                <li>Professor Universitário</li>
                                <li>Programador Fullstack</li>
                                <li>UI/UX Design</li>
                                <li><i>&hearts;</i> Apaixonado por Open Source</li>
                            </ul>
                            <p>← Veja os meus projectos open source no github</p>
                        </div>
                    </div>
                    <div className="grid-8 ferr">
                        <div className="eq-cab animacao-baixo">
                            <h1 className="titulo">Ferramentas para o <span>curso</span></h1>
                            <p className="desc">
                                <span>Durante o curso, usaremos ferramentas conceituadas como:</span>
                                <img src={Javascript} alt="Javascript"></img>
                                <img src={Node} alt="Nodejs"></img>
                                <img src={Mongo} alt="MongoDB"></img>
                                <img src={Firebase} alt="Firebase"></img>
                                <img src={Express} alt="Express"></img>
                                <img src={Mysql} alt="Mysql"></img>
                                <img src={ReactIcon} alt="React"></img>
                                <img src={Git} alt="Git"></img>
                                <img src={Npm} alt="Npm"></img>
                                <img src={AdobeXD} alt="Adobe XD"></img>
                                <img src={Github} alt="Github"></img>
                                <img src={VCode} alt="Vscode"></img>
                                <img src={AndroidStudio} alt="Android Studio" ></img>
                            </p>
                        </div>
                    </div>

                </div>
                <p className="container ferr-texto">
                    <span>{'<>'}</span> Você vai poder utilizar essas ferramentas mesmo que nunca teve contacto com programação. <span>{'</>'}</span>
                    <span className="oportunidade" ><Link duration={1000} smooth={true} to="inscrever">Não perca essa oportunidade, Inscreva-se já</Link></span>
                </p>

            </div>
        </section >
    )
}

export default Sobre
