import React from 'react'
import Input from '../Admin/Formulario/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Alerta from '../Admin/Formulario/Alerta';
import useForm from '../../hooks/useForm';
import { usePlayContext } from '../../contexts/PlayContext';
import { alunoInscrever } from '../../api/';

function InscreverSe() {
    const nome = useForm('nome', 'Nome');
    const sobre_nome = useForm('sobre_nome', 'Sobre Nome');
    const telefone_1 = useForm('telefone_1', "Telefone (1)");
    const telefone_2 = useForm();
    const email = useForm('email', 'E-mail');
    const endereco = useForm('endereco', "Endereço");
    const { error, setError } = usePlayContext();
    async function handleSubmit(event) {
        event.preventDefault();
        if (nome.validate() && sobre_nome.validate() && telefone_1.validate() && email.validate() && endereco.validate()) {
            const { url, options } = alunoInscrever(1, {
                nome: nome.value,
                sobre_nome: sobre_nome.value,
                telefone_1: telefone_1.value,
                telefone_2: telefone_2.value,
                email: email.value,
                endereco: endereco.value,
            });
            const response = await fetch(url, options);
            response.json().then(f => {
                setError({
                    cod: f.sucesso,
                    mensagem: [f.mensagem]
                });
            });
        }
    }
    return (
        <div id="inscrever" className=" insc container-form container-form-l">
            <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="grid-6">
                    <h1 className="titulo">Inscreva-se
                    <span className="agora"> AGORA</span>
                        <span className="vaga">Reserve já a sua vaga</span>
                    </h1>
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
                                    <Input type="text" classN={error && error.type === 'sobrenome' ? 'error-red' : ''} name="sobre_nome" placeholder="" label="Sobre Nome *" {...sobre_nome}   ></Input>
                                </div></div>
                            <div className="flex-l">
                                <div className="flex-d">
                                    <Input type="text" classN={error && error.type === 'telefone1' ? 'error-red' : ''} name="telefone_1" placeholder="" label="Telefone (1) *" {...telefone_1} ></Input>
                                </div>
                                <div className="flex-d">
                                    <Input type="text" name="telefone_2" placeholder="" label="Telefone (2) " {...telefone_2}></Input>
                                </div></div>

                            <Input type="text" classN={error && error.type === 'email' ? 'error-red' : ''} name="email" placeholder="" label="E-mail *" {...email} ></Input>
                            <Input type="text" classN={error && error.type === 'endereco' ? 'error-red' : ''} name="endereco" placeholder="" label="Morada *" {...endereco} ></Input>
                            <div className="submit">
                                <Input type="submit" value="Inscrever-se" name="inscrever" placeholder="" label="" ></Input>

                            </div>
                        </form>
                    </div>
                </div>
                <div className="grid-10" >

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


                    {/*   <div className="mapa">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d972.7648000512846!2d15.744577003614781!3d-12.77466742797554!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1bb77589c4992b13%3A0x2240e84769a24def!2sMediateca%20do%20Huambo!5e0!3m2!1spt-PT!2sao!4v1617986681737!5m2!1spt-PT!2sao" width="600" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                    </div > */}
                </div>

            </div >
        </div >
    )
}

export default InscreverSe
