import React from 'react'
import WhatsAppIcon from '../../assets/img/whatsapp.svg'
function WhatsApp({numero}) {
    return (
        <div className="whatsapp">
            <span>Deixe uma mensagem no WhatsApp</span>
            <div className="whats">
                <a href={`https://wa.me/${numero}`} target="_blank" rel="noreferrer" ><img src={WhatsAppIcon} alt="Watsapp" /></a>
            </div>
        </div>
    )
}

export default WhatsApp
