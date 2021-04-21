import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    return (

        <footer>
            <div className="footer container">
                <div className="foot-p">
                    <p className="termos"><span> <Link to="/termos">Termos e Condições</Link></span> | <span><Link to="/privacidade">Privacidade</Link></span></p>
                    <div className="redes-s">
                        <span title="Facebook"><a target="_blank" rel="noreferrer" href="/"><i className="iconspeck speck-facebook"></i></a></span>
                        <span title="Instagram"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/mokota_oficial/"><i className="iconspeck speck-instagram"></i></a></span>
                        <span title="Twitter"><a target="_blank" rel="noreferrer" href="/"><i className="iconspeck speck-twitter"></i></a></span>
                        <span title="Youtube"><a target="_blank" rel="noreferrer" href="/"><i className="iconspeck speck-youtube"></i></a></span>
                        <span title="Github"><a target="_blank" rel="noreferrer" href="https://github.com/mokota-oficial"><i className="iconspeck speck-github"></i></a></span>
                    </div>
                    <p className="copy">
                        Copyright &copy; {new Date().getFullYear()} <a href="/">moskotas</a>. Todos direitos reservados
                    </p>

                </div>
            </div>
        </footer>

    )
}

export default Footer
