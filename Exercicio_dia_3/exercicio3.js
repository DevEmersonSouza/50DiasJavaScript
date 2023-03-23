function conversorDeTemperatura(temp) {
  let fahrenheit = document.getElementById("temperaturaDigitada").value
  let celsius = (Number(fahrenheit) - 32) * 0.5556

  resultado.value = celsius.toFixed(1)
}
