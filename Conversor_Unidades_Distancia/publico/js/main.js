let valor = document.getElementById("valor");

// detecto el evento cuando se escribe el número
valor.addEventListener('keyup', convertir);
txtResultado = document.getElementById("resultado");

unidad1 = document.getElementById("unidad1");
/* se detecta el evento cuando se selecciona una unidad */
unidad1.addEventListener('change', convertir);

unidad2 = document.getElementById("unidad2");
/* se detecta el evento cuando se selecciona una unidad */
unidad2.addEventListener('change', convertir);

/* variable donde se calcula el resultado */
let resultado;

/* función que realiza los calculos */
function convertir(){
    // en el caso de que no exista nada en el input
    if(valor.value == ''){
        return;
    }
    // tomo el número del input y lo convierto a numérico
    numero = valor.value;
    numero = parseFloat(numero);

    /* tranformación de los Kilometros */
    if(unidad1.value == "Kilometro" && unidad2.value == "Kilometro"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero + " " + "Kilometro/s equivalen a: " + resultado +" "+ "Kilometro/s";
    }

    if(unidad1.value == "Kilometro" && unidad2.value == "Hectometro"){
        resultado = numero * 10;
        txtResultado.innerHTML = numero + " " + "Kilometro/s equivalen a: " + resultado +" "+ "Hectometro/s";
    }

    if(unidad1.value == "Kilometro" && unidad2.value == "Decametro"){
        resultado = numero * 100;
        txtResultado.innerHTML = numero + " " + "Kilometro/s equivalen a: " + resultado +" "+ "Decametro/s";
    }

    if(unidad1.value == "Kilometro" && unidad2.value == "Metro"){
        resultado = numero * 1000;
        txtResultado.innerHTML = numero + " " + "Kilometro/s equivalen a: " + resultado +" "+ "Metro/s";
    }

    if(unidad1.value == "Kilometro" && unidad2.value == "Decimetro"){
        resultado = numero * 10000;
        txtResultado.innerHTML = numero + " " + "Kilometro/s equivalen a: " + resultado +" "+ "Decimetro/s";
    }

    if(unidad1.value == "Kilometro" && unidad2.value == "Centimetro"){
        resultado = numero * 100000;
        txtResultado.innerHTML = numero + " " + "Kilometro/s equivalen a: " + resultado +" "+ "Centimetro/s";
    }

    if(unidad1.value == "Kilometro" && unidad2.value == "Milimetro"){
        resultado = numero * 1000000;
        txtResultado.innerHTML = numero + " " + "Kilometro/s equivalen a: " + resultado +" "+ "Milimetro/s";
    }

    /* transformación de los hectometros */
    if(unidad1.value == "Hectometro" && unidad2.value == "Kilometro"){
        resultado = numero / 10;
        txtResultado.innerHTML = numero + " " + "Hectometro/s equivalen a: " + resultado +" "+ "Kilometro/s";
    } 

    if(unidad1.value == "Hectometro" && unidad2.value == "Hectometro"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero + " " + "Hectometro/s equivalen a: " + resultado +" "+ "Hectometro/s";
    }

    if(unidad1.value == "Hectometro" && unidad2.value == "Decametro"){
        resultado = numero * 10;
        txtResultado.innerHTML = numero + " " + "Hectometro/s equivalen a: " + resultado +" "+ "Decametro/s";
    }

    if(unidad1.value == "Hectometro" && unidad2.value == "Metro"){
        resultado = numero * 100;
        txtResultado.innerHTML = numero + " " + "Hectometro/s equivalen a: " + resultado +" "+ "Metro/s";
    }

    if(unidad1.value == "Hectometro" && unidad2.value == "Decimetro"){
        resultado = numero * 1000;
        txtResultado.innerHTML = numero + " " + "Hectometro/s equivalen a: " + resultado +" "+ "Decimetro/s";
    }

    if(unidad1.value == "Hectometro" && unidad2.value == "Centimetro"){
        resultado = numero * 10000;
        txtResultado.innerHTML = numero + " " + "Hectometro/s equivalen a: " + resultado +" "+ "Centimetro/s";
    }

    if(unidad1.value == "Hectometro" && unidad2.value == "Milimetro"){
        resultado = numero * 100000;
        txtResultado.innerHTML = numero + " " + "Hectometro/s equivalen a: " + resultado +" "+ "Milimetro/s";
    }

    /* tranformación de los decametros */
    if(unidad1.value == "Decametro" && unidad2.value == "Kilometro"){
        resultado = numero / 100;
        txtResultado.innerHTML = numero + " " + "Decametro/s equivalen a: " + resultado +" "+ "Kilometro/s";
    } 

    if(unidad1.value == "Decametro" && unidad2.value == "Hectometro"){
        resultado = numero / 10;
        txtResultado.innerHTML = numero + " " + "Decametro/s equivalen a: " + resultado +" "+ "Hectometro/s";
    } 

    if(unidad1.value == "Decametro" && unidad2.value == "Decametro"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero + " " + "Decametro/s equivalen a: " + resultado +" "+ "Decametro/s";
    } 

    if(unidad1.value == "Decametro" && unidad2.value == "Metro"){
        resultado = numero * 10;
        txtResultado.innerHTML = numero + " " + "Decametro/s equivalen a: " + resultado +" "+ "Metro/s";
    }

    if(unidad1.value == "Decametro" && unidad2.value == "Decimetro"){
        resultado = numero * 100;
        txtResultado.innerHTML = numero + " " + "Decametro/s equivalen a: " + resultado +" "+ "Decimetro/s";
    }

    if(unidad1.value == "Decametro" && unidad2.value == "Centimetro"){
        resultado = numero * 1000;
        txtResultado.innerHTML = numero + " " + "Decametro/s equivalen a: " + resultado +" "+ "Centimetro/s";
    }

    if(unidad1.value == "Decametro" && unidad2.value == "Milimetro"){
        resultado = numero * 10000;
        txtResultado.innerHTML = numero + " " + "Decametro/s equivalen a: " + resultado +" "+ "Milimetro/s";
    }

    /* tranformación de los Metros */
    if(unidad1.value == "Metro" && unidad2.value == "Kilometro"){
        resultado = numero / 1;
        txtResultado.innerHTML = numero + " " + "Metro/s equivalen a: " + resultado +" "+ "Kilometro/s";
    }

    if(unidad1.value == "Metro" && unidad2.value == "Hectometro"){
        resultado = numero / 100;
        txtResultado.innerHTML = numero + " " + "Metro/s equivalen a: " + resultado +" "+ "Hectometro/s";
    }

    if(unidad1.value == "Metro" && unidad2.value == "Decametro"){
        resultado = numero / 10;
        txtResultado.innerHTML = numero + " " + "Metro/s equivalen a: " + resultado +" "+ "Decametro/s";
    }

    if(unidad1.value == "Metro" && unidad2.value == "Metro"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero + " " + "Metro/s equivalen a: " + resultado +" "+ "Metro/s";
    }

    if(unidad1.value == "Metro" && unidad2.value == "Decimetro"){
        resultado = numero * 10;
        txtResultado.innerHTML = numero + " " + "Metro/s equivalen a: " + resultado +" "+ "Decimetro/s";
    }

    if(unidad1.value == "Metro" && unidad2.value == "Centimetro"){
        resultado = numero * 100;
        txtResultado.innerHTML = numero + " " + "Metro/s equivalen a: " + resultado +" "+ "Centimetro/s";
    }

    if(unidad1.value == "Metro" && unidad2.value == "Milimetro"){
        resultado = numero * 1000;
        txtResultado.innerHTML = numero + " " + "Metro/s equivalen a: " + resultado +" "+ "Milimetro/s";
    }

    /* transformación de los Decimetros */
    if(unidad1.value == "Decimetro" && unidad2.value == "Kilometro"){
        resultado = numero / 10000;
        txtResultado.innerHTML = numero + " " + "Decimetro/s equivalen a: " + resultado +" "+ "Kilometro/s";
    }

    if(unidad1.value == "Decimetro" && unidad2.value == "Hectometro"){
        resultado = numero / 1000;
        txtResultado.innerHTML = numero + " " + "Decimetro/s equivalen a: " + resultado +" "+ "Hectometro/s";
    }

    if(unidad1.value == "Decimetro" && unidad2.value == "Decametro"){
        resultado = numero / 100;
        txtResultado.innerHTML = numero + " " + "Decimetro/s equivalen a: " + resultado +" "+ "Decametro/s";
    }

    if(unidad1.value == "Decimetro" && unidad2.value == "Metro"){
        resultado = numero / 10;
        txtResultado.innerHTML = numero + " " + "Decimetro/s equivalen a: " + resultado +" "+ "Metro/s";
    }

    if(unidad1.value == "Decimetro" && unidad2.value == "Decimetro"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero + " " + "Decimetro/s equivalen a: " + resultado +" "+ "Decimetro/s";
    }

    if(unidad1.value == "Decimetro" && unidad2.value == "Centimetro"){
        resultado = numero * 10;
        txtResultado.innerHTML = numero + " " + "Decimetro/s equivalen a: " + resultado +" "+ "Centimetro/s";
    }

    if(unidad1.value == "Decimetro" && unidad2.value == "Milimetro"){
        resultado = numero * 100;
        txtResultado.innerHTML = numero + " " + "Decimetro/s equivalen a: " + resultado +" "+ "Milimetro/s";
    }

     /* tranformación de los Centimetros */
     if(unidad1.value == "Centimetro" && unidad2.value == "Kilometro"){
        resultado = numero / 100000;
        txtResultado.innerHTML = numero + " " + "Centimetro/s equivalen a: " + resultado +" "+ "Kilometro/s";
    }

    if(unidad1.value == "Centimetro" && unidad2.value == "Hectometro"){
        resultado = numero / 10000;
        txtResultado.innerHTML = numero + " " + "Centimetro/s equivalen a: " + resultado +" "+ "Hectometro/s";
    }

    if(unidad1.value == "Centimetro" && unidad2.value == "Decametro"){
        resultado = numero / 1000;
        txtResultado.innerHTML = numero + " " + "Centimetro/s equivalen a: " + resultado +" "+ "Decametro/s";
    }

    if(unidad1.value == "Centimetro" && unidad2.value == "Metro"){
        resultado = numero / 100;
        txtResultado.innerHTML = numero + " " + "Centimetro/s equivalen a: " + resultado +" "+ "Metro/s";
    }

    if(unidad1.value == "Centimetro" && unidad2.value == "Decimetro"){
        resultado = numero / 10;
        txtResultado.innerHTML = numero + " " + "Centimetro/s equivalen a: " + resultado +" "+ "Decimetro/s";
    }

    if(unidad1.value == "Centimetro" && unidad2.value == "Centimetro"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero + " " + "Centimetro/s equivalen a: " + resultado +" "+ "Centimetro/s";
    }

    if(unidad1.value == "Centimetro" && unidad2.value == "Milimetro"){
        resultado = numero * 10;
        txtResultado.innerHTML = numero + " " + "Centimetro/s equivalen a: " + resultado +" "+ "Milimetro/s";
    }

    /* transformación de los milimetros */
    if(unidad1.value == "Milimetro" && unidad2.value == "Kilometro"){
        resultado = numero / 1000000;
        txtResultado.innerHTML = numero + " " + "Milimetro/s equivalen a: " + resultado +" "+ "Kilometro/s";
    }

    if(unidad1.value == "Milimetro" && unidad2.value == "Hectometro"){
        resultado = numero / 100000;
        txtResultado.innerHTML = numero + " " + "Milimetro/s equivalen a: " + resultado +" "+ "Hectometro/s";
    }

    if(unidad1.value == "Milimetro" && unidad2.value == "Decametro"){
        resultado = numero / 10000;
        txtResultado.innerHTML = numero + " " + "Milimetro/s equivalen a: " + resultado +" "+ "Decametro/s";
    }

    if(unidad1.value == "Milimetro" && unidad2.value == "Metro"){
        resultado = numero / 1000;
        txtResultado.innerHTML = numero + " " + "Milimetro/s equivalen a: " + resultado +" "+ "Metro/s";
    }

    if(unidad1.value == "Milimetro" && unidad2.value == "Decimetro"){
        resultado = numero / 100;
        txtResultado.innerHTML = numero + " " + "Milimetro/s equivalen a: " + resultado +" "+ "Decimetro/s";
    }

    if(unidad1.value == "Milimetro" && unidad2.value == "Centimetro"){
        resultado = numero / 10;
        txtResultado.innerHTML = numero + " " + "Milimetro/s equivalen a: " + resultado +" "+ "Centimetro/s";
    }

    if(unidad1.value == "Milimetro" && unidad2.value == "Milimetro"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero + " " + "Milimetro/s equivalen a: " + resultado +" "+ "Milimetro/s";
    }
}