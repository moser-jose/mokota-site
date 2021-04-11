import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Duvidas() {
    return (
        <div className="duvidas">
            <div className="container">
                <div className="grid-4">
                    <span>
                        <FontAwesomeIcon className="icon" icon="award" />
                    </span>

                    <h1>Certificados</h1>
                    <p>Depois da conclusão do curso, todos formados têm direito ao certificado homologado pelo INEFOP</p>
                </div>
                <div className="grid-4">
                    <span>
                        <FontAwesomeIcon className="icon" icon="headset" />
                    </span>
                    <h1>Suporte Para Dúvidas</h1>
                    <p>A nossa equipa está preparada para tirar qualquer dúvida durante o curso.
                    Via Telefonica, E-mail, WhatsApp, Telegram, Facebook, ou presencialmente.
                    </p>
                </div>
                <div className="grid-4">
                    <span>
                        <FontAwesomeIcon className="icon" icon="chalkboard-teacher" />

                    </span>
                    <h1>Aulas Presenciais</h1>
                    <p>Nesta fase as aulas para o curso são presenciais, onde o aluno pode interagir pessoalmente
                        com o professor. On-line (Brevemente)
                    </p>
                </div>
                <div className="grid-4">
                    <span>
                        <FontAwesomeIcon className="icon" icon="users" />

                    </span>
                    <h1>Grupo Especializado</h1>
                    <p>Você participará do nosso grupo privado de alunos,
                    para poder trocar ideias, projectos
                        tirar dúvidas e muito mais.</p>
                </div>
            </div>
        </div>
    )
}

export default Duvidas
