import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import Template from '../../components/Cursos/Template'
import data from '../../api/api_cursos'
import '../../assets/sass/cursos.scss'
import Header from '../../components/Cursos/Header'
import Footer from '../../components/Curso_Mobile/Footer'
import FAQ from '../../components/Cursos/FAQ'
import Quote from '../../components/Curso_Mobile/Quote'
import Duvidas from '../../components/Curso_Mobile/Duvidas'
import WhatsApp from '../../components/Curso_Mobile/WhatsApp'
import TapToTop from '../../components/Curso_Mobile/TapToTop'
export default function Main() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
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
            <div className="curs-4">
                <Duvidas />
            </div>
            <div id="cursos" className="cursos-mek">

                <h1 className="nossos">Nossos <span>cursos</span></h1>
                <p className="text-c">Nossos cursos são direito ao ponto e práticos do principio ao fim.
                    Começe agora uma carreira de developer e cria as suas próprias aplicações web e mobile,
                    domine as ferramentas de programação e venha programar com a gente.
                </p>
                <div className="container curs cur-">
                    {data && data.map((e, key) => (
                        <Template key={key}
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
            </div>
            <Quote />
            <FAQ></FAQ>
            {scrollPosition > 50 && <><WhatsApp numero="244923819414" /><TapToTop /></>}
            <Footer></Footer>
        </div>
    )
}
