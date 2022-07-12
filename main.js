// Pom ----------------------------------------
/*function tocaSom(e) {
  let classe = e.target.classList[1]
  let som = document.querySelector(`#som_${classe}`)
  som.play()
}

const listaDeTeclas = document.querySelectorAll('.tecla')

for (let i = 0; i < listaDeTeclas.length; i++) {
  listaDeTeclas[contador].onclick = tocaSom

}
*/

function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio)

  if (elemento && elemento.localName === 'audio') {
    elemento.play()
  } else {
    console.log('Elemento não encontrado ou seletor inválido')
  }
}
const listaDeTeclas = document.querySelectorAll('.tecla')

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador]
  const instrumento = tecla.classList[1]
  const idAudio = `#som_${instrumento}` //template string

  tecla.onclick = function () {
    tocaSom(idAudio)
  }
  tecla.onkeydown = function (e) {
    console.log(e.code)
    if (e.code === 'Enter' || e.code === 'Space') {
      tecla.classList.add('ativa')
    }
  }
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa')
  }
}
