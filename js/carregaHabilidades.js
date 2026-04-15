
// Dicionario que contém as listas de categorias
import {categoriaHabilidades} from "../constants/habilidades.js";
const containerHabilidade = document.querySelectorAll('.container-habilidades');
const containerHabilidadesIcones = document.querySelectorAll('.container-habilidades-icones')

function carregaHabilidades(modo){


    //realiza um loop para cada elemento da classe containerHabilidade
    containerHabilidade.forEach( (secao,indice) => {

    //reseta o  conteiner para evitar duplicação nos icones
    containerHabilidadesIcones[indice].innerHTML = "";

    //puxa o valor do date-categoria, que o nome da categoria
    const categoria = secao.dataset.categoria    
    
    console.log(categoria)

    //realizar um loop para cada elemento na lista no dicionario de categoria
    for( let i = 0; i < categoriaHabilidades[categoria].length; i++){
        
        if(modo == "light") {
            console.log("modo light")
            containerHabilidadesIcones[indice].innerHTML += `
                <div class="habilidades-icones">
                    <img 
                        src="${categoriaHabilidades[categoria][i].icones[0].iconeLight}" 
                        alt=logo do ${categoriaHabilidades[categoria][i].titulo}>

                    <h4>${categoriaHabilidades[categoria][i].titulo}</h4>
                </div>`            
        }

        else {

            console.log("escuro")
            containerHabilidadesIcones[indice].innerHTML += `
                <div class="habilidades-icones">
                    <img 
                        src="${categoriaHabilidades[categoria][i].icones[0].iconeDark}" 
                        alt=logo do ${categoriaHabilidades[categoria][i].titulo}>

                    <h4>${categoriaHabilidades[categoria][i].titulo}</h4>
                </div>`   
            }
        }         

    })

    //modo: se o modo for "light" o algoritmo carrega o icones do modo claro
}

// function escreveContainerHabilidades(temaIcones){

//     // temaIcones pode ser um dos dois valores = iconeLight ou iconeDark

//     const  containerHabilidadesIcones = document.querySelector('#container-habilidades-icones')

//     containerHabilidadesIcones.innerHTML += `
//         <div class="habilidades-icones">
//             <img src="${categoriaHabilidades[i].icones[0][temaIcones]}" alt=logo do ${categoriaHabilidades[i].titulo}>
//             <h4>${categoriaHabilidades[i].titulo}</h4>
//         </div>`   
// }


export default carregaHabilidades