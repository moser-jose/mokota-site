import React from 'react'
import Input from './Formulario/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Alerta from '../Main/Formulario/Alerta';
import '../../assets/sass/Formulario.scss';
import useForm from '../../hooks/useForm';
import { useAuthContext } from '../../contexts/AuthContext';
import emailjs from 'emailjs-com';
export default function Contactos() {

    const { error, setError } = useAuthContext();
    const nome = useForm('nome', 'Nome');
    const telefone = useForm('telefone', "Telefone");
    const email = useForm('email', 'E-mail');
    const mensagem = useForm('mensagem', "Mensagem");
    const assunto = useForm('assunto', "Assunto");

    async function handleSubmit(e) {
        e.preventDefault();
        if (nome.validate() && telefone.validate() && assunto.validate() && email.validate() && mensagem.validate()) {
            sendEmail(e);

        }
    }

    const sendEmail = (e) => {

        emailjs.sendForm('googleMekadir', 'template_4wuta9i', e.target, 'user_6jwwZQImmaHLToaXF0Ne5')
            .then((result) => {
                setError({
                    cod: 1,
                    mensagem: ["E-mail enviado"]
                })
            }, (error) => {
                setError({
                    cod: 0,
                    mensagem: ["Algum erro aconteceu."]
                });
            });
    }





    return (
        <div id="contactos" className="contactos insc container-form container-form-l">
            <div className="eq-cab">
                <h1 className="titulo"><span>Entre em </span> Contacto</h1>
            </div>
            <div className="container " style={{ display: 'flex', alignItems: 'center' }}>

                <div className="grid-6">
                    <h1 className="obs"><span>obs:</span> Porfavor, insira informações fidedigas pois
                        a nossa equipa irá entrar em contacto consigo.
                    </h1>
                    <h1 className="obrig">* Campos obrigatórios</h1>
                    {error && <Alerta mensagem={error} />}
                    <div className="container-data log-l">
                        <form name="emailSen" method="post" id="emailSend" onSubmit={handleSubmit}  >
                            <div className="flex-l">
                                <div className="flex-d">
                                    <Input type="text" classN={error && error.type === 'nome' ? 'error-red' : ''} name="nome" placeholder="" label="Nome *" {...nome} ></Input>
                                </div>
                                <div className="flex-d">
                                    <Input type="text" classN={error && error.type === 'telefone' ? 'error-red' : ''} name="telefone" placeholder="" label="Telefone *" {...telefone} ></Input>
                                </div></div>

                            <Input type="text" classN={error && error.type === 'assunto' ? 'error-red' : ''} name="assunto" placeholder="" label="Assunto *" {...assunto} ></Input>

                            <Input type="text" classN={error && error.type === 'email' ? 'error-red' : ''} name="email" placeholder="" label="E-mail *" {...email} ></Input>
                            <Input type="textarea" classN={error && error.type === 'mensagem' ? 'error-red' : ''} name="mensagem" placeholder="" label="Mensagem *" {...mensagem} ></Input>

                            <div className="submit">
                                <Input type="submit" value="Enviar" name="inscrever" placeholder="" label="" ></Input>

                            </div>
                        </form>
                    </div>


                </div>
                <div className="grid-10">
                    <h1>
                        Comece uma nova fase da sua vida como
                        <span className="developer">
                            #programador👨🏻‍💻
                        </span>
                    </h1>
                    <p className="futuro"><span>PRIORIZE SUA CARREIRA</span> invista no seu presente e ganhe no seu futuro.</p>

                    <div className="conta">
                        <div className="numb">
                            <span className="ic"><FontAwesomeIcon icon="phone-alt" /></span>
                            <p><span className="num">(+244)</span> 923819414 </p>
                            <p> <span className="num">(+244)</span> 923818181</p>
                        </div>
                        <p><span className="ic"><FontAwesomeIcon icon="envelope" /></span> geral@mekadir.com</p>
                    </div>
                    <div className="redes">
                        <span title="Facebook"><a href="/"><i className="iconspeck speck-facebook"></i></a></span>
                        <span title="Instagram"><a href="https://www.instagram.com/mekadir-oficial/"><i className="iconspeck speck-instagram"></i></a></span>
                        <span title="Twitter"><a href="/"><i className="iconspeck speck-twitter"></i></a></span>
                        <span title="Youtube"><a href="/"><i className="iconspeck speck-youtube"></i></a></span>
                        <span title="Github"><a href="https://github.com/mekadir-oficial"><i className="iconspeck speck-github"></i></a></span>
                    </div>

                </div>
            </div>
        </div>
    )
}

