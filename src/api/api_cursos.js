import Algo from '../assets/img/img-curso/algor.png'
import RN from '../assets/img/img-curso/react-native.png'
import Web from '../assets/img/img-curso/web.png'
import LR from '../assets/img/img-curso/laravel.png'
import JS from '../assets/img/img-curso/js.png'
import Node from '../assets/img/img-curso/node.png'
const cursos = [
  {
    titulo: "Lógica de Programação e Algoritmos",
    img: Algo,
    slug: 'logica-de-programacao-e-algoritmos',
    texto: <>
      Neste curso você irá aprender os
      conceitos básicos da programação em três linguagens (C, C# e Java), você irá aprender lógica de
      programação, algoritmos, estruturas de dados (listas, pilhas e árvores)
      e programação orientada a objectos. São mais de 100 exercícios práticos.
    </>,
    categoria: "programação",
    modulo: "4 módulos",
    app: "+100 exercícios",
    icon: "code",
    api: "",
    link: "/cursos/desenvolvimento_de_aplicativos",
    botao: "Saiba mais"
  },
  {
    titulo: "Desenvolvimento de Aplicações Moveis com React Native",
    img: RN,
    slug: "desenvolvimento-de-aplicacoes-moveis-com-react-native",
    texto: <>
      Neste curso completo você irá aprender
      a criar aplicativos nativos
      para Android e iOS, desde
      o zero, passando pelo design
      e a lógica das aplicações
      até a sua implementação.
      Você usará ferramentas incríveis e criará <span>4 apps</span> e <span>3 Api's</span> e publique seus aplicativos.
    </>,
    categoria: "desenvolvimento",
    modulo: "8 módulos",
    app: "4 Apps",
    icon: "lightbulb",
    api: "3 api's",
    link: "",
    botao: "Brevemente"
  },
  {
    img: Web,
    slug: "web-design-completo",
    categoria: "Desenvolvimento",
    titulo: "Web Design Completo",
    texto: <>Esse curso vai lhe ensinar a utilizar as melhores ferramentas de
      produção de sites para criar sites incríveis.
      Desenhe os seus próprios sites, põe a mão na massa e programe cada secção do seu site.
      Use os melhores <span>frameworks front-end</span> do mercado e
      publique os seus trabalhos de forma fácil e segura.</>,
    modulo: "10 módulos",
    app: "3 sites",
    icon: "lightbulb",
    api: "1 api",
    link: "",
    botao: "Brevemente",
  },

  {
    img: LR,
    categoria: "Desenvolvimento",
    slug: "desenvolvimento-de-sistemas-web-com-laravel",
    titulo: "Desenvolvimento de Sistemas Web com Laravel",
    texto: <>
      Neste curso você vai aprender a criar sistemas web
      com o melhor <span>framework</span> <span>php</span> que existe
      no mercado de desenvolvimento. vai poder publicar e gerenciar seus
      sistemas. Vai entender porquê que como desenvolvedor
      você precisa ter o <span>Laravel</span> como solução para os seus projectos.
    </>,
    modulo: "10 módulos",
    app: "3 Sistemas",
    icon: "lightbulb",
    api: "1 api",
    link: "",
    botao: "Brevemente",
  }
  ,
  {
    img: JS,
    categoria: "programação",
    slug: "javascript-es6-completo",
    titulo: "JavaScript ES6+ Completo",
    texto: <>
      Você já pensou em ser programador javascript? Deixar de usar o
      javascript como uma ferramenta que apenas faz a interação entre a página e o usuário
      e passar a utiliza-lo para criação de grandes projectos, principalmente no <span>back-end</span>
      das tuas aplicações? se a resposta é sim, então esse curso é para si. Faça o curso e saiba mais
      sobre essa poderosa linguagem de programação.
    </>,
    modulo: "12 módulos",
    app: "2 sites",
    icon: "code",
    api: "1 api",
    link: "",
    botao: "Brevemente",
  }
  ,
  {
    img: Node,
    categoria: "Desenvolvimento",
    slug: "desenvolvimento-de-sistemas-com-nodejs-react-javascript-mysql",
    titulo: "Desenvolvimento de Sistemas com Node.js + React + Javascript + Mysql",
    texto: <>
      Crie o back-end dos teus
      sistemas web ou aplicações moveis com o <span>Node.js</span> e <span>Javascript</span> puro
      sem complicações de forma fácil e eficaz, publique as suas api's e distribua os seus <span>end-points</span>.
      Torna-te num <span> developer fulstack</span>
    </>,
    modulo: "12 módulos",
    app: "2 Sistemas",
    icon: "lightbulb",
    api: "2 api's",
    link: "",
    botao: "Brevemente",
  }

]
export default cursos

