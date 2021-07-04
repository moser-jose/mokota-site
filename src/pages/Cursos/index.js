import React from 'react'
import { Link } from 'react-scroll'
import Template from '../../components/Cursos/Template'
import data from '../../api/api_cursos'
import '../../assets/sass/cursos.scss'
import Header from '../../components/Cursos/Header'
import Footer from '../../components/Curso_Mobile/Footer'
import FAQ from '../../components/Cursos/FAQ'
import Quote from '../../components/Curso_Mobile/Quote'
import Duvidas from '../../components/Curso_Mobile/Duvidas'
export default function index() {
    return (
        <div className="home-c">
            <Header></Header>
            <div className="home-">
                <div className="container">
                    <div className="texto">
                        <h1>Cursos da Mekadir</h1>
                        <p>Todos os cursos que você precisa para se
                            tornar um profissional em programação,
                            fullstack, web full stack e não só, em um único lugar!</p>
                        <p>
                            Faça um de nossos cursos e seja um
                            programador eficiente.
                        </p>
                        <Link className="link-c" absolute={true} duration={1000} smooth={true} to="cursos">Conheça nossos cursos</Link>
                    </div>

                </div>
            </div>
            <div className="container curs-4">
                <Duvidas />
            </div>
            <div id="cursos" className="cursos-mek">

                <h1 className="nossos">Nossos <span>cursos</span></h1>
                <p className="text-c">Nossos cursos são direito ao ponto e práticos do principio ao fim.
                    Começe agora uma carreira de developer e cria as suas próprias aplicações web e mobile,
                    domine as ferramentas de programação e venha programar com a gente.
                </p>
                <div className="container curs">
                    {data && data.map((e, key) => (
                        <Template  key={key}
                            img={e.img}
                            categoria={e.categoria}
                            titulo={e.titulo}
                            texto={e.texto}
                            modulo={e.modulo}
                            app={e.app}
                            icon={e.icon}
                            api={e.api}
                            link={e.link}
                            botao={e.botao}
                        />
                    ))}

                </div>
                {/* <div id="cursos" className="container curs cu-t">
                    <Template
                        img={Laravel}
                        categoria="desenvolvimento"
                        titulo="Desenvolvimento de Sistemas Web com Laravel"
                        texto={
                            <>
                                Neste curso você vai aprender a criar sistemas web
                                com o melhor <span>framework</span> <span>php</span> que existe
                                no mercado de desenvolvimento. vai poder publicar e gerenciar seus
                                sistemas. Vai entender porquê que como desenvolvedor
                                você precisa ter o <span>Laravel</span> como solução para os seus projectos.
                            </>
                        }
                        modulo="10 módulos"
                        app="3 Sistemas"
                        icon="lightbulb"
                        api="1 api"
                        link=""
                        botao="Brevemente"
                    />
                    <Template
                        img={JS}
                        categoria="programação"
                        titulo="JavaScript ES6+ Completo"
                        texto={
                            <>
                                Você já pensou em ser programador javascript? Deixar de usar o
                                javascript como uma ferramenta que apenas faz a interação entre a página e o usuário
                                e passar a utiliza-lo para criação de grandes projectos, principalmente no <span>back-end</span>
                                das tuas aplicações? se a resposta é sim, então esse curso é para si. Faça o curso e saiba mais
                                sobre essa poderosa linguagem de programação.
                            </>
                        }
                        modulo="12 módulos"
                        app="2 Sites"
                        icon="code"
                        api="1 api"
                        link=""
                        botao="Brevemente"
                    />
                    <Template
                        img={Node}
                        categoria="Desenvolvimento"
                        titulo="Desenvolvimento de Sistemas com Node.js + React + Javascript + Mysql"
                        texto={
                            <>
                                Crie o back-end dos teus
                                sistemas web ou aplicações moveis com o <span>Node.js</span> e <span>Javascript</span> puro
                                sem complicações de forma fácil e eficaz, publique as suas api's e distribua os seus <span>end-points</span>.
                                Torna-te num <span> developer fulstack</span>
                            </>
                        }
                        modulo="12 módulos"
                        app="2 Sistemas"
                        icon="lightbulb"
                        api="2 api's"
                        link=""
                        botao="Brevemente"
                    />

                </div>

             */}</div>
            <Quote />
            <FAQ></FAQ>
            <Footer></Footer>
        </div>
    )
}
