import carregaHabilidades from './carregaHabilidades.js'
import carregaCardProjetos from './carregaProjetos.js'
import Modal from './modal.js'
import lightMode from './lightMode.js'

const iconeMenuHamburguer = document.querySelector('#icone-menu')
const iconeCloseMenuHamburguer =  document.querySelector('#icone-close')
 


//light mode
lightMode()


// modal --------------------------------------------------------------
const modal = new Modal(iconeMenuHamburguer, iconeCloseMenuHamburguer)

// abre a modal
iconeMenuHamburguer.addEventListener("click", ()=> {
    modal.openModal()
})

// fecha modal
iconeCloseMenuHamburguer.addEventListener("click", ()=> {
    modal.closeModal()
})

// carrega todos os links de nav da modal
modal.carregaLinksNav()


// carrega escreve no HTML os icones e titulo das habilidades na seção de Habilidades
carregaHabilidades()
carregaCardProjetos()