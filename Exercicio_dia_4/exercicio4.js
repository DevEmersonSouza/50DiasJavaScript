function calcularArea() {
  let base = Number(document.getElementById("baseDigitada").value) 
  let altura = Number(document.getElementById("alturaDigitada").value) 
  let resultado = (base * altura) / 2
  mensagem.innerHTML = `A área do triângulo é (`+base+` x `+altura+`) /2 = `+ resultado 
}
