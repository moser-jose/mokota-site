import React from 'react'
import Input from '../Admin/Formulario/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Alerta from '../Admin/Formulario/Alerta';
import useForm from '../../hooks/useForm';
import { usePlayContext } from '../../contexts/PlayContext';
import { alunoInscrever } from '../../api/';
import emailjs from 'emailjs-com';
export default function Contactos() {

    const { errorSite, setErrorSite } = usePlayContext();
    const nome = useForm('nome', 'Nome');
    const telefone = useForm('telefone', "Telefone");
    const email = useForm('email', 'E-mail');
    const mensagem = useForm('mensagem', "Mensagem");
    const assunto = useForm('assunto', "Assunto");

    async function handleSubmit(e) {
        e.preventDefault();
        if (nome.validate() && telefone.validate() && assunto.validate() && email.validate() && mensagem.validate()) {
            const { url, options } = alunoInscrever(1, {
                nome: nome.value,
                telefone: telefone.value,
                assunto: mensagem.value,
                email: email.value,
                mensagem: mensagem.value,
            });
            const response = await fetch(url, options);
            response.json().then(f => {
                setErrorSite({
                    cod: f.sucesso,
                    mensagem: f.mensagem
                });

            });
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('googleMekadir', 'template_4wuta9i', e.target, 'user_6jwwZQImmaHLToaXF0Ne5')
            .then((result) => {
                setErrorSite({
                    cod: 1,
                    mensagem: ["email enviado"]
                });
            }, (error) => {
                setErrorSite({
                    cod: 0,
                    mensagem: [error.text]
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
                    {errorSite && <Alerta mensagem={errorSite} />}
                    <div className="container-data log-l">
                        <form name="emailSen" method="post" id="emailSend" onSubmit={sendEmail}  >
                            <div className="flex-l">
                                <div className="flex-d">
                                    <Input type="text" classN={errorSite && errorSite.type === 'nome' ? 'error-red' : ''} name="nome" placeholder="" label="Nome *" {...nome} ></Input>
                                </div>
                                <div className="flex-d">
                                    <Input type="text" classN={errorSite && errorSite.type === 'telefone' ? 'error-red' : ''} name="telefone" placeholder="" label="Telefone *" {...telefone} ></Input>
                                </div></div>

                            <Input type="text" classN={errorSite && errorSite.type === 'assunto' ? 'error-red' : ''} name="assunto" placeholder="" label="Assunto *" {...assunto} ></Input>

                            <Input type="text" classN={errorSite && errorSite.type === 'email' ? 'error-red' : ''} name="email" placeholder="" label="E-mail *" {...email} ></Input>
                            <Input type="textarea" classN={errorSite && errorSite.type === 'mensagem' ? 'error-red' : ''} name="mensagem" placeholder="" label="Mensagem *" {...mensagem} ></Input>

                            <div className="submit">
                                <Input type="submit" value="Enviar" name="inscrever" placeholder="" label="" ></Input>

                            </div>
                        </form>
                    </div>


                </div>
                <div className="grid-10">


                    <h1>
                        Comece uma nova fase da sua vida como
                        <span>
                            developer
                    </span>
                    </h1>
                    <p className="futuro"><span>PRIORIZE SUA CARREIRA,</span> invista no seu presente e ganhe no seu futuro.</p>

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

