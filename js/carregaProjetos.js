import {listaHabilidades} from "../constants/habilidades.js"


const nodeHabilidade = listaHabilidades.find(item => item.titulo === "Node.JS")
const expressHabilidade = listaHabilidades.find(item => item.titulo == "Express")
const mongoHabilidade = listaHabilidades.find(item => item.titulo == "MongoDB")
const JavaScriptHabilidade = listaHabilidades.find(item => item.titulo == "JavaScript")
const cssHabilidade = listaHabilidades.find(item => item.titulo == "CSS3")
const htmlHabilidade = listaHabilidades.find(item => item.titulo == "HTML")
const pythonHabilidade = listaHabilidades.find(item => item.titulo == "Python")
const typescriptHabilidade = listaHabilidades.find(item => item.titulo == "TypeScript")
const mysqlHabilidade = listaHabilidades.find(item => item.titulo === "MySQL")
const pandasHabilidade = listaHabilidades.find(item => item.titulo === "Pandas");
const pygameHabilidade = listaHabilidades.find(item => item.titulo === "Pygame")

function carregaCardProjetos(mode){
    const listaProjetos = [
        {
            nome: "Contador Personalizado",
            descricao: "Aplicação web que realiza contagem dinâmicos utilizando HTML, CSS e JavaScript puro, permitindo ao usuário criar múltiplos contadores personalizados, incrementar e decrementar valores individualmente e salvar os dados no navegador por meio do LocalStorage. O projeto aplica programação orientada a objetos com a classe Contador, manipulação dinâmica do DOM, controle de eventos com addEventListener e serialização de dados com JSON, demonstrando gerenciamento de estado no front-end sem uso de frameworks.",
            iconesHabilidades: [
                htmlHabilidade.icones, cssHabilidade.icones, JavaScriptHabilidade.icones
            ],
            imagem: "../assets/projeto-imagens/contador-personalizado/contador-personalizado.png",
            acesso: "",
            repositoriio: "https://github.com/oliver-will61/contador_personalizado"
        }, 

        {
            nome: "Python Snake",
            descricao: `Python Snake foi um projeto acadêmico no qual desenvolvi uma releitura moderna do clássico jogo Snake, utilizando Python com a biblioteca Pygame. A aplicação conta com ajuste de dificuldade,
                sistema de pontuação com registro de recorde e persistência de dados. O jogo também inclui efeitos sonoros para movimentação e alimentação, além de música de fundo em loop, tornando a jogabilidade mais imersiva.
                A arquitetura foi estruturada de forma modular, com separação em classes responsáveis por nível, cobra, comida, pontuação e menu,  garantindo melhor organização, manutenção e escalabilidade do código. 
                O resultado é uma aplicação com jogabilidade fluida, visual simples e código bem estruturado, demonstrando domínio de Python, lógica de programação, desenvolvimento de jogos e utilização de bibliotecas gráficas.
                O jogo  se encontra disponivel para Windows e Linux`,
            iconesHabilidades: [
                pythonHabilidade.icones, pygameHabilidade.icones
            ],
            imagem: "../assets/projeto-imagens/python-snake/python-snake.png",
            acesso: "https://github.com/oliver-will61/python-snake",
            repositorio: "https://github.com/oliver-will61/python-snake"
        },
        
        {
            nome: "API Sistema Hospitalar",
            descricao: `Projeto para a faculdade que apresenta a implementação de um sistema hospitalar backend,
                desenvolvido para gerenciar o fluxo completo de atendimento médico - desde o
                agendamento de consultas até o gerenciamento de prontuários eletrônicos,
                exames e prescrições médicas.
                Entre os principais objetivos destacam-se: a implementação de controle de
                acesso baseado em perfis de usuário (pacientes, profissionais de saúde e
                administradores), a garantia de segurança através de criptografia de dados
                sensíveis, a prevenção de vulnerabilidades comuns como SQL Injection, e a
                criação de uma base para futuras expansões do sistema.
                A escolha do TypeScript como linguagem de desenvolvimento, combinada com
                a arquitetura monolítica gerenciada pelo Express.js, permitiu a construção de
                uma API RESTful simples e robusta.`,
            iconesHabilidades: [
                typescriptHabilidade.icones, expressHabilidade.icones, mysqlHabilidade.icones
            ],
            imagem: "../assets/projeto-imagens/api-sistema-hospitalar/api-sistema-hospitalar.png",
            acesso: "https://github.com/oliver-will61/api-sistema-hospitalar",
            repositorio: "https://github.com/oliver-will61/api-sistema-hospitalar"
        },

        {
            nome: "GoodbyePDF",
            descricao: `É um projeto open source em desenvolvimento que propõe uma alternativa ao iLovePDF, 
                oferecendo uma aplicação e API voltadas para conversão e manipulação de arquivos em diferentes formatos. 
                A plataforma permite transformar dados entre múltiplos tipos, como converter arquivos JSON em planilhas Excel 
                e vice-versa, facilitando a interoperabilidade entre sistemas e fluxos de dados. 
                O backend é desenvolvido em TypeScript utilizando Express, enquanto a camada de processamento e conversão é 
                construída em Python, com suporte de bibliotecas como Pandas para tratamento e estruturação de dados. 
                A arquitetura separa responsabilidades entre servidor e engine de processamento, garantindo escalabilidade, 
                organização e facilidade de manutenção. O projeto demonstra domínio em desenvolvimento backend, integração 
                entre linguagens, criação de APIs e manipulação avançada de dados.`,
            iconesHabilidades: [
                typescriptHabilidade.icones, expressHabilidade.icones, pythonHabilidade.icones, pandasHabilidade.icones
            ],
            imagem: "../assets/projeto-imagens/goodbyepdf/goodbyepdf.png"
        }
    ]

    const containerProjetoCardHTML = document.querySelector("#container-projeto-card")
    containerProjetoCardHTML.innerHTML = ""
    
    //carrega os cards de projetos no HTML 
    for (let i = 0; i < listaProjetos.length; i++) {
        containerProjetoCardHTML.innerHTML += 

            `<div class="projeto-card" id="projeto-card">
                <h3>${listaProjetos[i].nome}</h3>
                <img src =${listaProjetos[i].imagem} class="imagem-projeto">
                <p>${listaProjetos[i].descricao}</p>

                <div class="icones-container" id="icones-container"></div>
            </div>`

        const iconesContainer = document.querySelectorAll("#icones-container") 

        console.log(listaProjetos[i].iconesHabilidades);
        //carrega os icones das habilidades no HTML

        for(let y = 0; y < listaProjetos[i].iconesHabilidades.length; y++){    

            if(mode == "light") {
                iconesContainer[i].innerHTML += 
                    `<img src = ${listaProjetos[i].iconesHabilidades[y][0].iconeLight}>`                                
            } 
            
            else {
                iconesContainer[i].innerHTML += 
                    `<img src = ${listaProjetos[i].iconesHabilidades[y][0].iconeDark}>`
            }
        }

        // carrega botões de ACESSO e REPOSITORIO
        const projetoCardHTML = document.querySelectorAll('#projeto-card')

        projetoCardHTML[i].innerHTML += 
            `<div class="container-btn-card">
                <button class= "btn">
                    <a href="${listaProjetos[i].acesso}">ACESSAR</a>
                </button>

                <button class=" btn btn-alt">
                    <a href="${listaProjetos[i].repositorio}">REPOSITÓRIO</a>
                </button>
            </div>`
    }
    
}

export default carregaCardProjetos