import React from 'react'
import TextLoop from "react-text-loop";
import { Link } from 'react-scroll'
import Header from './Header'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { usePlayContext } from '../../contexts/PlayContext';
import Timer from './Timer';
import Cur from '../../assets/img/img-curso/react.svg'
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
                                    Curso Completo de Desenvolvimento de Aplicações Móveis{/*  com <span className="react">React Native</span> */}
                                    <span className="curs">
                                        Crie aplicativos móveis (Android e IOS) {" "}
                                        <TextLoop interval={2400} springConfig={{ stiffness: 50, damping: 6 }}>
                                            <span className="textloop">
                                                nativas
                                        </span>
                                            <span className="textloop">
                                                híbridas
                                        </span>
                                            <span className="textloop">
                                                da web
                                        </span>
                                        </TextLoop>{" "}
                                    com esse curso.
                                   </span>
                                </h1>
                                <div className="bot">
                                    <Link className="sbr" duration={1000} smooth={true} to="sobre">Saiba mais</Link>
                                    <button onClick={(event) => handleCl(event)} id="playsobre" className="playsobre" >{' '}</button>
                                    <span className="vid">Assista o vídeo</span>
                                </div>
                            </div>
                            <div className="grid-8">
                                <div className="dev">
                                    <img src={Cur} alt="curso react-native" />
                                    <Timer></Timer>
                                    <span className="oportunidade" ><Link duration={1000} smooth={true} to="inscrever">Inscreva-se já</Link></span>
                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home
