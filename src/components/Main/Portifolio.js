import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SiteHinario from '../../assets/img/hinario.jpg'
import { useAllContext } from '../../contexts/AllContexts';

export default function Portifolio() {
    const { projetos } = useAllContext();
    const [dados, setDados] = useState(projetos.data);

    const filter = (categoria) => {
        return projetos.data.filter((el) => {
            return el.num_categoria === categoria;
        })
    }
    const funProjectos = (categoria) => {
        if (categoria === 1)
            setDados(filter(1));
        else if (categoria === 2)
            setDados(filter(2));
        else if (categoria === 3)
            setDados(filter(3));
        else
            setDados(projetos.data);
    }

    return (

        <div className="portfolio">
            <div className="container">
                <div className="eq-cab">
                    <h1 className="titulo"><span>Nossos</span> Projectos</h1>
                </div>

                <div className="tabs-projetos">
                    <ul>
                        <li onClick={() => funProjectos(0)}>Todos Projectos</li>
                        <li onClick={() => funProjectos(1)}>Páginas Web</li>
                        <li onClick={() => funProjectos(2)}>Sistemas web</li>
                        <li onClick={() => funProjectos(3)}>Apps mobile</li>
                        <div id="animacao" className="todos-p"></div>
                    </ul>
                    <div className="projetos-todos">
                        {
                            dados.map((data) => (
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
