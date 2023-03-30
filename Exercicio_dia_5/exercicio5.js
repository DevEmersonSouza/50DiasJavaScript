function calcularPerimetro(){
  let raio = Number(document.getElementById("raioDigitado").value)

  mensagem.innerHTML = "O perimetro do círculo é " + 2 * 3.14 * raio + " e sua área é " + 3.14 * (raio * raio) 
}