import React, { useState, useEffect } from 'react'

const Alerta = ({ mensagem }) => {
    const [notificacao, setNotificacao] = useState(false);
    useEffect(() => {
        const Alert = () => {
            if (mensagem.cod === 0 || mensagem.cod === 1) {
                setNotificacao(true);
            }
            else {
                setNotificacao(false);
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
                    <div className="mensagem"><span>{mensagem.mensagem[0]}</span></div>
                    <div className="close-m"><span id="close_err" title="Fechar mensagem" onClick={closeAlert}>+</span></div>
                </div>
            }
        </>
    )
}

export default Alerta
