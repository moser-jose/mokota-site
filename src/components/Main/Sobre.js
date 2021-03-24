import React from 'react'
import Moser from '../../assets/img/moser.jpg'
import PlaySobreSvg from './PlaySobreSvg'

function Sobre() {
    return (
        <section id="sobre" sclass="s-sobre" className="sobre ">

            <div className="animacao-baixo sb container">
                <div className="grid-8 sobrenos animacao-esquerda">
                    <div className="eq-cab">
                        <h1 className="titulo">Sobre <span>Nós</span></h1>
                        <p className="desc">A mokota é empresa especializada no desenvolvimento de soluções tecnologicas personalizadas atendendo a demanda do nosso cliente, nossos projetos se baseiam no desenvolvimento de sistemas informáticos entre outros.</p>
                        <p className="desc">Actuamos no desenvolvimento de sistemas nos mais variados segmentos como Agronegócio, Automotivo, Energia, IoT, Telecomunicações entre outros, em empresas de diversas áreas de atuação..</p>

                        <p className="mais">Assista o nosso video e saiba mais sobre nós. ➝</p>
                        <ul className="redes-sobre">
                            <li><a href="/"><span className="iconspeck speck-facebook"></span></a></li>
                            <li><a href="https://github.com/mokota-code"><span className="iconspeck speck-github"></span></a></li>
                            <li><a href="/"><span className="iconspeck speck-twitter"></span></a></li>
                            <li><a href="https://www.instagram.com/mokota_code/"><span className="iconspeck speck-instagram"></span></a></li>
                            <li><a href="/"><span className="iconspeck speck-youtube"></span></a></li>
                        </ul>
                    </div>
                </div>
                <div className="grid-8 sobre-video animacao-direita ">
                    <PlaySobreSvg />
                </div>
            </div>
            <div className="equipa animacao-baixo">
                <div className="card container">
                    <div className="eq-cab animacao-baixo">
                        <h1 className="titulo">Nossa <span>Equipa</span></h1>
                        <p className="desc">A nossa equipa é formada por profissionais que consideram a excelência, a inovação e a constante evolução de conhecimento fatores críticos de sucesso.</p>
                    </div>
                    <div className="membro grid-4 animacao-baixo  ">
                        <div className="func">
                            <h1>Atendimento ao Cliente</h1>
                        </div>
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
                    <div className="membro grid-4 animacao-baixo">
                        <div className="func">
                            <h1>CEO</h1>
                        </div>
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
                    <div className="membro grid-4 animacao-baixo">
                        <div className="func">
                            <h1>CEO</h1>
                        </div>
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
                    <div className="membro grid-4 animacao-baixo">
                        <div className="func">
                            <h1>Fundador e CEO</h1>
                        </div>
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
        </section>
    )
}

export default Sobre
