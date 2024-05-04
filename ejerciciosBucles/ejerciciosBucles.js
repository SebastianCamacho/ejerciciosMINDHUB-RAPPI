// Punto 1: Tabla de multiplicar
console.log("// Punto 1: Tabla de multiplicar");

let numTabla = parseInt(prompt("Ingrese un número: "));

for (let i = 1; i <= 10; i++) {
  let resultado = numTabla * i;
  console.log(`${numTabla} x ${i} = ${resultado}`);
}

// Punto 2: Acumulador de números
console.log("// Punto 2: Acumulador de números");

let suma = 0;
let valor = parseInt(prompt("Ingrese un número (0 para terminar): "));

while (valor != 0) {
  suma += valor;
  valor = parseInt(prompt("Ingrese otro número (0 para terminar): "));
}

console.log(`La suma total es: ${suma}`);

// Punto 3: Adivina el número
console.log("// Punto 3: Adivina el número");

let numSecreto = Math.floor(Math.random() * 100) + 1;
let intentosAdivinar = 0;
let numIngresadoAdivinar;

do {
  intentosAdivinar++;
  numIngresadoAdivinar = parseInt(prompt("Ingrese un número (1-100): "));

  if (numIngresadoAdivinar < numSecreto) {
    console.log("El número ingresado es menor al número secreto.");
  } else if (numIngresadoAdivinar > numSecreto) {
    console.log("El número ingresado es mayor al número secreto.");
  }
} while (numIngresadoAdivinar != numSecreto);

console.log(`¡Felicidades! Adivinaste el número en ${intentosAdivinar} intentos.`);

// Punto 4: Comprobar si un número es primo
console.log("// Punto 4: Comprobar si un número es primo");

let numPrimo = parseInt(prompt("Ingrese un número: "));

if (numPrimo <= 1) {
  console.log("El número no es primo.");
} else {
  let esPrimo = true;

  for (let i = 2; i <= numPrimo / 2; i++) {
    if (numPrimo % i === 0) {
      esPrimo = false;
      break;
    }
  }

  if (esPrimo) {
    console.log("El número es primo.");
  } else {
    console.log("El número no es primo.");
  }
}

// Punto 5: Mostrar divisores de un número
console.log("// Punto 5: Mostrar divisores de un número");

let numDivisores = parseInt(prompt("Ingrese un número: "));

let divisores = [];

for (let i = 1; i <= numDivisores; i++) {
  if (numDivisores % i === 0) {
    divisores.push(i);
  }
}

console.log("Los divisores del número son:", divisores);

// Punto 6: Recorrer y mostrar elementos de un array
console.log("// Punto 6: Recorrer y mostrar elementos de un array");

let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let num of listaNumeros) {
  console.log(num);
}

// Punto 7: Mostrar el doble de cada elemento de un array
console.log("// Punto 7: Mostrar el doble de cada elemento de un array");

let listaNumerosDobles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numDoble of listaNumerosDobles) {
  console.log(numDoble * 2);
}

// Punto 8: Mostrar presentación de cada persona en un array de objetos
console.log("// Punto 8: Mostrar presentación de cada persona en un array de objetos");

let familia = [
    { nombre: "Pedro", edad: 40, parentesco: "Padre", profesion: "Ingeniero" },
    { nombre: "Ana", edad: 35, parentesco: "Madre", profesion: "Maestra" },
    { nombre: "Juan", edad: 10, parentesco: "Hijo", pasatiempo: "Fútbol" },
    { nombre: "María", edad: 8, parentesco: "Hija", pasatiempo: "Pintar" }
  ];

for (let persona of familia) {
    console.log(`Hola, mi nombre es ${persona.nombre} y tengo ${persona.edad} años. Soy el/la ${persona.parentesco} de la familia.`);
    if (persona.profesion) {
      console.log(`Soy ${persona.profesion} de profesión.`);
    }
    if (persona.pasatiempo) {
      console.log(`Me gusta mucho ${persona.pasatiempo} en mi tiempo libre.`);
    }
    console.log(); 
  }

// Punto 9: Mostrar solo números impares de un array
console.log("// Punto 9: Mostrar solo números impares de un array");

let num9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let num of num9) {
  if (numero % 2 !== 0) {
    console.log(numero);
  }
}


// Punto 10: Sumar pares e impares por separado
console.log("// Punto 10: Sumar pares e impares por separado");

let sumaPares1 = 0;
let sumaImpares2 = 0;
let numero10;

do {
  numero10 = parseInt(prompt("Ingrese un número (0 para terminar): "));

  if (numero10 % 2 === 0) {
    sumaPares += numero10;
  } else if (numero10 % 2 !== 0) {
    sumaImpares += numero10;
  }
} while (numero10 != 0);

console.log(`Suma de pares: ${sumaPares}`);
console.log(`Suma de impares: ${sumaImpares}`);


// Punto 11: Encontrar el número máximo de un array
console.log("// Punto 11: Encontrar el número máximo de un array");

let numeros11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max11 = numeros11[0];

for (let numero of numeros11) {
  if (numero > max11) {
    max11 = numero;
  }
}

console.log(`El número máximo es: ${max11}`);

// Punto 12: Encontrar el número mínimo de un array
console.log("// Punto 12: Encontrar el número mínimo de un array");

let numeros12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let min12 = numeros12[0];

for (let numero of numeros12) {
  if (numero < min12) {
    min12 = numero;
  }
}

console.log(`El número mínimo es: ${min12}`);

// Punto 13: Juego de piedra, papel o tijeras
console.log("// Punto 13: Juego de piedra, papel o tijeras");

let jugador1 = prompt("Ingrese el nombre del jugador 1: ");
let jugador2 = prompt("Ingrese el nombre del jugador 2: ");

do {
  let opcionJugador1 = prompt(`${jugador1}, elija (piedra, papel o tijeras): `).toLowerCase();
  let opcionJugador2 = prompt(`${jugador2}, elija (piedra, papel o tijeras): `).toLowerCase();

  if (opcionJugador1 === opcionJugador2) {
    console.log("Empate. Vuelvan a intentarlo.");
  } else {
    let ganador;

    if (
      (opcionJugador1 === "piedra" && opcionJugador2 === "tijera") ||
      (opcionJugador1 === "papel" && opcionJugador2 === "piedra") ||
      (opcionJugador1 === "tijera" && opcionJugador2 === "papel")
    ) {
      ganador = jugador1;
    } else {
      ganador = jugador2;
    }

    console.log(`¡Felicidades! ${ganador} ha ganado.`);
  }
} while (true);


// Punto 14: Triángulo de asteriscos 
console.log("// Punto 14: Triángulo de asteriscos");

let altura = 5;
let triangulo = "";

for (let i = 1; i <= altura; i++) {
  triangulo += "*";
  console.log(triangulo);
}

// Punto 15: Triángulo de asteriscos (descendente)
console.log("// Punto 15: Triángulo de asteriscos (descendente)");

let altura2 = 5;
let triangulo2 = "*****";

for (let i = altura2 - 1; i >= 1; i--) {
  triangulo2 = triangulo2.slice(0, i);
  console.log(triangulo2);
}


