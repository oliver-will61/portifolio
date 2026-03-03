
function lightMode(){
    const btnSwitch = document.querySelector("#switch-input") 
    const body = document.querySelector('body')


    btnSwitch.addEventListener('change', function () {

        if (this.checked) {
            // this se refere ao btnSwitch( que é um input do tipo checkbox), portanto 
            // consegue acessar a propriedade checked e vericar se está ativo ou não
            console.log('marcado');

            body.classList.add("ligth-mode")


        } else {
            body.classList.remove("ligth-mode")
            
        }
        
    })    
}

export default lightMode