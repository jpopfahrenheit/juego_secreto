let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();


// Ejercicios

//Desafíos
//Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];

//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

//console.log(lenguagesDeProgramacion);

function printLenguajes() {
    console.log(lenguagesDeProgramacion);
}

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function printLenguajesInv() {
    let numeroMaxLenguajes = lenguagesDeProgramacion.length;
    for (var i = numeroMaxLenguajes; i > 0; i--) {
        console.log(lenguagesDeProgramacion[i - 1]);
    }
}

//Crea una función que calcule el promedio de los elementos en una lista de números.

let listaDeNumeros = [];
listaDeNumeros.push(2, 4, 6, 9, 7, -4, 6, 1, 2);

function promedioListaDeNumeros() {
    let cantNumeros = listaDeNumeros.length;
    let suma = 0;
    for (var i = 0; i < cantNumeros; i++) {
        suma = suma + listaDeNumeros[i];
    }
    console.log('Cantidad de numeros: ' + cantNumeros);
    console.log('Suma de numeros: ' + suma);
    console.log('Promedio: ' + suma / cantNumeros);
}

//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

let numGrande = listaDeNumeros[0];
let numChico = listaDeNumeros[0];

function grandeChico() {
    cantNumeros = listaDeNumeros.length;
    for (var i = 0; i < cantNumeros; i++) {
        //console.log(listaDeNumeros[i+1] +' - '+ listaDeNumeros[i])
        if (listaDeNumeros[i + 1] > numGrande) {
            numGrande = listaDeNumeros[i + 1]
        }
        if (listaDeNumeros[i + 1] < numChico) {
            numChico = listaDeNumeros[i + 1]
        }
    }
    console.log('El número mas grande es: ' + numGrande);
    console.log('El número mas chico es: ' + numChico);
}

//Crea una función que devuelva la suma de todos los elementos en una lista.

function sumaLista() {
    let cantNumeros = listaDeNumeros.length;
    let suma = 0;
    for (var i = 0; i < cantNumeros; i++) {
        suma = suma + listaDeNumeros[i];
    }
    console.log('Suma de numeros: ' + suma);
}

//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

listaDeNumeros = [1, 3, 5, 7, 9, -2, 4, 6, 8, -10];

function buscaPosicion(numBuscado) {
    let cantNumeros = listaDeNumeros.length;
    console.log('Numero buscado: ' + numBuscado);
    console.log('Cantidad de numeros: ' + cantNumeros);
    for (i = 0; i < cantNumeros; i++) {
        if (numBuscado == listaDeNumeros[i]) {
            console.log(`Posición: ${i + 1}`);
            return i + 1
        }
    }
    console.log('El número no se encuentra en la lista.');
    return -1;  // Retorna -1 si no se encuentra
}



//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

let lista1 = [1, 2, 3, 4, 5];
let lista2 = [6, 7, 8, 9, 10];
let lista3 = [];

function sumaListas(lista1, lista2) {
    let cantNumeros = lista1.length;
    for (let i = 0; i < cantNumeros; i++) {
        lista3[i] = lista1[i] + lista2[i];
        console.log(`Suma posición ${i}: ${lista3[i]}`);
    }
    return console.log('fin.');
}

//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
let lista4 = [];

function listaCuadrado(lista1) {
    let cantNumeros = lista1.length;
    for (let i = 0; i < cantNumeros; i++) {
        lista4[i] = lista1[i]*lista1[i];
        console.log(`Cuadrado de ${lista1[i]} = ${lista4[i]}`);
    }
    return console.log('fin.');
}
