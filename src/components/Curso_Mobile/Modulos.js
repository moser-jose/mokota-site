import React from 'react'

import JS from '../../assets/img/img-curso/js.svg'
import Rea from '../../assets/img/img-curso/react-c.svg'
import Design from '../../assets/img/img-curso/design-xd.svg'
import Node from '../../assets/img/img-curso/node-m.svg'
import Fire from '../../assets/img/img-curso/fire.svg'
import GitH from '../../assets/img/img-curso/git-h.svg'
import Desenv from '../../assets/img/img-curso/desenv.svg'
import Publ from '../../assets/img/img-curso/publi.svg'
function Modulos() {
    return (
        <div className="modulos">
            <div className="container">
                <h1>Confira os <span>módulos do curso</span></h1>
                <p className="text">São <span>mais de 6 módulos</span>, e <span>4 aplicativos reais</span> para você sair do básico e se tornar um <span>
                    programador mobile altamente capacitado</span> para desenvolver aplicações incríveis.
                    </p>
                <div className="container  mod-l">
                    <div className="grid-4">
                        <img src={Desenv} alt="" />
                    </div>

                    <div className="grid-4">
                        <img src={JS} alt="" />
                    </div>
                    <div className="grid-4">
                        <img src={Rea} alt="" />
                    </div>
                    <div className="grid-4">
                        <img src={Design} alt="" />
                    </div>

                </div>

                <div className="container">
                    <div className="grid-4">
                        <img src={Node} alt="" />
                    </div>
                    <div className="grid-4">
                        <img src={Fire} alt="" />
                    </div>
                    <div className="grid-4">
                        <img src={Publ} alt="" />
                    </div>
                    <div className="grid-4">
                        <img src={GitH} alt="" />
                    </div>
                </div>
                {/*  <p>Com esse curso você vai estudar a fundo cada particularidade das ferramentas
                e a grande maioria dos recursos que eles nos oferecem. Tudo isso seguindo a documentação
                e as melhores práticas de programação, aplicando tudo em diversos exemplos e
                    vendo como isso pode ser implementado numa aplicação real.</p> */}
            </div>
            <div className="prese">
                <div className="container">
                    <p className="text-1">As aulas são presencias</p>
                    <p className="text-1">On-line (Brevemente)</p>
                </div>

            </div>

        </div>
    )
}

export default Modulos
