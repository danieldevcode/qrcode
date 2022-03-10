let codigo = document.querySelector("img")
let texto = document.querySelector("textarea")
let boton = document.querySelector("button");

boton.addEventListener("click", generarQR)

function generarQR() {
    let tamano = "1000x1000"
    let datos = texto.value
    let apiURL = "http://api.qrserver.com/v1/create-qr-code"
    let url = `${apiURL}?data=${datos}&size=${tamano}`

    codigo.src = url
    clearTextArea();
}

function clearTextArea() {
    document.querySelector("textarea").value = ""
}