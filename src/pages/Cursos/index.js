import React from 'react'
import { Link } from 'react-scroll'
import Template from '../../components/Cursos/Template'
import '../../assets/sass/onSite/cursos.scss'
import RN from '../../assets/img/img-curso/react-native.png'
import Algo from '../../assets/img/img-curso/algor.png'
import Web from '../../assets/img/img-curso/web.png'
import Laravel from '../../assets/img/img-curso/laravel.png'
import Header from '../../components/Cursos/Header'
import Footer from '../../components/Curso_Mobile/Footer'
import FAQ from '../../components/Curso_Mobile/FAQ'
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
                        <Link className="link-c" duration={1000} smooth={true} to="cursos">Conheça nossos cursos</Link>
                    </div>

                </div>
            </div>
            <div id="cursos" className="container curs">
                <Template
                    img={RN}
                    categoria="desenvolvimento"
                    titulo="Desenvolvimento de Aplicações Moveis com React Native"
                    texto="Neste curso completo você irá aprender
             a criar aplicativos nativos
              para Android e iOS, desde
               o zero, passando pelo design
                e a lógica das aplicações
                 até a sua implementação.
                  Você criará 4 apps reais."
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
                    texto="Neste curso você irá aprender os 
                conceitos básicos da programação em três linguagens (C, C# e Java), você irá aprender lógica de
                programação, algoritmos, estruturas de dados (listas, pilhas e árvores)
                 e programação orientada a objectos."
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
                    titulo="Desenvolvimento de Aplicações Moveis com React Native"
                    texto="Neste curso completo você irá aprender
             a criar aplicativos nativos
              para Android e iOS, desde
               o zero, passando pelo design
                e a lógica das aplicações
                 até a sua implementação.
                  Você criará 4 apps reais."
                    modulo="8 módulos"
                    app="4 Apps"
                    icon="lightbulb"
                    api="3 api's"
                    link="/cursos/desenvolvimento_de_aplicativos"
                    botao="Saiba mais"
                />
            </div>
            <div id="cursos" className="container curs">
                <Template
                    img={Laravel}
                    categoria="desenvolvimento"
                    titulo="Desenvolvimento de Aplicações Moveis com React Native"
                    texto="Neste curso completo você irá aprender
             a criar aplicativos nativos
              para Android e iOS, desde
               o zero, passando pelo design
                e a lógica das aplicações
                 até a sua implementação.
                  Você criará 4 apps reais."
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
                    titulo="Web Design Completo"
                    texto="Neste curso você irá aprender os 
                conceitos básicos da programação em três linguagens (C, C# e Java), você irá aprender lógica de
                programação, algoritmos, estruturas de dados (listas, pilhas e árvores)
                 e programação orientada a objectos."
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
                    titulo="JavaScript Completo ES6"
                    texto="Neste curso completo você irá aprender
             a criar aplicativos nativos
              para Android e iOS, desde
               o zero, passando pelo design
                e a lógica das aplicações
                 até a sua implementação.
                  Você criará 4 apps reais."
                    modulo="8 módulos"
                    app="4 Apps"
                    icon="lightbulb"
                    api="3 api's"
                    link="/cursos/desenvolvimento_de_aplicativos"
                    botao="Saiba mais"
                />
            </div>
            <Quote />
            <FAQ></FAQ>
            <Footer></Footer>
        </div>
    )
}
