import carregaHabilidades from './carregaHabilidades.js'
import carregaCardProjetos from './carregaProjetos.js'


const containerModal = document.querySelector("#modal") 
const iconeMenu = document.querySelector('#icone-menu')
const iconeClose =  document.querySelector('#icone-close')
 
const body = document.querySelector('body')
const header = document.querySelector('header')

const linkNav = document.querySelectorAll("#link-nav")

function openModal(){
    containerModal.style.display = "inline"  

    iconeClose.classList.remove("hidde")
    iconeMenu.classList.add ("hidde")

    //impede a rolage do body
    body.style.overflow = "hidden"
    header.classList.add("alt-header")
}

function closeModal() { 
    containerModal.style.display = "none"  

    iconeMenu.classList.remove("hidde")
    iconeClose.classList.add ("hidde")

    //retorna a rolagem
    body.style.overflow = "auto"
    header.classList.remove('alt-header');
}


// abre a modal
iconeMenu.addEventListener("click", ()=> {
    openModal()
})

// fecha modal
iconeClose.addEventListener("click", ()=> {
    closeModal()
})

// carrega todos os links de nav da modal
linkNav.forEach((i) => {
    console.log(i);

    i.addEventListener("click", () => {
        closeModal()
    })
})


// carrega escreve no HTML os icones e titulo das habilidades na seção de Habilidades
carregaHabilidades()
carregaCardProjetos()