import React from 'react'

function FAQ() {
    return (
        <div id="faq" className="faq">
            <div className="container"><h1>Perguntas Frequentes <span>(FAQ)</span></h1></div>
            <div className="container faq-1">
                <div className="grid-1-3 first">
                    <h2>Não sei programar, posso qualquer curso?</h2>
                    <p> <span>SIM!</span>
                    Não precisa saber programar para fazer os cursos da <span>Mekadir</span>
                    se não sabe, a <span>Mekadir</span> lhe garante que vai se apaixonar
                    por esse mundo maravilhoso </p>
                </div>
                <div className="grid-1-3">
                    <h2>Quanto tempo dura os cursos?</h2>
                    <p>A maioria dos cursos duram <span>oficialmente 1 mês</span> e no momento eles são presenciais, no entanto, se o aluno preferir, pode
                    pedir ajuda ou tirar dúvidas mesmo depois do curso ter terminado. As aulas do curso
                    são de segunda à sexta, e por dia são 4 horas.
                    </p>
                </div>
                <div className="grid-1-3">
                    <h2>O que eu preciso para fazer o curso?</h2>
                    <p>O único requisito que pedimos para fazer o curso. é apenas <span>ter um computador portátil</span>. Não
                    é obrigatório ter conhecimento adicional em programação ou areas ligadas a ela. Tudo que for necessário para
                     o curso, nomeadamente as ferramentas, o professor fará a questão de fornecer aos alunos.</p>
                </div>
                <div className="grid-1-3">
                    <h2>Meus dados (nome, sobre-nome, e-mail, telefone e endereço) estão seguros?</h2>
                    <p><span>SIM!</span> Em nossa plataforma usamos vários mecanismos de segurança para assegurar
                    as informações dos nossos alunos. De salientar que essas informações não
                    são partilhadas em outros serviços, nem com terceiros e são utilizadas apenas internamente. Se poder leia os nossos termos e condições e as nossas
                    políticas de privacidade.
                    </p>
                </div>
                <div className="grid-1-3">
                    <h2>Depois de matricular-me ao curso, como posso tirar algumas dúvidas?</h2>
                    <p>Depois de realizar a matricula, a nossa equipa depois de confirmar a veracidade das informações,
                    adiciona o número de contacto do aluno nos nossos grupos privados tanto no WhatsApp, bem como no Telegram.
                    O aluno ainda pode utilizar os outros meios como Facebook e chamadas telefónicas para tirar as suas dúvidas.
                    </p>
                </div>
                <div className="grid-1-3">
                    <h2>É possível alterar os meus dados de inscrição (nome, sobre-nome, e-mail, telefone e endereço)?</h2>
                    <p><span>SIM!</span> No entanto, nesta primeira fase, para poder alterar as informações
                    usadas no acto da inscrição, deverá entrar em contacto com a nossa equipa no sentido de verificar a veracidade
                    da informação a ser alterada. Numa segunda fase os alunos terão acesso a nossa plataforma e as suas respectivas credenciais de acesso.</p>
                </div>
            </div>
            </div>
    )
}

export default FAQ
