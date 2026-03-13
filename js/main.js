import carregaHabilidades from './carregaHabilidades.js'
import carregaCardProjetos from './carregaProjetos.js'
import Modal from './modal.js'
import lightMode from './lightMode.js'
import initAnimationScroll from './sectionScrollAnimated.js'
import initTypingAnimation from './typingAnimation.js'

const iconeMenuHamburguer = document.querySelector('#icone-menu')
const iconeCloseMenuHamburguer =  document.querySelector('#icone-close')
 


//inicia animação de digitação
initTypingAnimation()

//inicia animação de scroll para as seções
initAnimationScroll()

// carrega as funcionalidades do light mode
lightMode()

// carrega e escreve no HTML os icones e titulo das habilidades na seção de Habilidades
carregaHabilidades()

// carrega os cards de projetos no HTML
carregaCardProjetos()


// modal --------------------------------------------------------------

// carrega as funcionalidades da modal, passando os elementos do icone de menu e icone de fechar como 
// parâmetros para o construtor da classe Modal

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