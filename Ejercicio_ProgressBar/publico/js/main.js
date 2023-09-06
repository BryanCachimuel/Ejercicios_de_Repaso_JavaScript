class ProgressBar {
    constructor(elemento, valorInicial = 0){
        this.valueElem = elemento.querySelector('.progress-bar-value');
        this.fillElem = elemento.querySelector('.progress-bar-fill');

        this.setValue(valorInicial);
    }

    setValue(nuevoValor){
        if(nuevoValor < 0){
            nuevoValor = 0;
        }

        if(nuevoValor > 100){
            nuevoValor = 100;
        }

        this.value = nuevoValor;
        this.update();
    }

}

