import listaHabilidades from "../constants/habilidades.js"


const nodeHabilidade = listaHabilidades.find(item => item.titulo === "Node.JS")
const expressHabilidade = listaHabilidades.find(item => item.titulo == "Express")
const mongoHabilidade = listaHabilidades.find(item => item.titulo == "MongoDB")

function carregaCardProjetos(){
    const listaProjetos = [
        {
            nome: "PROJETO 1",
            descricao: "Back end e front end da aplicação Natours, projeto desenvolvido no curso Node.js, Express, MongoDB & More: The Complete Bootcamp 2020 do  professor Jonas Schmedtmann na Udemy. O back end foi desenvolvido em  Node e Express, utilizando como banco de dados o MongoDB. O front end  foi desenvolvido em Pug. A aplicação possui tours, usuários e reviews.",
            habilidade: [
                nodeHabilidade.icone, expressHabilidade.icone, mongoHabilidade.icone
            ],
            imagem: "../assets/projeto-imagens/imagemTeste.png"
        }, 

        {
            nome: "PROJETO 2",
            descricao: "Back end e front end da aplicação Natours, projeto desenvolvido no curso Node.js, Express, MongoDB & More: The Complete Bootcamp 2020 do  professor Jonas Schmedtmann na Udemy. O back end foi desenvolvido em  Node e Express, utilizando como banco de dados o MongoDB. O front end  foi desenvolvido em Pug. A aplicação possui tours, usuários e reviews.",
            habilidade: [
                nodeHabilidade.icone, expressHabilidade.icone, mongoHabilidade.icone
            ],
            imagem: "../assets/projeto-imagens/imagemTeste.png"
        },
        
        {
            nome: "PROJETO 3",
            descricao: "Back end e front end da aplicação Natours, projeto desenvolvido no curso Node.js, Express, MongoDB & More: The Complete Bootcamp 2020 do  professor Jonas Schmedtmann na Udemy. O back end foi desenvolvido em  Node e Express, utilizando como banco de dados o MongoDB. O front end  foi desenvolvido em Pug. A aplicação possui tours, usuários e reviews.",
            habilidade: [
                nodeHabilidade.icone, expressHabilidade.icone, mongoHabilidade.icone
            ],
            imagem: "../assets/projeto-imagens/imagemTeste.png"
        },

        {
            nome: "PROJETO 4",
            descricao: "Back end e front end da aplicação Natours, projeto desenvolvido no curso Node.js, Express, MongoDB & More: The Complete Bootcamp 2020 do  professor Jonas Schmedtmann na Udemy. O back end foi desenvolvido em  Node e Express, utilizando como banco de dados o MongoDB. O front end  foi desenvolvido em Pug. A aplicação possui tours, usuários e reviews.",
            habilidade: [
                nodeHabilidade.icone, expressHabilidade.icone, mongoHabilidade.icone
            ],
            imagem: "../assets/projeto-imagens/imagemTeste.png"
        }
    ]

    const containerProjetoCardHTML = document.querySelector("#container-projeto-card")


    //carrega os cards de projetos no HTML 
    for (let i = 0; i < listaProjetos.length; i++) {
        containerProjetoCardHTML.innerHTML += 

            `<div class="projeto-card" id="projeto-card">
                <h3>${listaProjetos[i].nome}</h3>
                <img src =${listaProjetos[i].imagem}>
                <p>${listaProjetos[i].descricao}</p>

                <div class="icones-container" id="icones-container"></div>
            </div>`

        const iconesContainer = document.querySelectorAll("#icones-container") 

        //carrega os icones das habilidades no HTML
        for(let y = 0; y < listaProjetos[i].habilidade.length; y++){    
            iconesContainer[i].innerHTML += 
                `<img src = ${listaProjetos[i].habilidade[y]}>`
        }

        const projetoCardHTML = document.querySelectorAll('#projeto-card')

        projetoCardHTML[i].innerHTML += 
            `<div class="container-btn-card">
                <button class= "btn">ACESSAR</button>
                <button class=" btn btn-alt">REPOSITÓRIO</button>
            </div>`
    }
    
}

export default carregaCardProjetos