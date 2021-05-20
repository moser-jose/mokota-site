import React from 'react'
import { Link } from 'react-router-dom'
import SiteHinario from '../../assets/img/hinario.jpg'
import { usePlayContext } from '../../contexts/PlayContext'

export default function Portifolio() {
    const { projetos } = usePlayContext();
    return (

        <div className="portfolio">
            <div className="container">
                <div className="eq-cab">
                    <h1 className="titulo"><span>Nossos</span> Projectos</h1>
                </div>

                <div className="tabs-projetos">
                    <ul>
                        <li>Todos</li>
                        <li>Sites</li>
                        <li>Sistemas web</li>
                        <li>Apps mobile</li>
                        <div id="animacao" className="todos-p"></div>
                    </ul>
                    <div className="projetos-todos">
                        {
                            projetos.data.map((data) => (
                                <div className="grid-1-3" key={data.id}>
                                    <img src={
                                        data.foto === 1 ?
                                            SiteHinario :
                                            ''

                                    } alt=""></img>
                                    <div className="saiba-pro">
                                        <h2>{data.categoria}</h2>
                                        <h1>{data.titulo}</h1>
                                        <Link to={`projectos/${data.slug}`} >Saiba mais</Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
