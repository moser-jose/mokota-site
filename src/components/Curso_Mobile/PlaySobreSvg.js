import React from 'react'
import Play from '../../assets/img/teste.jpg'
import { usePlayContext } from '../../contexts/PlayContext'
function PlaySobreSvg({img}) {
    const { setPlayButton, setEventButon } = usePlayContext();
    const handleCl = (event) => {
        setEventButon(event.target.id)
        setPlayButton(true)
    }
    return (
        <button id="playemp" /* href="#" */ onClick={handleCl}>
            <div className="vd">
            </div>
        </button>
    )
}
export default PlaySobreSvg
