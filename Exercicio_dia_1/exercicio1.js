let botao = document.getElementById("ativar")

function escrever() {
    let texto = "Bom dia, Mundo!!!"
    let tela = document.getElementById("tela")

    if(texto){
        tela.innerHTML = texto
    }
}
