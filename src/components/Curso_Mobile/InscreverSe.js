import React from 'react'
import Checkbox from '../Admin/Formulario/Checkbox';
import Input from '../Admin/Formulario/Input';
import TextLoop from "react-text-loop";
function InscreverSe() {
    return (
        <div id="inscrever" className=" container-form container-form-l">
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
                    Comece uma nova fase da sua vida como
                <TextLoop interval={2400} springConfig={{ stiffness: 50, damping: 6 }}>
                        <span>
                            programador
                </span>
                        <span>
                            developer
                    </span>
                    </TextLoop>{" "}
                fullstack

                <p>PRIORIZE SUA CARREIRA Investir no seu futuro profissional vai sair bem mais barato do que você imagina.</p>
                </div>

            </div>
        </div>
    )
}

export default InscreverSe
