import React, { useState, useEffect } from 'react'
import Footer from '../../components/Curso_Mobile/Footer'
import Home from "../../components/Curso_Mobile/Home"
import Sobre from "../../components/Curso_Mobile/Sobre"
import '../../assets/sass/onSite/App.scss'
import PlayVideo from '../../components/Curso_Mobile/PlayVideo'
import { usePlayContext } from '../../contexts/PlayContext'
import InscreverSe from '../../components/Curso_Mobile/InscreverSe'
import PreProjetos from '../../components/Curso_Mobile/PreProjetos'
import Modulos from '../../components/Curso_Mobile/Modulos'
import Projectos from '../../components/Curso_Mobile/Projectos';
import Quote from '../../components/Curso_Mobile/Quote'
import FAQ from '../../components/Curso_Mobile/FAQ'
import Duvidas from '../../components/Curso_Mobile/Duvidas'
import Pagamento from '../../components/Curso_Mobile/Pagamento'
import TapToTop from '../../components/Curso_Mobile/TapToTop';
const Main = () => {
    const { playBubton, setPlayButton } = usePlayContext();
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    const handleFecharClick = () => {
        setPlayButton(false);
    }
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
            <PreProjetos />
            <Modulos />
            <Projectos />
            <Duvidas />
            <Pagamento />
            <InscreverSe />
            <Quote></Quote>
            <FAQ></FAQ>
            {scrollPosition > 50 && <TapToTop></TapToTop>}
            <Footer />
        </>
    );
}
export default Main;