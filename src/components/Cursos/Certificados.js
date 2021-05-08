import React from 'react'
import Input from '../Admin/Formulario/Input'
import Button from '../Admin/Formulario/Button'
import Header from '../Cursos/HeaderCertificado'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Certificados() {
    return (
        <div className="cert">
            <Header />
            <div className="certificados">
                <div>
                <FontAwesomeIcon className="award" icon="award" />
                    <h1>Confirme a autenticidade do certificado</h1>
                    <p>Os certificados dados pela mekadir possuem uma identificação exclusiva.</p>
                    <form>
                        <Input type="text" placeholder="Introduza o número do certificado"></Input>
                        <Button>Confirmar</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
