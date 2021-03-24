import React from 'react'
import Footer from '../../components/Main/Footer'
import Home from "../../components/Main/Home"
import Sobre from "../../components/Main/Sobre"
import '../../assets/sass/onSite/App.scss'
import PlayVideo from '../../components/Main/PlayVideo'
import { usePlayContext } from '../../contexts/PlayContext'
const Main = () => {
    const { playBubton, setPlayButton} = usePlayContext();

    const handleFecharClick = () => {
        setPlayButton(false);
    }
    return (
        <>
            {playBubton === true && <PlayVideo fechar={handleFecharClick} />}
            <Home />
            <Sobre />
            <Footer />
        </>
    );
}
export default Main;