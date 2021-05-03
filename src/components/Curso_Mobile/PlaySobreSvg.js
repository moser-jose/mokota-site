import React from 'react'
import { usePlayContext } from '../../contexts/PlayContext'
function PlaySobreSvg() {
    const { setPlayButton, setEventButon } = usePlayContext();
    const handleCl = (event) => {
        setEventButon(event.target.id)
        setPlayButton(true)
    }
    return (
        <button id="playemp" onClick={handleCl}>
            <div className="vd">
            </div>
        </button>
    )
}
export default PlaySobreSvg
