//total preguntas del juego
const TOTAL_PREGUNTAS = 10;

//tiempo del juego
const TIEMPO_DEL_JUEGO = 60;

//estructura para almacenar las preguntas
const bd_juego = [
  {
    id: "A",
    pregunta: "Empresa reconocida que se dedica a los servidores",
    respuesta: "amazon",
  },
  {
    id: "B",
    pregunta: "Término en inglesque hace referencia a una copia de seguridad",
    respuesta: "backup",
  },
  {
    id: "C",
    pregunta:
      "Nombre de la memoria que almacena temporalmente los datos de la computadora",
    respuesta: "cache",
  },
  {
    id: "D",
    pregunta:
      "Archivo que controla los periféricos que se conectan a la computadora",
    respuesta: "driver",
  },
  {
    id: "E",
    pregunta:
      "Mezclar los datos para protegerlos como medida de seguridad, es decir, convertir texto normal a texto cifrado",
    respuesta: "encriptar",
  },
  {
    id: "F",
    pregunta: "Famosa red social cread por Mark Zuckerberg",
    respuesta: "facebook",
  },
  {
    id: "G",
    pregunta: "Lenguaje de programación crado por Google",
    respuesta: "go",
  },
  {
    id: "H",
    pregunta: "lenguaje utilizado para la estructura a las páginas web",
    respuesta: "html",
  },
  {
    id: "I",
    pregunta:
      "Aspecto que presentan los programas tras su ejecución mediante el cual ejercemos la comunicación con éstos",
    respuesta: "interfaz",
  },
  {
    id: "J",
    pregunta:
      "Lenguaje de programación con el cual se diseño el sistema operativo Android",
    respuesta: "java",
  },
];

//preguntas que ya han sido contestadas. Si estan en 0 no han sido contestadas
var estadoPreguntas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var cantidadAcertadas = 0;

//variable que mantiene el número de pregunta actual
var numPreguntaActual = -1;

// Obtener el elemento del cronómetro
const timer = document.getElementById("tiempo");

// Establecer el tiempo inicial en 60 segundos
let timeLeft = TIEMPO_DEL_JUEGO;
var countdown;

//boton comenzar
var comenzar = document.getElementById("comenzar");
comenzar.addEventListener("click", function (event) {
  document.getElementById("pantalla-inicial").style.display = "none";
  document.getElementById("pantalla-juego").style.display = "block";
  largarTiempo();
  cargarPregunta();
});

//Creamos el circúlo con las letras de la A a la Z
const container = document.querySelector(".container");
for (let i = 1; i <= TOTAL_PREGUNTAS; i++) {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.textContent = String.fromCharCode(i + 96);
  circle.id = String.fromCharCode(i + 96).toUpperCase();
  container.appendChild(circle);

  const angle = ((i - 1) / TOTAL_PREGUNTAS) * Math.PI * 2 - Math.PI / 2;
  const x = Math.round(95 + 120 * Math.cos(angle));
  const y = Math.round(95 + 120 * Math.sin(angle));
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
}

//Función que carga la pregunta
function cargarPregunta(){
  numPreguntaActual++;
  //controlo si he llegado al final de las preguntas, para comenzar de nuevo
  if(numPreguntaActual>=TOTAL_PREGUNTAS){
    numPreguntaActual=0;
  }
  if(estadoPreguntas.indexOf(0)>=0){ //Controlo que todavía hallan preguntas por contestar
    while(estadoPreguntas[numPreguntaActual]==1){
      numPreguntaActual++;
      if(numPreguntaActual>=TOTAL_PREGUNTAS){
        numPreguntaActual=0;
      }
    }
    document.getElementById("letra-pregunta").textContent = bd_juego[numPreguntaActual].id
    document.getElementById("pregunta").textContent = bd_juego[numPreguntaActual].pregunta
    var letra =  bd_juego[numPreguntaActual].id;
    document.getElementById(letra).classList.add("pregunta-actual");
  }
  else{
    clearInterval(countdown);
    mostrarPantallaFinal();
  }
}

//detecto cada vez que hay un cambio de tecla en el input
var respuesta = document.getElementById("respuesta");
respuesta.addEventListener("keyup", function(event) {
  //detecto si la tecla presionada es ENTER
  if (event.keyCode === 13) {
    if(respuesta.value==""){
      alert("Debe ingresar un valor!!");
      return;
    }
    var txtRespuesta = respuesta.value;
    controlarRespuesta(txtRespuesta.toLowerCase());
  }
});

//Función que controla la respuesta
function controlarRespuesta(txtRespuesta){
  if(txtRespuesta == bd_juego[numPreguntaActual].respuesta){
    cantidadAcertadas++;
    //actualizo el estado de las pregunta actual a 1, indicando que ya esta respondida
    estadoPreguntas[numPreguntaActual] = 1;
    var letra =  bd_juego[numPreguntaActual].id;
    document.getElementById(letra).classList.remove("pregunta-actual");
    document.getElementById(letra).classList.add("bien-respondida");
  }else{
    estadoPreguntas[numPreguntaActual] = 1;
    var letra =  bd_juego[numPreguntaActual].id;
    document.getElementById(letra).classList.remove("pregunta-actual");
    document.getElementById(letra).classList.add("mal-respondida");
  }
  respuesta.value="";
  cargarPregunta();
}

//botón para pasar de pregunta sin contestar
var pasar = document.getElementById("pasar");
pasar.addEventListener("click", function(event) {
  var letra =  bd_juego[numPreguntaActual].id;
  document.getElementById(letra).classList.remove("pregunta-actual");
  cargarPregunta();
});


