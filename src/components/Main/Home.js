import React from 'react'
import { Link } from 'react-scroll'
import { Link as Linka } from 'react-router-dom'
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
                    autoPlay={false}
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
                                    <div className="home-tex" interval={2400} springConfig={{ stiffness: 50, damping: 6 }}>
                                        <span className="home-tex-span">
                                            tecnológicas
                                        </span>
                                    </div>{" "}
                                    para o seu negócio.
                                </h1>
                                <div className="bot">
                                    <Link to="sobre" className="sbr" duration={1000} smooth={true}>Saiba mais</Link>
                                    <button onClick={(event) => handleCl(event)} id="playsobre" className="playsobre" >{' '}</button>
                                    <span className="vid">Veja o vídeo</span>
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

                                    Comece uma nova fase da sua vida como {" "}
                                    <div className="home-tex" interval={2400} springConfig={{ stiffness: 50, damping: 6 }}>
                                        <span className="home-tex-span">
                                            programador
                                        </span>
                                    </div>{" "}
                                    fullstack

                            </h1>
                                <div className="bot">
                                    <Link to="cursos" duration={1000} className="sbr" smooth={true}>Saiba mais</Link>
                                </div>
                            </div>
                            <div className="grid-8">

                            </div>
                        </div>
                    </div>
                    <div className="carousel-3">
                        <div className="part">
                            <div className="grid-8">

                            </div>
                            <div className="mov grid-8">
                                <h1>
                                    Faça um de nossos cursos e seja um {" "}
                                    <div className="home-tex" interval={2400} springConfig={{ stiffness: 50, damping: 6 }}>

                                        <span className="home-tex-span">
                                            developer
                                        </span>
                                    </div>{" "} eficiente.
                                </h1>

                                <div className="bot">
                                    <a href="/cursos" className="sbr">Ver Cursos</a>
                                    <button onClick={(event) => handleCl(event)} id="playcurso" className="playsobre" >{' '}</button>

                                    <span className="vid">Veja o vídeo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
                <ul className="redes">
                    <li><a href="/"><span className="iconspeck speck-facebook"></span></a></li>
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
