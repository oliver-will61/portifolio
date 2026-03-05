
import carregaHabilidades from "./carregaHabilidades.js";
import carregaCardProjetos from "./carregaProjetos.js";

function lightMode(){
    const btnSwitch = document.querySelector("#switch-input") 
    const body = document.querySelector('body')


    btnSwitch.addEventListener('change', function () {

        if (this.checked) {
            // this se refere ao btnSwitch( que é um input do tipo checkbox), portanto 
            // consegue acessar a propriedade checked e vericar se está ativo ou não

            body.classList.add("ligth-mode")

            //carrega os icones do modo light
            carregaHabilidades('light')
            carregaCardProjetos('light')


        } else {
            body.classList.remove("ligth-mode")

            //carrega os icones padrões (dark mode)
            carregaHabilidades()
            carregaCardProjetos()
        }
        
    })    
}

export default lightMode