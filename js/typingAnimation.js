const initTypingAnimation = () => {
  const titulo1 = document.querySelector('.container-ap-titulo #tituloLine1')
  const titulo2 = document.querySelector('.container-ap-titulo #tituloLine2')
  const negrito = document.querySelector('.container-ap-titulo b')
  const paragrafo = document.querySelector('.container-ap-text p')
  
  // Salva o texto original antes de limpar
  const titulo1Original = titulo1.innerHTML
  const titulo2Original = titulo2.innerHTML
  const negritoOriginal = negrito.innerHTML
  const paragrafoOriginal = paragrafo.innerHTML

  const velocidadeDefinida = 70

  // Limpa todos os elementos antes de começar
  titulo1.innerHTML = ''
  titulo2.innerHTML = ''
  negrito.innerHTML = ''
  paragrafo.innerHTML = ''

  // Função de animação
  const typingAnimation = (element, texto, velocidade = 80, callback) => {
    const textoArray = texto.split('')
    let index = 0
    
    function typeNext() {
      if (index < textoArray.length) {
        element.innerHTML += textoArray[index]
        index++
        setTimeout(typeNext, velocidade)
      } else if (callback) {
        callback()
      }
    }
    
    typeNext()
  }

  // Função para calcular tempo baseado no tamanho do texto
  const calcularTempo = (texto, velocidade) => texto.length * velocidade

  // Tempos calculados automaticamente
  const tempoTitulo1 = calcularTempo(titulo1Original, velocidadeDefinida)
  const tempoTitulo2 = calcularTempo(titulo2Original, velocidadeDefinida)
  const tempoB = calcularTempo(negritoOriginal, velocidadeDefinida)

  // Inicia animações em sequência

  //titulo 1
  setTimeout(() => {
    typingAnimation(titulo1, titulo1Original, velocidadeDefinida, () => {
    })
  }, 300)

  // titulo 2
  setTimeout(() => {
    typingAnimation(titulo2, titulo2Original, velocidadeDefinida, () => {
    })
  }, 500 + tempoTitulo1) // Começa quando título1 termina + pequeno delay

  //negrito
  setTimeout(() => {
    typingAnimation(negrito, negritoOriginal, velocidadeDefinida, () => {
    })
  }, 500 + tempoTitulo1 + tempoTitulo2) // Começa quando título2 termina

  //paragrafo
  setTimeout(() => {
    typingAnimation(paragrafo, paragrafoOriginal, velocidadeDefinida)
  }, 500 + tempoTitulo1 + tempoTitulo2 + tempoB + 200) // +200ms de respiro
}

export default initTypingAnimation