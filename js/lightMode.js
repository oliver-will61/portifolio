
import carregaHabilidades from "./carregaHabilidades.js";
import carregaCardProjetos from "./carregaProjetos.js";

function lightMode(){
    const btnSwitch = document.querySelector("#switch-input") 
    const body = document.querySelector('body')

    // Variável para armazenar a posição do scroll
    let scrollPosition = 0

    function toggleTheme() {
        
    }
    

    btnSwitch.addEventListener('change', function () {

        // Salva a posição atual do scroll antes da mundaça do modo claro ou escuro
        scrollPosition = window.scrollY

        if (this.checked) {
            // this se refere ao btnSwitch( que é um input do tipo checkbox), portanto 
            // consegue acessar a propriedade checked e vericar se está ativo ou não

            body.classList.add("ligth-mode")

            //carrega os icones do modo light
            carregaHabilidades('light')
            carregaCardProjetos('light')

             //restaura o scroll para a posição anterior da mudança, evitando o deslocamento indevido para o topo da página
            requestAnimationFrame(() => {
                window.scrollTo(0, scrollPosition)
            })


        } else {
            body.classList.remove("ligth-mode")

            //carrega os icones padrões (dark mode)
            carregaHabilidades()
            carregaCardProjetos()
            
            //restaura o scroll para a posição anterior da mudança, evitando o deslocamento indevido para o topo da página
            requestAnimationFrame(() => {
                window.scrollTo(0, scrollPosition)
            })
        }
        
    })    
}

export default lightMode