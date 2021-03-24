import React from 'react'
import TextLoop from "react-text-loop";
import IMG from '../../assets/img/img-curso/xd-img.jpg';
function PreProjetos() {
    return (
        <div className="pre-p">
            <div className="container">
                <div className="texto-p grid-7">
                    <span className="preparado">Tudo esta preparado...</span>
                    <h2>Torna-se num {" "}
                        <TextLoop interval={2400} springConfig={{ stiffness: 50, damping: 6 }}>
                            <span className="textloop">
                                programador
                            </span>
                            <span className="textloop">
                                developer
                            </span>
                        </TextLoop>{" "} mobile com esse curso</h2>
                    <ul>
                        <li>Durante o curso você vai poder utilizar ferramentas incríveis;</li>
                        <li>Você vai criar não um, nem dois mais três aplicativos reais;</li>
                        <li>Vai poder publicar seus apps na Google Play e AppStore;</li>
                        <li>Vai poder partilhar seus aplicativos para o mundo todo;</li>
                    </ul>

                </div>
                <div className="texto-i grid-9">
                    <img src={IMG} alt="xd"></img>
                </div>
            </div>

        </div>
    )
}

export default PreProjetos
