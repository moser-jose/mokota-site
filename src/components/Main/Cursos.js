import React from 'react'
import Template from '../Cursos/Template'
import data from '../../api/api_cursos'
import '../../assets/sass/_cursosMain.scss'
import Carousel from 'react-elastic-carousel'
function Cursos() {
    const breakPoints = [
        {
            width: 100,
            itemsToShow: 1,
            showArrows: false
        },
        { width: 600, itemsToShow: 2,showArrows: false },
        
        { width: 1000, itemsToShow: 3 },
    ];
    console.log(data)
    return (
        <div className="curso-m">
            <h1 className="h1">Saiba mais sobre os nossos cursos.</h1>
            <div className="container curs curs-main">
                <Carousel
                    disableArrowsOnEnd={false}
                    pagination={true}
                    transitionMs={500}
                    breakPoints={breakPoints}
                    focusOnSelect={false}
                >
                    {
                       data.map((e, k) => (
                            <Template key={k}
                                img={e.img}
                                categoria={e.categoria}
                                titulo={e.titulo}
                                texto=""
                                modulo={e.modulo}
                                app={e.app}
                                icon={e.icon}
                                api={e.api}
                                link={e.link}
                                botao={e.botao}
                            />
                       ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default Cursos
