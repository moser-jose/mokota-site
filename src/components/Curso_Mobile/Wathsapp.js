import React from 'react'
import WhatsApp from '../../assets/img/whatsapp.svg'
function Wathsapp({ numero }) {
    return (
        <div className="whatsapp">
            <a href={`https://wa.me/${numero}`} ><img src={WhatsApp} /></a>
        </div>
    )
}

export default Wathsapp
