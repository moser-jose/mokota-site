import React from 'react'
import Footer from '../../components/Curso_Mobile/Footer'
import Home from "../../components/Curso_Mobile/Home"
import Sobre from "../../components/Curso_Mobile/Sobre"
import '../../assets/sass/onSite/App.scss'
import PlayVideo from '../../components/Curso_Mobile/PlayVideo'
import { usePlayContext } from '../../contexts/PlayContext'
import InscreverSe from '../../components/Curso_Mobile/InscreverSe'
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
            <InscreverSe />
            <Footer />
        </>
    );
}
export default Main;