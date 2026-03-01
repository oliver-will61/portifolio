const body = document.querySelector('body')
const header = document.querySelector('header')
const containerModal = document.querySelector("#modal") 

class Modal {

    constructor(iconeMenu, iconeClose){
        this.iconeMenu = iconeMenu  //receebe o icone do menu hamburguer
        this.iconeClose = iconeClose //recebe o icone de fechamento do menu hamburguer
    }
    
    openModal(){
        //abre a modal
        containerModal.style.display = "inline"  

        this.iconeMenu.classList.add ("hidde")
        this.iconeClose.classList.remove("hidde")

        //impede a rolage do body
        body.style.overflow = "hidden"
        header.classList.add("alt-header")
    }

    closeModal() { 
        //fecha a modal
        containerModal.style.display = "none"  

        this.iconeMenu.classList.remove("hidde")
        this.iconeClose.classList.add ("hidde")

        //retorna a rolagem
        body.style.overflow = "auto"
        header.classList.remove('alt-header');
    }

    carregaLinksNav (){
        //seleciona todas as <a> de <nav> e para fechar a modal ao clicar em qualquer uma delas 
        const linkNav = document.querySelectorAll("#link-nav")

        linkNav.forEach((i) => {

            i.addEventListener("click", () => {
                this.closeModal()
            })
        })
    }
}


export default Modal