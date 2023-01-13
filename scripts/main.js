let pedir1 = document.getElementById('pedir1')
let pedir2 = document.getElementById('pedir2')
let pedir3 = document.getElementById('pedir3')
let verMenu = document.getElementById('ver-menu')

pedir1.addEventListener("click", abrirWhatsapp)
pedir2.addEventListener("click", abrirWhatsapp)
pedir3.addEventListener("click", abrirWhatsapp)

function abrirWhatsapp() {
    window.open("https://api.whatsapp.com/send?phone=+51961257878&text=Hola! ¿Cuál es el menú de hoy?")
}