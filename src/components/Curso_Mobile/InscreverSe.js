import React from 'react'
import Checkbox from '../Admin/Formulario/Checkbox';
import Input from '../Admin/Formulario/Input';
import TextLoop from "react-text-loop";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function InscreverSe() {
    return (
        <div id="inscrever" className=" insc container-form container-form-l">
            <div className="container">
                <div className="grid-6">
                    <h1 className="titulo">Inscreva-se
                    <span className="agora"> AGORA</span>
                        <span className="vaga">Reserve já a sua vaga</span>
                    </h1>
                    <h1 className="obs"><span>obs:</span> Porfavor, insira informações fidedigas pois
                a nossa equipa irá entrar em contacto consigo.
                </h1>
                    <div className="container-data log-l">
                        <form >
                            <div className="flex-l">
                                <div className="flex-d">
                                    <Input type="text" name="nome" placeholder="" label="Nome *" ></Input>
                                </div>
                                <div className="flex-d">
                                    <Input type="text" name="sobrenome" placeholder="" label="Sobre Nome *" ></Input>
                                </div></div>
                            <div className="flex-l">
                                <div className="flex-d">
                                    <Input type="text" name="telefone" placeholder="" label="Telefone (1) *" ></Input>
                                </div>
                                <div className="flex-d">
                                    <Input type="text" name="sobrenome" placeholder="" label="Telefone (2) " ></Input>
                                </div></div>

                            <Input type="email" name="email" placeholder="" label="E-mail *" ></Input>
                            <Input type="text" name="endereco" placeholder="" label="Endereço *" ></Input>
                            <div className="termos-p">
                                <Checkbox name="computador" label="Possuo um computador *" ></Checkbox>
                                {/* <Checkbox name="programacao" label="Tenho experiência em programação"></Checkbox> */}
                            </div>
                            <div className="termos-p">
                                <Input type="submit" value="Inscrever-se" name="inscrever" placeholder="" label="" ></Input>

                            </div>
                        </form>

                    </div>
                </div>
                <div className="grid-10">

                    <h1>
                        Comece uma nova fase da sua vida como
                <TextLoop interval={2400} springConfig={{ stiffness: 50, damping: 6 }}>
                            <span>
                                programador
                </span>
                            <span>
                                developer
                    </span>
                        </TextLoop>{" "}
                mobile
                    </h1>
                    <p className="futuro"><span>PRIORIZE SUA CARREIRA,</span> invista no seu presente e ganhe no seu futuro.</p>

                    <div className="conta">
                        <div className="numb">
                            <span className="ic"><FontAwesomeIcon icon="phone-alt" /></span>
                            <p><span className="num">(+244)</span> 923819414 </p>
                            <p> <span className="num">(+244)</span> 923818181</p>
                        </div>
                        <p><span className="ic"><FontAwesomeIcon icon="envelope" /></span> geral@mokota.net</p>
                    </div>
                    <div className="redes">
                        <span title="Facebook"><a href="/"><i className="iconspeck speck-facebook"></i></a></span>
                        <span title="Instagram"><a href="https://www.instagram.com/mokota_code/"><i className="iconspeck speck-instagram"></i></a></span>
                        <span title="Twitter"><a href="/"><i className="iconspeck speck-twitter"></i></a></span>
                        <span title="Youtube"><a href="/"><i className="iconspeck speck-youtube"></i></a></span>
                        <span title="Github"><a href="https://github.com/mokota-code"><i className="iconspeck speck-github"></i></a></span>
                    </div>


                    {/*  <div className="mapa">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d972.7648000512846!2d15.744577003614781!3d-12.77466742797554!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1bb77589c4992b13%3A0x2240e84769a24def!2sMediateca%20do%20Huambo!5e0!3m2!1spt-PT!2sao!4v1617986681737!5m2!1spt-PT!2sao" width="600" height="300" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                    </div > */}
                </div>

            </div >
        </div >
    )
}

export default InscreverSe
