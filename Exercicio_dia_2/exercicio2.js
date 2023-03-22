function calcularCubo() {
  let númeroDigitado = Number(document.getElementById("numeroDigitado").value);
  if (númeroDigitado === 0) {
    mensagem.innerHTML = "Por favor insira um número maior que 0"
    return
  }
  else{
      let resultado = númeroDigitado * númeroDigitado * númeroDigitado;
      let inputResultado = document.getElementById("resultado");
      inputResultado.value = resultado;
      mensagem.innerHTML = "Seu resultado é igual a "+ resultado
  }
  console.log("Seu resultado é igual a", resultado);
}
