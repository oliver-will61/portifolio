import {categoriaHabilidades} from "../constants/habilidades.js"

const expressHabilidade = categoriaHabilidades.frameworks.find(item => item.titulo == "Express")
const JavaScriptHabilidade = categoriaHabilidades.linguagens.find(item => item.titulo == "JavaScript")
const cssHabilidade = categoriaHabilidades.linguagens.find(item => item.titulo == "CSS3")
const htmlHabilidade = categoriaHabilidades.linguagens.find(item => item.titulo == "HTML")
const pythonHabilidade = categoriaHabilidades.linguagens.find(item => item.titulo == "Python")
const typescriptHabilidade = categoriaHabilidades.linguagens.find(item => item.titulo == "TypeScript")
const mysqlHabilidade = categoriaHabilidades.bancosDeDados.find(item => item.titulo === "MySQL")
const pandasHabilidade = categoriaHabilidades.bibliotecas.find(item => item.titulo === "Pandas");
const pygameHabilidade = categoriaHabilidades.bibliotecas.find(item => item.titulo === "Pygame")
const nodeHabilidade = categoriaHabilidades.frameworks.find(item => item.titulo === "Node.JS")

function carregaCardProjetos(mode){
    const listaProjetos = [
        {
            nome: "Sistema de Gerenciamento de Mensagens de Atendimento",
            descricao: `Plataforma que gerencia mensagens de atendimento, consumindo uma API.

                Projeto desenvolvido para a Renner, cujo objetivo era armazenar e recuperar, via API, mensagens de atendimento. O uso da plataforma permite que o usuário não precise mais utilizar bloco de notas para armazenar ou escrever repetidamente as mesmas mensagens.

                Foram utilizados HTML, CSS e JavaScript no front-end, e Node.js com Express no back-end.

                Na plataforma, existe uma lista de mensagens na qual o usuário pode selecionar as desejadas. Além disso, o usuário pode criar atalhos para as mensagens, o que facilita a busca, e também pode criar novas mensagens, que ficam armazenadas no servidor.

                A plataforma proporciona agilidade, eficiência e padronização para a empresa.`,
            iconesHabilidades: [
                htmlHabilidade.icones, cssHabilidade.icones, expressHabilidade.icones, nodeHabilidade.icones 
            ],
            imagem: "assets/projeto-imagens/csc-ti-sistema-de-logs-de-atendimento/csc-ti-logs.jpeg",
            acesso: "",
            repositorio: ""
        },

        {
            nome: "Extensão de autopreenchimento dos Correios",
                descricao: `Extensão para o Chrome que automatiza o preenchimento do formulário de coleta dos Correios. Desenvolvida para as Lojas Renner S.A., a extensão permite que o usuário informe dados como número da loja, objeto da coleta, nota fiscal e informações do solicitante. Ao clicar no botão, é consumida uma API que busca o endereço com base no número da loja informado e preenche automaticamente todos os campos do formulário, gerando mais rapidez, precisão e redução de erros no processo.
                Foram utilizadas tecnologias como HTML, CSS e JavaScript no front-end, e Node.js com Express no back-end.`,
            iconesHabilidades: [
                htmlHabilidade.icones, cssHabilidade.icones, expressHabilidade.icones, nodeHabilidade.icones 
            ],
            imagem: "assets/projeto-imagens/csc-ti-extensao-correios/csc-ti-extensao-correios.jpeg",
            acesso: "",
            repositorio: ""
        },

        {
            nome: "Contador Personalizado",
            descricao: `Aplicação web que realiza contagem dinâmicos utilizando HTML, CSS e JavaScript puro, permitindo ao usuário criar múltiplos 
                contadores personalizados, incrementar e decrementar valores individualmente e salvar os dados no navegador por meio do LocalStorage. 
                O projeto aplica programação orientada a objetos com a classe Contador, manipulação dinâmica do DOM, controle de eventos com 
                addEventListener e serialização de dados com JSON, demonstrando gerenciamento de estado no front-end sem uso de frameworks.`,
            iconesHabilidades: [
                htmlHabilidade.icones, cssHabilidade.icones, JavaScriptHabilidade.icones
            ],
            imagem: "assets/projeto-imagens/contador-personalizado/contador-personalizado.png",
            acesso: "https://github.com/oliver-will61/contador_personalizado",
            repositorio: "https://github.com/oliver-will61/contador_personalizado"
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
            imagem: "assets/projeto-imagens/python-snake/python-snake.png",
            acesso: "https://github.com/oliver-will61/python-snake",
            repositorio: "https://github.com/oliver-will61/python-snake"
        },
        
        {
            nome: "API Sistema Hospitalar",
            descricao: `API para sistema hospitalar desenvolvida na faculdade durante o período de conclusão de curso. O back-end foi desenvolvido em TypeScript e Express, utilizando MySQL como banco de dados. A API gerencia o fluxo completo de atendimento médico — desde o agendamento de consultas até o gerenciamento de prontuários, exames e prescrições médicas. Destacam-se a implementação de controle de acesso baseado em perfis de usuário, segurança por meio da criptografia de dados sensíveis, prevenção de vulnerabilidades comuns, como SQL Injection, e a criação de uma base sólida para futuras expansões do sistema.`,
            iconesHabilidades: [
                typescriptHabilidade.icones, expressHabilidade.icones, mysqlHabilidade.icones
            ],
            imagem: "assets/projeto-imagens/api-sistema-hospitalar/api-sistema-hospitalar.png",
            acesso: "https://github.com/oliver-will61/projeto-backend-sistema-hospitalar",
            repositorio: "https://github.com/oliver-will61/projeto-backend-sistema-hospitalar"
        },

        {
            nome: "GoodbyePDF",
            descricao: `Projeto open source em desenvolvimento que propõe uma alternativa ao iLovePDF,  oferecendo uma aplicação e API voltadas para conversão e manipulação de arquivos em diferentes formatos.  O backend é desenvolvido em TypeScript utilizando Express, enquanto a camada de processamento e conversão é construída em Python, com suporte de bibliotecas como Pandas para tratamento e estruturação de dados A plataforma permite transformar dados entre múltiplos tipos, como converter arquivos JSON em planilhas Excel `,
            iconesHabilidades: [
                typescriptHabilidade.icones, expressHabilidade.icones, pythonHabilidade.icones, pandasHabilidade.icones
            ],
            imagem: "assets/projeto-imagens/goodbyepdf/goodbyepdf.png",
            acesso: "https://github.com/oliver-will61/goodbyepdf_api",
            repositorio: "https://github.com/oliver-will61/goodbyepdf_api"
        }
    ]

    const containerProjetoCardHTML = document.querySelector("#container-projeto-card")
    containerProjetoCardHTML.innerHTML = ""
    
    //carrega os cards de projetos no HTML 
    for (let i = 0; i < listaProjetos.length; i++) {
        containerProjetoCardHTML.innerHTML += 

            `<div class="projeto-card" id="projeto-card">
                <h4>${listaProjetos[i].nome}</h4>
                <img src ="${listaProjetos[i].imagem}" class="imagem-projeto">
                <p>${listaProjetos[i].descricao}</p>

                <div class="icones-container" id="icones-container"></div>
            </div>`

        const iconesContainer = document.querySelectorAll("#icones-container") 

        //carrega os icones das habilidades no HTML

        for(let y = 0; y < listaProjetos[i].iconesHabilidades.length; y++){    

            if(mode == "light") {
                iconesContainer[i].innerHTML += 
                    `<img src = "${listaProjetos[i].iconesHabilidades[y][0].iconeLight}">`                                
            } 
            
            else {
                iconesContainer[i].innerHTML += 
                    `<img src = "${listaProjetos[i].iconesHabilidades[y][0].iconeDark}">`
            }
        }

        // carrega botões de ACESSO e REPOSITORIO
        const projetoCardHTML = document.querySelectorAll('#projeto-card')

        projetoCardHTML[i].innerHTML += 
            `<div class="container-btn-card">

                <a href="${listaProjetos[i].acesso}" class="btn" target="_blank">ACESSAR</a>

                <a href="${listaProjetos[i].repositorio}"  class="btn btn-alt" target="_blank">REPOSITÓRIO</a>

            </div>`
    }
    
}

export default carregaCardProjetos