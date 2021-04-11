import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    return (

        <footer>
            <div className="footer container">
                <div className="foot-p">
                    <p className="copy">
                        Copyright &copy; {new Date().getFullYear()} <a href="/">mokota</a>. Todos direitos reservados
                    </p>
                    <p className="termos"><span> <Link to="/termos">Termos e Condições</Link></span> | <span><Link to="/privacidade">Privacidade</Link></span></p>
                    <div className="redes-s">
                        <span title="Facebook"><a href="/"><i className="iconspeck speck-facebook"></i></a></span>
                        <span title="Instagram"><a href="https://www.instagram.com/mokota_code/"><i className="iconspeck speck-instagram"></i></a></span>
                        <span title="Twitter"><a href="/"><i className="iconspeck speck-twitter"></i></a></span>
                        <span title="Youtube"><a href="/"><i className="iconspeck speck-youtube"></i></a></span>
                        <span title="Github"><a href="https://github.com/mokota-code"><i className="iconspeck speck-github"></i></a></span>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
