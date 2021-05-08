import React from 'react'
import Template from '../Cursos/Template'
import '../../assets/sass/onSite/_cursosMain.scss'
import RN from '../../assets/img/img-curso/react-native.png'
import Algo from '../../assets/img/img-curso/algor.png'
import Web from '../../assets/img/img-curso/web.png'
import LR from '../../assets/img/img-curso/laravel.png'
import JS from '../../assets/img/img-curso/js.png'
import Node from '../../assets/img/img-curso/node.png'
import Carousel from 'react-elastic-carousel'
function Cursos() {
    const breakPoints = [
        {
            width: 100,
            itemsToShow: 1,
            showArrows: false

        },
        { width: 600, itemsToShow: 2 },
        { width: 1000, itemsToShow: 3 },
    ];
    return (
        <div className="curso-m">
            <h1 className="h1">Saiba mais sobre os nossos cursos.</h1>
            <div className="container curs">
                <Carousel
                    disableArrowsOnEnd={false}
                    pagination={true}
                    transitionMs={500}
                    breakPoints={breakPoints}
                    focusOnSelect={false}

                >
                    <Template
                        img={RN}
                        categoria="desenvolvimento"
                        titulo="Desenvolvimento de Aplicações Moveis com React Native"
                        texto=""
                        modulo="8 módulos"
                        app="4 Apps"
                        icon="lightbulb"
                        api="3 api's"
                        link="/cursos/desenvolvimento_de_aplicativos"
                        botao="Saiba mais"
                    />
                    <Template
                        img={Algo}
                        categoria="programação"
                        titulo="Lógica de Programação e Algoritmos"
                        texto=""
                        modulo="4 módulos"
                        app="+100 exercícios"
                        icon="code"
                        api=""
                        link=""
                        botao="Brevemente"
                    />
                    <Template
                        img={Web}
                        categoria="Desenvolvimento"
                        titulo="Web Design Completo"
                        texto=""
                        modulo="10 módulos"
                        app="3 sites"
                        icon="lightbulb"
                        api="1 api"
                        link=""
                        botao="Brevemente"
                    />
                    <Template
                        img={LR}
                        categoria="Desenvolvimento"
                        titulo="Desenvolvimento de Sistemas Web com Laravel"
                        texto=""
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
                        texto=""
                        modulo="12 módulos"
                        app="2 sites"
                        icon="code"
                        api="1 api"
                        link=""
                        botao="Brevemente"
                    />
                    <Template
                        img={Node}
                        categoria="Desenvolvimento"
                        titulo="Desenvolvimento de Sistemas com Node.js + React + Javascript + Mysql"
                        texto=""
                        modulo="12 módulos"
                        app="2 Sistemas"
                        icon="lightbulb"
                        api="2 api's"
                        link=""
                        botao="Brevemente"
                    />



                </Carousel>


            </div>
        </div>
    )
}

export default Cursos
