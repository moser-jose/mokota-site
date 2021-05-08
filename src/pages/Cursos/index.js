import React from 'react'
import { Link } from 'react-scroll'
import Template from '../../components/Cursos/Template'
import '../../assets/sass/onSite/cursos.scss'
import RN from '../../assets/img/img-curso/react-native.png'
import Algo from '../../assets/img/img-curso/algor.png'
import JS from '../../assets/img/img-curso/js.png'
import Web from '../../assets/img/img-curso/web.png'
import Laravel from '../../assets/img/img-curso/laravel.png'
import Node from '../../assets/img/img-curso/node.png'
import Header from '../../components/Cursos/Header'
import Footer from '../../components/Curso_Mobile/Footer'
import FAQ from '../../components/Cursos/FAQ'
import Quote from '../../components/Curso_Mobile/Quote'
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
                <div className="grid-4 gird-curso"></div>
                <div className="grid-4 gird-curso"></div>
                <div className="grid-4 gird-curso"></div>
                <div className="grid-4 gird-curso"></div>
            </div>
            <div id="cursos" className="cursos-mek">

                <h1 className="nossos">Nossos <span>cursos</span></h1>
                <p className="text-c">Nossos cursos são direito ao ponto e práticos do principio ao fim.
                Começe agora uma carreira de developer e cria as suas próprias aplicações web e mobile,
                domine as ferramentas de programação e venha programar com a gente.
                     </p>
                <div className="container curs">

                    <Template
                        img={RN}
                        categoria="desenvolvimento"
                        titulo="Desenvolvimento de Aplicações Moveis com React Native"
                        texto={
                            <>
                                Neste curso completo você irá aprender
                                a criar aplicativos nativos
                                para Android e iOS, desde
                                o zero, passando pelo design
                                e a lógica das aplicações
                                até a sua implementação.
                                Você usará ferramentas incríveis e criará <h3>4 apps</h3> e <h3>3 Api's</h3> e publique seus aplicativos.
                            </>
                        }
                        modulo="8 módulos"
                        app="4 Apps"
                        icon="lightbulb"
                        api="3 api's"
                        link="/cursos/desenvolvimento_de_aplicativos"
                        botao="Saiba mais"
                    />
                    <Template
                        img={Algo}
                        categoria="Programação"
                        titulo="Lógica de Programação e Algoritmos"
                        texto={
                            <>
                                Neste curso você irá aprender os
                                conceitos básicos da programação em três linguagens (C, C# e Java), você irá aprender lógica de
                                programação, algoritmos, estruturas de dados (listas, pilhas e árvores)
                                e programação orientada a objectos. São mais de 100 exercícios práticos.
                        </>}
                        modulo="4 módulos"
                        app="+100 Exercícios"
                        icon="code"
                        api=""
                        link=""
                        botao="Brevemente"
                    />
                    <Template
                        img={Web}
                        categoria="desenvolvimento"
                        titulo="Web Design Completo"
                        texto={<>Esse curso vai lhe ensinar a utilizar as melhores ferramentas de
                        produção de sites para criar sites incríveis.
                        Desenhe os seus próprios sites, põe a mão na massa e programe cada secção do seu site.
                        Use os melhores <h3>frameworks front-end</h3> do mercado e
                        publique os seus trabalhos de forma fácil e segura.</>}
                        modulo="10 módulos"
                        app="3 Sites"
                        icon="lightbulb"
                        api="1 api"
                        link=""
                        botao="Brevemente"
                    />
                </div>
                <div id="cursos" className="container curs cu-t">
                    <Template
                        img={Laravel}
                        categoria="desenvolvimento"
                        titulo="Desenvolvimento de Sistemas Web com Laravel"
                        texto={
                            <>
                                Neste curso você vai aprender a criar sistemas web
                                com o melhor <h3>framework</h3> <h3>php</h3> que existe
                                no mercado de desenvolvimento. vai poder publicar e gerenciar seus
                                sistemas. Vai entender porquê que como desenvolvedor
                                você precisa ter o <h3>Laravel</h3> como solução para os seus projectos.
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
                                e passar a utiliza-lo para criação de grandes projectos, principalmente no <h3>back-end</h3>
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
                                sistemas web ou aplicações moveis com o <h3>Node.js</h3> e <h3>Javascript</h3> puro
                                sem complicações de forma fácil e eficaz, publique as suas api's e distribua os seus <h3>end-points</h3>.
                                Torna-te num <h3> developer fulstack</h3>
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

            </div>
            <Quote />
            <FAQ></FAQ>
            <Footer></Footer>
        </div>
    )
}
