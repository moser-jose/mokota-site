import React, { useState, useEffect, useRef } from 'react'


const Alerta = ({ mensagem }) => {
    const [notificacao, setNotificacao] = useState(false);
    useEffect(() => {
        const Alert = () => {
            if (mensagem.cod == 0 || mensagem.cod == 1) {
                setNotificacao(true);
            }
        }
        Alert();
    }, [mensagem])
    const closeAlert = () => {
        setNotificacao(false)
    }
    return (
        <>
            {notificacao === true &&
                mensagem.cod !== 3 &&
                <div className={mensagem.cod === 0 ? "alerta-erro" : mensagem.cod === 1 && "alerta-ok"}>
                    <div className="mensagem"><span>{mensagem.mensagem}</span></div>
                    <div className="close"><span id="close_err" title="Fechar mensagem" onClick={closeAlert}>+</span></div>
                </div>
            }
        </>
    )
}

export default Alerta
