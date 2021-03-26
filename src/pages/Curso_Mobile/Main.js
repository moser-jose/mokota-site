import React from 'react'
import Footer from '../../components/Curso_Mobile/Footer'
import Home from "../../components/Curso_Mobile/Home"
import Sobre from "../../components/Curso_Mobile/Sobre"
import '../../assets/sass/onSite/App.scss'
import PlayVideo from '../../components/Curso_Mobile/PlayVideo'
import { usePlayContext } from '../../contexts/PlayContext'
import InscreverSe from '../../components/Curso_Mobile/InscreverSe'
import PreProjetos from '../../components/Curso_Mobile/PreProjetos'
import Modulos from '../../components/Curso_Mobile/Modulos'
const Main = () => {
    const { playBubton, setPlayButton } = usePlayContext();

    const handleFecharClick = () => {
        setPlayButton(false);
    }
    return (
        <>
            {playBubton === true && <PlayVideo fechar={handleFecharClick} />}
            <Home />
            <Sobre />
            <PreProjetos></PreProjetos>
            <Modulos></Modulos>
            <InscreverSe />
            <Footer />
        </>
    );
}
export default Main;