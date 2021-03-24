import React, { useState, useEffect, useRef } from 'react'

const Alerta = ({ mensagem }) => {
    const [notificacao, setNotificacao] = useState(false);
    const timeRef = useRef(null);
    clearTimeout(timeRef)
    useEffect(() => {
        const ALert = () => {
            if (mensagem[1] !== "") {
                setNotificacao(true);
                timeRef.current = setTimeout(() => {
                    setNotificacao(false)
                }, 3000);
            }
        }
        ALert();
    }, [mensagem])
    const closeAlert = () => {
        setNotificacao(false)
    }
    return (
        <>
            {notificacao === true && <div className={mensagem[0] === 0 ? "alerta-erro" : "alerta-ok"}>
                <div className="mensagem"><span>{mensagem[1]}</span></div>
                <div className="close"><span id="close_err" title="Fechar mensagem" onClick={closeAlert}>+</span></div>
            </div>}
        </>
    )
}

export default Alerta
