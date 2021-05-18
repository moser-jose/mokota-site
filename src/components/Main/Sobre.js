import React, { useState } from 'react'
import Moser from '../../assets/img/moser.jpeg'
import Wilson from '../../assets/img/wilson.jpeg'
import PlaySobreSvg from './PlaySobreSvg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                                <><p className="desc">A mokota é empresa especializada no desenvolvimento de soluções tecnologicas personalizadas atendendo a demanda do nosso cliente, nossos projetos se baseiam no desenvolvimento de sistemas informáticos entre outros.</p>
                                    <p className="desc">Actuamos no desenvolvimento de sistemas nos mais variados segmentos como Agronegócio, Automotivo, Energia, IoT, Telecomunicações entre outros, em empresas de diversas áreas de atuação..</p>
                                </> :
                                missao === true ?
                                    <><p className="desc">Em 2017 quando foi lançado o primeiro curso da Danki Code
                                    (Curso Front-End Completo), o objetivo era realmente entregar um material
                                    diferenciado e completo. Anos depois, através do pacote full-stack tornou-se o
                                    curso mais completo,
                                    mais vendido e mais bem avaliado do mercado digital.</p>
                                        <p className="desc">
                                            Nosso objetivo é deixar os cursos super completos
                                            para que o aluno não precise investir nada mais.
                                        </p>
                                    </>
                                    : visao === true ?
                                        <><p className="desc">tem como missão utilizar todo o poder da internet e tecnologia para levar aos seus alunos os melhores cursos de programação e marketing digital.</p>
                                            <p className="desc">Nosso foco é transformar a vida dos alunos através
                                            do conhecimento transmitido em nossos cursos, podendo os estudantes,
                                            utilizarem esse conhecimento para o mercado de trabalho,
                                        negócio próprio ou até mesmo hobby.</p>
                                        </>
                                        : valores === true &&
                                        <><p className="desc">
                                            <ul>
                                                <li>
                                                    Ética</li>
                                                <li>
                                                    Esforço</li>
                                                <li>
                                                    Trabalho em Equipe</li>
                                                <li>
                                                    Respeito</li>
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
                                <li><a href="/"><span className="iconspeck speck-facebook"></span></a></li>
                                <li><a href="https://github.com/mokota-code"><span className="iconspeck speck-github"></span></a></li>
                                <li><a href="/"><span className="iconspeck speck-twitter"></span></a></li>
                                <li><a href="https://www.instagram.com/mokota_code/"><span className="iconspeck speck-instagram"></span></a></li>
                                <li><a href="/"><span className="iconspeck speck-youtube"></span></a></li>
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
                                <img className="img-img" src={Moser} alt="" />
                            </div>
                            <h1>Gaspar António</h1>
                            <h2>Gestor de Projectos</h2>
                            <span><a href="/"><i className="iconspeck speck-facebook"></i></a></span>
                            <span><a href="/"><i className="iconspeck speck-linkedin-sp"></i></a></span>
                            <span><a href="/"><i className="iconspeck speck-twitter"></i></a></span>
                            <span><a href="/"><i className="iconspeck speck-instagram"></i></a></span>
                            <span><a href="/"><i className="iconspeck speck-github"></i></a></span>
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
                            <span><a href="/"><i className="iconspeck speck-facebook"></i></a></span>
                            <span><a href="/"><i className="iconspeck speck-linkedin-sp"></i></a></span>
                            <span><a href="/"><i className="iconspeck speck-twitter"></i></a></span>
                            <span><a href="/"><i className="iconspeck speck-instagram"></i></a></span>
                            <span><a href="/"><i className="iconspeck speck-github"></i></a></span>
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
                            <span><a href="/"><i className="iconspeck speck-facebook"></i></a></span>
                            <span><a href="https://www.linkedin.com/in/simao-mbengui-36b470b7"><i className="iconspeck speck-linkedin-sp"></i></a></span>
                            <span><a href="https://twitter.com/smbengui"><i className="iconspeck speck-twitter"></i></a></span>
                            <span><a href="https://www.instagram.com/wilsondjulay/"><i className="iconspeck speck-instagram"></i></a></span>
                            
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
                            <span><a href="/"><i className="iconspeck speck-facebook"></i></a></span>
                            <span><a href="/"><i className="iconspeck speck-linkedin-sp"></i></a></span>
                            <span><a href="/"><i className="iconspeck speck-twitter"></i></a></span>
                            <span><a href="/"><i className="iconspeck speck-instagram"></i></a></span>
                            <span><a href="/"><i className="iconspeck speck-github"></i></a></span>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Sobre
