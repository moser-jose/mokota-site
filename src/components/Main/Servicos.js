import React from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Servicos() {
    return (
        <div id="servicos" className="servicos">
            <div className="eq-cab">
                <h1 className="titulo"><span>Nossos</span> Serviços</h1>
            </div>
            <div className="container">
                <div className="container contn">
                    <div className="grid-8 grid8">
                        <FontAwesomeIcon className="ic-serv" icon="graduation-cap" />
                        <h1>Formação Profissional</h1>
                        <p>Faça um de nossos cursos, seja um profissional
                            no desenvolvimento <span>web</span> <span>mobile</span> <span>desktop</span> e domine todos os 
                            <span>frameworks</span> da actualidade.

                        </p>
                    </div>
                    <div className="grid-8 grid8">
                        <FontAwesomeIcon className="ic-serv" icon="mobile-alt" />
                        <h1>Criação de Aplicativos Moveis</h1>
                        <p>Crie com a gente os aplicativos moveis para a sua empresa ou para
                             o seu negócio e publique nas lojas de aplicativos <span>Google Play</span> e <span>AppStore</span>
                        </p>
                    </div>
                </div>
                <div className="container contn">
                    <div className="grid-8 grid8">
                        <FontAwesomeIcon className="ic-serv" icon="laptop-code" />
                        <h1>Criação de Sites e Sistemas Web</h1>
                        <p>Deixe a sua empresa online através da criação de um <span>site</span> e optimize o 
                        seu negócio e a interação com os seus clientes através de um <span>sistema de gestão</span> seguro, eficiente
                        e que integra as melhores
                        ferramentas para impulsionar a sua marca.</p>
                    </div>
                    <div className="grid-8 grid8"></div>
                </div>
            </div>
            <Link className="link" to="contacto">Entre em contacto</Link>
        </div>
    )
}

export default Servicos
