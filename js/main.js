import carregaHabilidades from './carregaHabilidades.js'
import carregaCardProjetos from './carregaProjetos.js'


const containerModal = document.querySelector("#modal") 
const iconeMenu = document.querySelector('#icone-menu')
const iconeClose =  document.querySelector('#icone-close')
 
const body = document.querySelector('body')

// abre a modal
iconeMenu.addEventListener("click", ()=> {

    containerModal.style.display = "inline"  

    iconeClose.classList.remove("hidde")
    iconeMenu.classList.add ("hidde")

    //impede a rolage do body
    body.style.overflow = "hidden"
})

// fecha modal
iconeClose.addEventListener("click", ()=> {

    containerModal.style.display = "none"  

    iconeMenu.classList.remove("hidde")
    iconeClose.classList.add ("hidde")

    //retorna a rolagem
    body.style.overflow = "auto"
})



// carrega escreve no HTML os icones e titulo das habilidades na seção de Habilidades
carregaHabilidades()
carregaCardProjetos()