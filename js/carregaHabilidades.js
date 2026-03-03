import listaHabilidades from "../constants/habilidades.js";

function carregaHabilidades(){

    const  habilidadesHTML = document.querySelector('#container-habilidades-icones')
    
    for(let i = 0; i < listaHabilidades.length; i++){
        
        habilidadesHTML.innerHTML += `
            <div class="habilidades-icones">
                <img src=${listaHabilidades[i].icone} alt=logo do ${listaHabilidades[i].titulo}>
                <p>${listaHabilidades[i].titulo}</p>
            </div>`
    }
}

export default carregaHabilidades