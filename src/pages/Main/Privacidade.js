import React from 'react'
import HeaderPrivacidade from '../../components/Curso_Mobile/HeaderPrivacidade';
import Footer from '../../components/Curso_Mobile/Footer';

function Privacidade() {
    return (
        <>
        <HeaderPrivacidade/>
        <div className="container termos-p">
            <h1>Política de Privacidade</h1>
        <p>Esta política de privacidade foi revista e actualizada em 20/07/2021</p>
        <p>
            Esta política de privacidade descreve as varias formas que a Mekadir utiliza para colecta, armazenamento
             e proteção das suas informações pessoais.
            Ao aceder, se inscrever ou utilizar nossos serviços, você estará concordando com a nossa política de privacidade.
        </p>
        <p>
            No âmbito da segurança das informações pessoais dos nossos utilizadores, somos obrigados a actualizar nossa
            política de privacidade periodicamente. Neste sentido, divulgaremos a versão revisada e actualizada em nosso site.
            No entanto, os nossos utilizadores terão um aviso prévio das alterações feitas na
            política de privacidade, por meio de um e-mail enviado por nós e num período não superior a 30 dias.
            No termino desse período e se não houver nenhuma reclamação por parte dos nossos utilizadores,
            iremos considerar a política de privacidade 'pronta' e 'apta' para ser publicada.
    
        </p>
    
        <p className="lista">#️⃣ 1. Sobre a colecta de Dados 🗃️</p>
        <p>A Mekadir colecta os dados dos utilizadores que visitam o nosso site, e dos utilizadores
            que se inscrevem de forma voluntária na nossa plataforma, para poderem ter acesso algum curso.  </p>
        <p className="lista-p">#️⃣ 1.1 Dados coletados por visitarem o site: </p>
    
        <p>
            Quando o utilizador acessa o nosso site, colectamos alguns dados referentes as informações do dispositivo utilizado para aceder o nosso site como:
            endereço IP, sistema operacional, tipo de navegador. Essas informações utilizamos apenas para estatísticas interna.
        </p>
    
        <p className="lista-p">#️⃣ 1.2 Dados coletados através da inscrição do aluno: </p>
    
        <p>
            Quando o utilizador se regista na nossa plataforma através do formulário de 
            cadastro, coletamos dados como 
                nome, sobre nome,telefone (1), telefone (2) e-mail e endereço, 
                esses dados são obrigatórios para se inscrever num dos cursos ministrados por nós.
        </p>
    
        <p className="lista-p">#️⃣ 1.3 Dados coletados do pagamento de um curso </p>
        <p>
           Os dados referentes ao pagamento de algum curso ministrado pela Mekadir, não é colectado a partir do nosso site.
           Esses dados são recolhidos ou colectados no acto da confirmação do 
           pagamento de algum curso por meio de um membro da nossa equipa para garantir maior tranquilidade e segurança em nossos alunos.
           E esses dados além de serem utilizados para as estatísticas interna, também servem para a Mekadir emitir uma factura referente ao pagamento do curso.
        </p>

        <p className="lista">#️⃣ 2. Sobre a Finalidade dos Dados 🗃️</p>

        <p>Todos os dados que a Mekadir colecta, servem para um fim específico</p>

        <p className="lista-p">#️⃣ 2.1 Finalidade dos dados </p>

        <ul>
            <li> Emitir facturas referentes ao pagamento de um curso;</li>
            <li> Enviar notificações administrativas (mensagens de texto ou e-mail);</li>
            <li> Prestar suporte aos alunos ou utilizadores;</li>
            <li> Enviar notificações sobre novos cursos e promoções;</li>
            <li> Emissão de Certificados de Conclusão;</li>
        </ul>

        <p className="lista-p">#️⃣ 2.2 Google Analytics </p>

        <p>A Mekadir Usa serviços de análise de terceiros, como o Google Analytics em seu site. 
        Esse serviço usa ferramentas de coleta de dados para nos ajudar a analisar o uso do site por parte 
        do usuário, informações tais como a frequência de visitas do usuário, eventos dentro do site e dados 
        sobre uso e desempenho. Usamos estes dados para melhorar o site, entender melhor como o 
        site funciona em diferentes dispositivos e fornecer informações que possam ser de interesse do usuário. </p>
    
    
        <p className="lista">#️⃣ 3.  Compartilhamento de Dados dos alunos ou utilizadores 🗃️</p>
        
        <p>A Mekadir não compartilha nenhum dado dos nossos alunos ou utilizadores que visitam o nosso site 
            com nenhuma empresa de publicidade ou empresas ligadas a publicidade. 
            Temos em mente que essas informações são importantes e damos total liberdade aos nosso alunos e 
            utilizadores de gerirem essas informações de forma particular.  </p>
    
        <p className="lista">#️⃣ 4. Sobre a Segurança dos Dados dos nossos alunos 🗃️</p>

        <p>A Mekadir adota em seu site medidas de segurança adequadas para a proteção contra acesso não autorizado,
        alteração, divulgação ou destruição dos dados pessoais dos nossos alunos. 
        Essas medidas variam com base no tipo e na confidencialidade dos dados. Infelizmente, no entanto, 
        nenhum sistema pode ser 100% seguro. Ainda assim, nossos esforços têm sido 
        dedicados a proteção dos dados dos nossos alunos, 
        utilizando mecanismos e requisitos de segurança mundialmente reconhecidos.
        </p>
        
        <p className="lista">#️⃣ 5. Direitos dos nossos alunos 🗃️</p>

        <p>Os nossos alunos possuem direitos quanto ao uso de seus dados, 
            como a opção de alterar os seus dados, registados na nossa plataforma. 
            Assim como pode optar por não receber mensagens ou alguma notificação por e-mails
            inclusive a opção de eliminar permanentemente os seus dados. No entanto, 
            se for o caso, o aluno deve entrar em contacto com a nossa equipe no sentido de alterar, 
            eliminar ou parar de receber alguma notificação por mensagem ou e-mail.</p>


        <p>Ao utilizar nossos serviços ou aceder ao nosso site, ✅ o aluno ou utilizador concorda com a nossa política de privacidade.</p>
    
        <p>Não use os Serviços caso não concorde com esta Política de Privacidade.<br /></p>
        </div>

        <Footer/>
    
        </>
    )
}

export default Privacidade
