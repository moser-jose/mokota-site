import React, { useEffect, useState } from 'react'
import Footer from '../../components/Main/Footer'
import Home from "../../components/Main/Home"
import Sobre from "../../components/Main/Sobre"
import '../../assets/sass/onSite/App.scss'
import PlayVideo from '../../components/Main/PlayVideo'
import { usePlayContext } from '../../contexts/PlayContext'
import WhatsApp from '../../components/Curso_Mobile/WhatsApp'
import TapToTop from '../../components/Curso_Mobile/TapToTop'
import Servicos from '../../components/Main/Servicos'
import Cursos from '../../components/Main/Cursos'
import Contactos from '../../components/Main/Contactos'
import Portifolio from '../../components/Main/Portifolio'
import Video from '../../components/Main/Video'
import Quote from '../../components/Curso_Mobile/Quote'
const Main = () => {
    const { playBubton, setPlayButton } = usePlayContext();
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleFecharClick = () => {
        setPlayButton(false);
    }

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
        <>
            {playBubton === true && <PlayVideo fechar={handleFecharClick} />}
            <Home />
            <Sobre />
            <Servicos />
            <Cursos />
            <Video />
            <Portifolio />
            <Contactos />
            <Quote/>
            {scrollPosition > 50 && <><WhatsApp numero="244923819414" /><TapToTop /></>}
           {/*  <Footer /> */}
        </>
    );
}
export default Main;