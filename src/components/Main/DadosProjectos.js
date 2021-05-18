import React from 'react'
import Footer from '../Curso_Mobile/Footer'
import IMG from '../../assets/img/hinario.jpg'
import Header from '../Curso_Mobile/HeaderPrivacidade'
import { Link } from 'react-router-dom'
export default function DadosProjectos() {
    return (
        <div className="dados-pr">
            <Header />
            <div className="container pro">
                <div className="grid-10">
                    <a rel="noreferrer" target="_blank" href="https://hinario-adventista.vercel.app/">
                        <img src={IMG} alt=""></img>
                    </a>
                </div>
                <div className="grid-6">

                </div>
            </div>
            <div className="fo">
                <Footer></Footer>
            </div>
        </div>
    )
}
