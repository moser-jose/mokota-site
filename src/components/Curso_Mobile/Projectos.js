import React, { useState } from 'react'
import KumbonLogin from '../../assets/img/img-curso/projetos/kumbon/Login.svg'
import KumbonHome from '../../assets/img/img-curso/projetos/kumbon/Home.svg'
import KumbonMapa from '../../assets/img/img-curso/projetos/kumbon/Mapa.svg'
import KumbonBancoMapa from '../../assets/img/img-curso/projetos/kumbon/Mapa-Banco.svg'

import CalculadoraLight from '../../assets/img/img-curso/projetos/calculadora/Home-Light.svg'
import CalculadoraDark from '../../assets/img/img-curso/projetos/calculadora/Home-Dark.svg'
import Calculadora from '../../assets/img/img-curso/calculadora.jpg'
import Covid from '../../assets/img/img-curso/covid.jpg'
function Projectos() {
    const [calculadora, SetCalculadora] = useState(1);
    const [covid, SetCovid] = useState(0);
    const [kumbon, SetKumbon] = useState(0);
    const [camida, SetCamida] = useState(0);


    const calculadoraFunct = () => {
        SetCalculadora(1);
        SetCovid(0);
        SetKumbon(0);
        SetCamida(0);
    }
    const covidFunct = () => {
        SetCalculadora(0);
        SetCovid(1);
        SetKumbon(0);
        SetCamida(0);
    }
    const kumbonFunct = () => {
        SetCalculadora(0);
        SetCovid(0);
        SetKumbon(1);
        SetCamida(0);
    }
    const camidaFunct = () => {
        SetCalculadora(0);
        SetCovid(0);
        SetKumbon(0);
        SetCamida(1);
    }




    return (
        <div id="projectos" className="container projectos">
            <h1><span>Projectos</span> do curso</h1>
            <p className="text">Veja os projectos abaixo e esteja por dentro das aplicações que iremos desenvolver durante o curso.</p>
            <ul>
                <li className={calculadora === 1 ? 'selected' : ''} onClick={calculadoraFunct}>Calculadora</li>
                <li className={covid === 1 ? 'selected' : ''} onClick={covidFunct}>Covid-19 Tracker</li>
                <li className={kumbon === 1 ? 'selected' : ''} onClick={kumbonFunct}>KumbOn</li>
                <li className={camida === 1 ? 'selected' : ''} onClick={camidaFunct}>Camida</li>
            </ul>
            <div className={calculadora === 1 ? 'pro-v' : 'projecto-1 '}>

                <div className="img">
                    <img src={CalculadoraLight} alt="calculadora" />
                    <img src={CalculadoraDark} alt="calculadora" />
                </div>
                <p>Com o App Calculadora você estará por dentro do framework react-native, vai saber como funciona e como podem ser criadas as aplicações para android e ios.
                </p>
            </div>
            <div className={covid === 1 ? 'pro-v' : 'projecto-1 '}>
                <img src={Covid} alt="covid-19" />
                <div className="img">

                </div>
                <p>Com a criação desse app, a ideia é estar informado sobre o estado da Covid-19 em Angola e ao redor do mundo,
                com Temas light, dark e opções de idiomas.
                </p>
            </div>
            <div className={kumbon === 1 ? 'pro-v' : 'projecto-1 '}>
                <div className="img">
                    <img src={KumbonLogin} alt="Kumbon" />
                    <img src={KumbonHome} alt="Kumbon" />
                    <img src={KumbonMapa} alt="Kumbon" />
                    <img src={KumbonBancoMapa} alt="Kumbon" />
                </div>
                <p>A ídeia da criação desse aplicativo é incentivar a resolução de
                    problemas que enfrentamos diariamente, em particular as enchentes nos multicaixas.</p>
            </div>
            <div className={camida === 1 ? 'pro-v' : 'projecto-1 '}>

            </div>



        </div>
    )
}

export default Projectos
