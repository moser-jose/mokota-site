import React from 'react'
import Input from '../Admin/Formulario/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Alerta from '../Admin/Formulario/Alerta';
import useForm from '../../hooks/useForm';
import { usePlayContext } from '../../contexts/PlayContext';
import { alunoInscrever } from '../../api/';
export default function Contactos() {
    const nome = useForm('nome', 'Nome');
    const telefone = useForm('telefone', "Telefone (1)");
    const email = useForm('email', 'E-mail');
    const mensagem = useForm('endereco', "Mensagem");
    const assunto = useForm('assunto', "Assunto");
    const { error, setError } = usePlayContext();

    async function handleSubmit(event) {
        event.preventDefault();
        if (nome.validate()  && telefone.validate() && assunto.validate() && email.validate() && mensagem.validate()) {
            const { url, options } = alunoInscrever(1, {
                nome: nome.value,
                telefone_1: telefone.value,
                assunto: mensagem.value,
                email: email.value,
                mensagem: mensagem.value,
            });
            const response = await fetch(url, options);
            response.json().then(f => {
                setError({
                    cod: f.sucesso,
                    mensagem: f.mensagem
                });
            });
        }
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
                        <form action="" onSubmit={handleSubmit}  >
                            <div className="flex-l">
                                <div className="flex-d">
                                    <Input type="text" classN={error && error.type === 'nome' ? 'error-red' : ''} name="nome" placeholder="" label="Nome *" {...nome} ></Input>
                                </div>
                                <div className="flex-d">
                                    <Input type="text" classN={error && error.type === 'telefone1' ? 'error-red' : ''} name="telefone_1" placeholder="" label="Telefone *" {...telefone} ></Input>
                                </div></div>

                                <Input type="text" classN={error && error.type === 'email' ? 'error-red' : ''} name="assunto" placeholder="" label="Assunto *" {...assunto} ></Input>
                            
                            <Input type="text" classN={error && error.type === 'email' ? 'error-red' : ''} name="email" placeholder="" label="E-mail *" {...email} ></Input>
                            <Input type="textarea" classN={error && error.type === 'endereco' ? 'error-red' : ''} name="mensagem" placeholder="" label="Mensagem *" {...mensagem} ></Input>
                            
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
                    </span> mobile
                    </h1>
                    <p className="futuro"><span>PRIORIZE SUA CARREIRA,</span> invista no seu presente e ganhe no seu futuro.</p>

                    <div className="conta">
                        <div className="numb">
                            <span className="ic"><FontAwesomeIcon icon="phone-alt" /></span>
                            <p><span className="num">(+244)</span> 923819414 </p>
                            <p> <span className="num">(+244)</span> 923818181</p>
                        </div>
                        <p><span className="ic"><FontAwesomeIcon icon="envelope" /></span> geral@moskotas.com</p>
                    </div>
                    <div className="redes">
                        <span title="Facebook"><a href="/"><i className="iconspeck speck-facebook"></i></a></span>
                        <span title="Instagram"><a href="https://www.instagram.com/mokota_code/"><i className="iconspeck speck-instagram"></i></a></span>
                        <span title="Twitter"><a href="/"><i className="iconspeck speck-twitter"></i></a></span>
                        <span title="Youtube"><a href="/"><i className="iconspeck speck-youtube"></i></a></span>
                        <span title="Github"><a href="https://github.com/mokota-code"><i className="iconspeck speck-github"></i></a></span>
                    </div>

                </div>
            </div>
        </div>
    )
}

