import {listaHabilidades} from "../constants/habilidades.js";

const  habilidadesHTML = document.querySelector('#container-habilidades-icones')

function carregaHabilidades(modo){

    //modo: se o modo for "light" o algoritmo carrega o icones do modo claro

    habilidadesHTML.innerHTML = ""

    for(let i = 0; i < listaHabilidades.length; i++){
        
        if(modo == "light") {
            habilidadesHTML.innerHTML += `
                <div class="habilidades-icones">
                    <img src="${listaHabilidades[i].icones[0].iconeLight}" alt=logo do ${listaHabilidades[i].titulo}>
                    <h4>${listaHabilidades[i].titulo}</h4>
                </div>`            
        }

        else {
            habilidadesHTML.innerHTML += `
                <div class="habilidades-icones">
                    <img src="${listaHabilidades[i].icones[0].iconeDark}" alt=logo do ${listaHabilidades[i].titulo}>
                    <h4>${listaHabilidades[i].titulo}</h4>
                </div>`   
        }
    }
}


export default carregaHabilidades