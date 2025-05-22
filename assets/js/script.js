const hamburguer = document.querySelector(".hamburguer");
const navmenu = document.querySelector(".navmenu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");   
    navmenu.classList.toggle("active"); 
})

const textos = ["Olá! Eu sou Carlos Alcarria"];
let contadorTexto = 0;
let contadorLetra = 0;
const velocidade = 100; // Velocidade da digitação (em ms)
const elemento = document.getElementById("typewriter");

function typeWriter() {
    if (contadorTexto < textos.length) {
        if (contadorLetra < textos[contadorTexto].length) {
            elemento.innerHTML = textos[contadorTexto].substring(0, contadorLetra + 1);
            contadorLetra++;
            setTimeout(typeWriter, velocidade);
        } else {
            contadorTexto++;
            contadorLetra = 0;
            setTimeout(typeWriter, 800); // Pausa entre as frases
        }
    }
}
window.onload = typeWriter;
