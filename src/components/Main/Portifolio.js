import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SiteHinario from '../../assets/img/hinario.jpg'
import { usePlayContext } from '../../contexts/PlayContext'

export default function Portifolio() {
    const { projetos } = usePlayContext();
    const [dados, setDados] = useState(projetos.data);
    const [todos, setTodos] = useState(true);
    const [web, setWeb] = useState(false);
    const [sistema, setSistema] = useState(false);
    const [app, setApp] = useState(false);
    var arr = [];
    const funTodos = () => {
        setTodos(true)
        setWeb(false)
        setSistema(false)
        setApp(false)
        arr = projetos.data.map((el) => {
            return el;
        })
        setDados(arr);
        console.log(arr)
    }
    const funWeb = () => {
        setTodos(false)
        setWeb(true)
        setSistema(false)
        setApp(false)
        arr = projetos.data.filter((el) => {
            return el.num_categoria === 1;
        })
        setDados(arr);
    }
    const funSistema = () => {
        setTodos(false)
        setWeb(false)
        setSistema(true)
        setApp(false)
        arr = projetos.data.filter((el) => {
            return el.num_categoria === 2;
        })
        setDados(arr);
    }
    const funApp = () => {
        setTodos(false)
        setWeb(false)
        setSistema(false)
        setApp(true)
        arr = projetos.data.filter((el) => {
            return el.num_categoria === 3;
        })
        setDados(arr);
    }


    return (

        <div className="portfolio">
            <div className="container">
                <div className="eq-cab">
                    <h1 className="titulo"><span>Nossos</span> Projectos</h1>
                </div>

                <div className="tabs-projetos">
                    <ul>
                        <li onClick={funTodos}>Todos Projectos</li>
                        <li onClick={funWeb}>Páginas Web</li>
                        <li onClick={funSistema}>Sistemas web</li>
                        <li onClick={funApp}>Apps mobile</li>
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
