import React from 'react'
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { usePlayContext } from '../../contexts/PlayContext';
import Timer from '../Curso_Mobile/Timer'

function Pagamento() {

    const { setEventButon, setPlayButton } = usePlayContext();

    const handleCl = (event) => {
        setEventButon(event.target.id)
        setPlayButton(true)
    }
    return (
        <div id="pagamento" className="pagamento">
            <div className="container">
                <div className="grid-1-3">
                    <div className="grid-en-1">
                        <span>Localização</span>
                        <div className="loca"><p className="loca-text">
                            Mediáteca do Huambo</p>
                            <p className="ende">Rua Governador Calheiro nº 45 Cidade Alta, Huambo</p></div>
                        <div className="data">
                            <p>25/Abril/2021</p>
                            <h3>08:00 às 12:00</h3>
                            <p>27/Maio/2021</p>
                        </div>
                    </div>
                    <Timer></Timer>
                </div>
                <div className="grid-1-3 pag">
                    <h2>Torne-se num developer mobile com esse curso</h2>
                    <ul>
                        <li>Utilize ferramentas incríveis;</li>
                        <li>Desenhe seus próprios aplicativos;</li>
                        <li>São 4 aplicativos reiais;</li>
                        <li>Publique seus apps na Google Play e AppStore;</li>
                        <li>Partilhe seus aplicativos para o mundo todo;</li>
                    </ul>
                    <div>
                        <Link duration={1000} smooth={true} to="inscrever" className="btn-azul">Garantir Vaga Agora</Link>
                        <span onClick={(event) => handleCl(event)} id="playpagamento">Assista o video</span>
                    </div>
                </div>
                <div className="grid-1-3 prestacao">
                    <span className="invest">Investimento do curso</span>
                    <h1>35.000 Kzs <span className="invest">Ou</span></h1>
                    <h3>Duas prestações para o pagamento</h3>
                    <div className="primeira-p">
                        <div className="icon">
                            <span><FontAwesomeIcon icon="hat-wizard" /></span>
                        </div>
                        <div className="texto">
                            <h1>1ª Prestação</h1>
                            <h2>Até o ínicio do curso</h2>
                        </div>
                        <div className="valor">
                            <p>17.500 Kzs</p>
                        </div>
                    </div>
                    <div className="primeira-p segunda-p">
                        <div className="icon">
                            <span><FontAwesomeIcon icon="handshake" /></span>
                        </div>
                        <div className="texto">
                            <h1>2ª Prestação</h1>
                            <h2>Até a 2ª semana</h2>
                        </div>
                        <div className="valor">
                            <p>17.500 Kzs</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Pagamento
