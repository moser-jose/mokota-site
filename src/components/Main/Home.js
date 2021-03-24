import React from 'react'
import TextLoop from "react-text-loop";
import { Carousel } from 'react-responsive-carousel';
import Header from './Header'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { usePlayContext } from '../../contexts/PlayContext';
function Home() {
    const { setEventButon, setPlayButton } = usePlayContext();

    const handleCl = (event) => {
        setEventButon(event.target.id)
        setPlayButton(true)
    }
    return (
        <>
            <Header />
            <section id="home" sclass="s-home" className="home ">
                <Carousel
                    autoPlay
                    showThumbs={false}
                    showStatus={false}
                    showArrows={false}
                    transitionTime={500}
                    infiniteLoop
                    stopOnHover={false}
                    interval={8000}
                >
                    <div className="carousel-1">
                        <div className="part">
                            <div className="mov grid-8">
                                <h1>
                                    Nós criamos soluções
                                    <TextLoop interval={2400} springConfig={{ stiffness: 50, damping: 6 }}>
                                        <span>
                                            tecnológicas
                                        </span>
                                        <span>
                                            digitais
                                        </span>
                                        <span>
                                            de productividade
                                        </span>
                                    </TextLoop>{" "}
                                    para o seu negócio.
                                </h1>
                                <div className="bot">
                                    <a className="sbr" href="/">Saiba mais</a>
                                    <button onClick={(event) => handleCl(event)} id="playsobre" className="playsobre" >{' '}</button>
                                    <span className="vid">Veja o nosso vídeo</span>
                                </div>
                            </div>
                            <div className="grid-8">

                            </div>
                        </div>
                    </div>
                    <div className="carousel-2">
                        <div className="part">
                            <div className="mov grid-8">

                                <h1>

                                    Comece uma nova fase da sua vida como
                                    <TextLoop interval={2400} springConfig={{ stiffness: 50, damping: 6 }}>
                                        <span>
                                            programador
                                        </span>
                                        <span>
                                            developer
                                        </span>
                                    </TextLoop>{" "}
                                     fullstack
                            </h1>

                                <a href="/">Saiba mais</a>

                            </div>
                            <div className="grid-8">

                            </div>
                        </div>
                    </div>
                    <div className="carousel-3">
                        <div className="part">
                            <div className="grid-8">

                            </div>
                            <div className="mov  grid-8">
                                <h1>
                                    Faça um de nossos cursos e seja um
                                    <TextLoop interval={2400} springConfig={{ stiffness: 50, damping: 6 }}>
                                        <span>
                                            programador
                                        </span>
                                        <span>
                                            developer
                                        </span>
                                    </TextLoop>{" "} eficiente.
                                </h1>

                                <div className="bot">
                                    <a className="sbr" href="/">Ver Cursos</a>
                                    <button onClick={(event) => handleCl(event)} id="playcurso" className="playsobre" >{' '}</button>

                                    <span className="vid">Veja o nosso vídeo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
                <ul className="redes">
                    <li><a href="/"><span className="iconspeck speck-facebook"></span></a></li>
                    <li><a href="https://github.com/mokota-code"><span className="iconspeck speck-github"></span></a></li>
                    <li><a href="/"><span className="iconspeck speck-twitter"></span></a></li>
                    <li><a href="https://www.instagram.com/mokota_code/"><span className="iconspeck speck-instagram"></span></a></li>
                    <li><a href="/"><span className="iconspeck speck-youtube"></span></a></li>
                </ul>
                <div className="fim"></div>
            </section>

        </>
    )
}

export default Home
