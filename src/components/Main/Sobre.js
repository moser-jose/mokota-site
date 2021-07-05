import React, { useState } from 'react'
import Moser from '../../assets/img/moser.jpg'
import Gaspar from '../../assets/img/gaspar.jpg'
import Wilson from '../../assets/img/wilson.jpg'
import PlaySobreSvg from './PlaySobreSvg'
function Sobre() {
    const [sobre, setSobre] = useState(true);
    const [missao, setMissao] = useState(false);
    const [visao, setVisao] = useState(false);
    const [valores, setValores] = useState(false);

    const mudarSobre = () => {
        setSobre(true)
        setVisao(false)
        setValores(false)
        setMissao(false)
    }
    const mudarMissao = () => {
        setMissao(true)
        setSobre(false)
        setVisao(false)
        setValores(false)
    }

    const mudarVisao = () => {
        setVisao(true)
        setSobre(false)
        setValores(false)

        setMissao(false)
    }
    const mudarValores = () => {
        setValores(true)
        setSobre(false)
        setVisao(false)

        setMissao(false)
    }




    return (
        <section id="sobre" sclass="s-sobre" className="sobre ">

            <div className="animacao-baixo sb container">
                <div className="grid-8 sobrenos animacao-esquerda">
                    <div className="eq-cab">
                        <h1 className="titulo">Sobre <span>Nós</span></h1>
                        <div className="status">
                            <span className={sobre === true ? 'active' : ''} onClick={mudarSobre}>Sobre</span>
                            <span className={missao === true ? 'active' : ''} onClick={mudarMissao}>Missão</span>
                            <span className={visao === true ? 'active' : ''} onClick={mudarVisao}>Visão</span>
                            <span className={valores === true ? 'active' : ''} onClick={mudarValores}>Valores</span>
                        </div>
                        {
                            sobre === true ?
                                <><p className="desc">A mekadir é uma empresa especializada no desenvolvimento
                                de soluções tecnológicas personalizadas atendendo a demanda do nosso cliente,
                                nossos projectos se baseiam no desenvolvimento
                                de sistemas informáticos, na criação de páginas web,
                                no desenvolvimento de aplicativos mobile
                                entre outros.</p>
                                    <p className="desc">Actuamos no desenvolvimento de
                                    sistemas nos mais variados segmentos como Prestação de serviços,
                                    Energia, IoT, Telecomunicações, TIC'S.</p>
                                </> :
                                missao === true ?
                                    <><p className="desc">Nossa missão é desenvolver
                                    ferramentas que façam parte da solução de um problema
                                    pessoal dos nossos clientes ou da sociedade em geral.</p>
                                        <p className="desc">
                                            Para os nossos cursos, o objetivo é transformar a vida dos alunos
                                            através do conhecimento que transmitimos na area do desenvolvimento tecnológico,
                                            permitindo que nossos estudantes utilizem esse conhecimento para começar o próprio negócio, ou
                                            que seja benéfico no mercado de trabalho.
                                        </p>
                                    </>
                                    : visao === true ?
                                        <><p className="desc">Ser um grupo competitivo que actue de forma simples e
                                        abrangente no segmento informático e não só, através de desenvolvimento de projectos
                                        que resolvam problemas pontuais da nossa sociedade.
                                          </p>
                                            <p className="desc">Nosso foco é fazer com que nossos
                                            alunos tenham conhecimento de qualidade e avançado de programação e
                                            incutir em suas mentes a iniciarem uma jornada nessa área fantástica.</p>
                                        </>
                                        : valores === true &&
                                        <><p className="desc">
                                            <ul>
                                                <li>
                                                    Ética</li>
                                                <li>
                                                    Esforço</li>
                                                <li>
                                                    Paixão
                                                </li>
                                                <li>

                                                    Trabalho em Equipe</li>
                                                <li>
                                                    Respeito</li>
                                                <li>
                                                    Qualidade
                                                </li>
                                                <li>

                                                    Confiança</li>
                                                <li>
                                                    Integridade
                                                </li>


                                            </ul>
                                        </p>
                                        </>
                        }
                        <div className="socia">
                            <ul className="redes-sobre">
                                <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/mekadir"><span className="iconspeck speck-facebook"></span></a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://github.com/mekadir-oficial"><span className="iconspeck speck-github"></span></a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://www.twitter.com/mekadiroficial/"><span className="iconspeck speck-twitter"></span></a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/mekadir_oficial/"><span className="iconspeck speck-instagram"></span></a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCPvCI8ftR37KuwxhvMJQWIQ"><span className="iconspeck speck-youtube"></span></a></li>
                            </ul>
                            <p className="mais">Assista o video e saiba mais sobre nós. ➝</p>
                        </div>
                    </div>
                </div>
                <div className="grid-8 sobre-video ">
                    <PlaySobreSvg />
                </div>
            </div>
            <div className="equipa-m">
                <div className="card container">
                    <div className="eq-cab">
                        <h1 className="titulo">Nossa <span>Equipa</span></h1>
                        <p className="desc">A nossa equipa é formada por profissionais que consideram a excelência, a inovação e a constante evolução de conhecimento factores críticos de sucesso.</p>
                        <p className="desc">Venha programar com a gente e seja um <span>developer</span> a altura.</p>

                    </div>
                    <div className="membro-m">
                        <div className="membro grid-4">
                            {/* <div className="func">
                                <h1>CEO</h1>
                            </div> */}
                            <div className="img">
                                <img className="img-img" src={Gaspar} alt="" />
                            </div>
                            <h1>Gaspar António</h1>
                            <h2>Engenheiro de Software</h2>
                            <span><a target="_blank" rel="noreferrer" href="https://www.facebook.com/ilsongaspar.ferreira"><i className="iconspeck speck-facebook"></i></a></span>
                            <span><a target="_blank" rel="noreferrer" href="https://www.instagram.com/ilson-gaspar"><i className="iconspeck speck-instagram"></i></a></span>
                        </div>
                        <div className="membro grid-4">
                            {/* <div className="func">
                                <h1>CTO</h1>
                            </div> */}
                            <div className="img">
                                <img className="img-img" src={Moser} alt="" />
                            </div>
                            <h1>Moser José</h1>
                            <h2>Programador Fullstack</h2>
                            <span><a target="_blank" rel="noreferrer" href="https://www.facebook.com/moser.jos"><i className="iconspeck speck-facebook"></i></a></span>
                            <span><a target="_blank" rel="noreferrer" href="https://ao.linkedin.com/in/moser-jose"><i className="iconspeck speck-linkedin-sp"></i></a></span>
                            <span><a target="_blank" rel="noreferrer" href="https://www.twitter.com/mosmmy"><i className="iconspeck speck-twitter"></i></a></span>
                            <span><a target="_blank" rel="noreferrer" href="https://www.instagram.com/mosmmy"><i className="iconspeck speck-instagram"></i></a></span>
                            <span><a target="_blank" rel="noreferrer" href="https://www.github.com/moser-jose"><i className="iconspeck speck-github"></i></a></span>
                        </div>
                        <div className="membro grid-4">
                            {/* <div className="func">
                                <h1>COO</h1>
                            </div> */}
                            <div className="img">
                                <img className="img-img" src={Wilson} alt="" />
                            </div>
                            <h1>Simão Mbengui</h1>
                            <h2>Administrador de Sistemas</h2>
                            <span><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/simao-mbengui-36b470b7"><i className="iconspeck speck-linkedin-sp"></i></a></span>
                            <span><a target="_blank" rel="noreferrer" href="https://twitter.com/smbengui"><i className="iconspeck speck-twitter"></i></a></span>
                            <span><a target="_blank" rel="noreferrer" href="https://www.instagram.com/wilsondjulay/"><i className="iconspeck speck-instagram"></i></a></span>

                        </div>
                        <div className="membro grid-4">
                            {/*  <div className="func">
                                <h1>Atendimento ao Cliente</h1>
                            </div> */}
                            <div className="img">
                                <img className="img-img" src={Moser} alt="" />
                            </div>
                            <h1>Moser José</h1>
                            <h2>Programador Fullstack</h2>
                            <span><a target="_blank" rel="noreferrer" href="/"><i className="iconspeck speck-facebook"></i></a></span>
                            <span><a target="_blank" rel="noreferrer" href="/"><i className="iconspeck speck-linkedin-sp"></i></a></span>
                            <span><a target="_blank" rel="noreferrer" href="/"><i className="iconspeck speck-twitter"></i></a></span>
                            <span><a target="_blank" rel="noreferrer" href="/"><i className="iconspeck speck-instagram"></i></a></span>
                            <span><a target="_blank" rel="noreferrer" href="/"><i className="iconspeck speck-github"></i></a></span>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Sobre
