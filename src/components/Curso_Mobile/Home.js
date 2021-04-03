import React from 'react'
import TextLoop from "react-text-loop";
import { Link } from 'react-scroll'
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

                <div className="carousel">
                    <div className="carousel-c">
                        <div className="part container">
                            <div className="mov grid-8">
                                <h1>
                                    Crie aplicações moveis (Android e IOS) {" "}
                                    <TextLoop interval={2400} springConfig={{ stiffness: 50, damping: 6 }}>
                                        <span>
                                            nativas
                                        </span>
                                        <span>
                                            híbridas
                                        </span>
                                        <span>
                                            da web
                                        </span>
                                    </TextLoop>{" "}
                                    com esse curso.
                                </h1>
                                <div className="bot">
                                <Link className="sbr" duration={1000} smooth={true} to="sobre">Saiba mais</Link>
                                    <button onClick={(event) => handleCl(event)} id="playsobre" className="playsobre" >{' '}</button>
                                    <span className="vid">Veja o vídeo</span>
                                </div>
                            </div>
                            <div className="grid-8">

                            </div>
                        </div>
                    </div>

                </div>

                {/*  <div className="carousel-r">
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

                                <a href="/">Inscreva-se</a>

                            </div>
                            <div className="grid-8">

                            </div>
                        </div>
                    </div>
                    <div className="carousel-t">
                        <div className="part">
                            <div className="grid-8">

                            </div>
                            <div className="mov  grid-8">
                                <h1>
                                    Faça o pagamento de forma
                                    <span> segura</span> e <span>em duas prestações.</span>
                                </h1>

                                <div className="bot">
                                    <a className="sbr" href="/">Saiba mais</a>
                                    <button onClick={(event) => handleCl(event)} id="playcurso" className="playsobre" >{' '}</button>

                                    <span className="vid">Veja o vídeo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                 */}
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
