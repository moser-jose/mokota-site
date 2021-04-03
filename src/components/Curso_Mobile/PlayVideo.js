import React from 'react';
import ReactPlayer from "react-player/youtube";
import { usePlayContext } from '../../contexts/PlayContext'

function PlayVideo({ fechar }) {
    const { eventButon } = usePlayContext();
    let url = '';
    if (eventButon === "playsobre") {
        url = 'https://vimeo.com/291715535';
    }
    else if (eventButon === 'playcurso') {
        url = 'http://www.youtube.com/watch?v=GNBkpYtG0y8&origin=http://localhost:3000'
    }
    else if (eventButon === 'playemp') {
        url = 'http://www.youtube.com/embed/-CxIGiUBFWk?showinfo=0&enablejsapi=1&origin=https://github.com/'
    }
    else if (eventButon === 'playpagamento') {
        url = 'http://www.youtube.com/embed/-CxIGiUBFWk?showinfo=0&enablejsapi=1&origin=https://github.com/'
    }
    function handleFecharClick({ target, currentTarget }) {
        if (target === currentTarget) {
            fechar();
        }
    }




    return (
        <div onClick={handleFecharClick} className="modal-video">
            <div className="corpo-modal">
                <span title="Fechar Video" onClick={handleFecharClick}>+</span>
                <ReactPlayer
                    playing={true}
                    url={url}
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    )
}

export default PlayVideo
