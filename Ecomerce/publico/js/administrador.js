function  guardarAlmacenamientoLocal(llave, valor_a_guardar){
    localStorage.setItem(llave, JSON.stringify(valor_a_guardar))
}

function obtenerAlmacenamientoLocal(llave){
    const datos = JSON.parse(localStorage.getItem(llave))
    return datos
}

let productos = obtenerAlmacenamientoLocal('productos') || [];
let mensaje = document.getElementById('mensaje')

/* añadir productos */
const añadirProducto = document.getElementById('productoAñadir')
const añadirValor = document.getElementById('valorAñadir')
const añadirExistencia = document.getElementById('existenciaAñadir')
const añadirImagen = document.getElementById('ImagenAñadir')

document.getElementById("botonAñadir").addEventListener("click", function(event){
    event.preventDefault()
    let productoAñadir = añadirProducto.value
    let valorAñadir = añadirValor.value
    let existenciaAñadir  = añadirExistencia.value
    let imagenAñadir  = añadirImagen.value

    let van = true

    if(productoAñadir == '' || valorAñadir == '' || existenciaAñadir == '' || imagenAñadir == ''){
        mensaje.classList.add('llenarCampos')
        setTimeout(() =>{
            mensaje.classList.remove('llenarCampos')
        }, 2500)
    }else{
        for(let i = 0; i < productos.length; i++){
            if(productos[i].nombre == productoAñadir){
                mensaje.classList.add('repetidoError')
                setTimeout(() => {
                    mensaje.classList.remove('repetidoError')
                }, 2500)
                van = false
            }
        }
    }

    if(van == true){
        productos.push({
            nombre: productoAñadir,
            valor: valorAñadir,
            existencia: existenciaAñadir,
            urlImagen: imagenAñadir
        })
        mensaje.classList.add('realizado')
        setTimeout(() => {
            mensaje.classList.remove('repetidoError')
            window.location.reload()
        }, 1500);
    }
    guardarAlmacenamientoLocal('productos', productos)
})