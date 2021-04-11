import React from 'react'
import { Link } from 'react-scroll';
import IMG from '../../assets/img/img-curso/xd-img.jpg';
function PreProjetos() {
   

    return (
        <div className="pre-p">
            <div className="container">
                <div className="texto-p grid-7">
                    <span className="preparado">Tudo esta preparado...</span>
                    <h2>Torne-se num developer mobile com esse curso</h2>
                    <ul>
                        <li>Durante o curso você vai poder utilizar ferramentas incríveis;</li>
                        <li>Você vai poder desenhar seu próprio aplicativo;</li>
                        <li>Você vai criar não um, nem dois mais quatro aplicativos reais;</li>
                        <li>Vai poder publicar seus apps na Google Play e AppStore;</li>
                        <li>Vai poder partilhar seus aplicativos para o mundo todo;</li>
                    </ul>
                    <Link duration={1000} smooth={true} to="projectos" className="btn-azul">Ver projectos do curso</Link>

                </div>
                <div className="texto-i grid-9">
                    <img src={IMG} alt="xd"></img>
                </div>
            </div>

        </div>
    )
}

export default PreProjetos
