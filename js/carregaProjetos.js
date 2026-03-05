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
            descricao: `Aplicação web que realiza contagem dinâmicos utilizando HTML, CSS e JavaScript puro, permitindo ao usuário criar múltiplos 
                contadores personalizados, incrementar e decrementar valores individualmente e salvar os dados no navegador por meio do LocalStorage. 
                O projeto aplica programação orientada a objetos com a classe Contador, manipulação dinâmica do DOM, controle de eventos com 
                addEventListener e serialização de dados com JSON, demonstrando gerenciamento de estado no front-end sem uso de frameworks.`,
            iconesHabilidades: [
                htmlHabilidade.icones, cssHabilidade.icones, JavaScriptHabilidade.icones
            ],
            imagem: "../assets/projeto-imagens/contador-personalizado/contador-personalizado.png",
            acesso: "",
            repositoriio: "https://github.com/oliver-will61/contador_personalizado"
        }, 

        {
            nome: "Python Snake",
            descricao: `Releitura moderna do clássico jogo Snake. Este projeto foi desenvolvido durante a faculdade, nas aulas de Lógica de Programação e Algoritmos.
                O jogo foi implementado em Python, utilizando a biblioteca Pygame, e sua arquitetura foi estruturada de forma modular, com organização baseada em classes, 
                O jogo apresenta jogabilidade fluida, visual simples e um código bem organizado. 
                Atualmente está disponível para os sistemas operacionais Windows e Linux.`,
            iconesHabilidades: [
                pythonHabilidade.icones, pygameHabilidade.icones
            ],
            imagem: "../assets/projeto-imagens/python-snake/python-snake.png",
            acesso: "https://github.com/oliver-will61/python-snake",
            repositorio: "https://github.com/oliver-will61/python-snake"
        },
        
        {
            nome: "API Sistema Hospitalar",
            descricao: `API para sistema hospitalar desenvolvida na faculdade durante o período de conclusão de curso. O back-end foi desenvolvido em TypeScript e Express, utilizando MySQL como banco de dados. A API gerencia o fluxo completo de atendimento médico — desde o agendamento de consultas até o gerenciamento de prontuários, exames e prescrições médicas. Destacam-se a implementação de controle de acesso baseado em perfis de usuário, segurança por meio da criptografia de dados sensíveis, prevenção de vulnerabilidades comuns, como SQL Injection, e a criação de uma base sólida para futuras expansões do sistema.`,
            iconesHabilidades: [
                typescriptHabilidade.icones, expressHabilidade.icones, mysqlHabilidade.icones
            ],
            imagem: "../assets/projeto-imagens/api-sistema-hospitalar/api-sistema-hospitalar.png",
            acesso: "https://github.com/oliver-will61/api-sistema-hospitalar",
            repositorio: "https://github.com/oliver-will61/api-sistema-hospitalar"
        },

        {
            nome: "GoodbyePDF",
            descricao: `Projeto open source em desenvolvimento que propõe uma alternativa ao iLovePDF,  oferecendo uma aplicação e API voltadas para conversão e manipulação de arquivos em diferentes formatos.  O backend é desenvolvido em TypeScript utilizando Express, enquanto a camada de processamento e conversão é construída em Python, com suporte de bibliotecas como Pandas para tratamento e estruturação de dados A plataforma permite transformar dados entre múltiplos tipos, como converter arquivos JSON em planilhas Excel `,
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