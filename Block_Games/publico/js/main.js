const contenedor = document.querySelector('.contenedor')

const altoTablero = 300
const anchoTablero = 570
const altoBloque = 20
const anchoBloque = 100


const posicionInicialUsuario = [230,10]
let posicionActualUsuario = posicionInicialUsuario

const posicionInicialBola = [270,40]
let posicionActualBola = posicionInicialBola

let xDireccionBola = 2
let yDireccionBola = 2
let diametro = 20

let timerID

class Bloque{
    constructor(ejeX, ejeY){
        this.bottomLeft = [ejeX, ejeY]
        this.bottomRigth = [ejeX + anchoBloque, ejeY]
        this.topLeft = [ejeX, ejeY + altoBloque]
        this.topRigth = [ejeX + anchoBloque, ejeY + altoBloque]

    }
}

const bloques  = [
    new Bloque(10, 250),
    new Bloque(120, 250),
    new Bloque(230, 250),
    new Bloque(340, 250),
    new Bloque(450, 250),
    new Bloque(10, 220),
    new Bloque(120, 220),
    new Bloque(230, 220),
    new Bloque(340, 220),
    new Bloque(450, 220),
    new Bloque(10, 190),
    new Bloque(120, 190),
    new Bloque(230, 190),
    new Bloque(340, 190),
    new Bloque(450, 190),
]       

function addBloques(){
    for(let i = 0; i < bloques.length; i++){
        const bloque = document.createElement('div')
        bloque.classList.add('bloque')
        bloque.style.left = bloques[i].bottomLeft[0] + 'px'
        bloque.style.bottom = bloques[i].bottomLeft[1] + 'px'
        contenedor.appendChild(bloque)   
    }
}
//Añadir los bloques al juego
addBloques()

//Definir Usuario
function dibujarUsuario(){
    usuario.style.left = posicionActualUsuario[0] + 'px'
    usuario.style.bottom = posicionActualUsuario[1] + 'px'
}