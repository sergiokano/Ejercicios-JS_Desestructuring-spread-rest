// 1. Ejercicios Destructuring ***********************
// ************
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

// Extrae la empleada Ana con todos sus datos personales:
// {"name":"Ana", "email":"Ana@gmail.com"}

const [Emp1, Emp2, Emp3] = empleados;
console.log(Emp2);

// Extrae el email del empleado Luis --> Luis@gmail.com
const { email } = Emp1;
console.log(email);

// ************
const pokemon = {
  name: "Bulbasaur",
  type: "grass",
  ability: {
    primary: "Overgrow",
    hidden: "Chlorophyll",
  },
  stats: {
    hp: 45,
    attack: 49,
    deffense: 59,
    speed: 45,
  },
  moves: ["Growl", "Tackle", "Vine Whip", "Razor Leaf"],
};

// Cambia el nombre de la propiedad “name” por “nombre
const { name: nombre } = pokemon;

// Extrae el nombre del Pokemon
console.log(nombre);

// Extrae el tipo de Pokemon que es
const { type } = pokemon;
console.log(type);

// Extrae el movimiento “Tackle”
const { moves } = pokemon;
const [, secondMove] = moves;
console.log(secondMove);

// 2. Ejercicios spread/rest ***********************
// Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:

const pikachu = {
  name: "Pikachu",
  type: "electric",
  ability: {
    primary: "Static",
    hidden: "Lightning rod",
  },
  stats: {
    hp: 35,
    attack: 55,
    deffense: 40,
    speed: 90,
  },
  moves: ["Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"],
};

const pokemonGroup = { ...pokemon, ...pikachu };
console.log(pokemonGroup);

//  Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.

const sumEveryOther = (...sumaNumeros) => {
  console.log(sumaNumeros.reduce((a, b) => a + b));
};
sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26

// Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.

const addOnlyNums = (...sumaNumeros) => {
  // console.log(sumaNumeros.reduce((a,b) => a + b));
  console.log(sumaNumeros);
  let filtrado = sumaNumeros.filter((num) => typeof num == "number");
  console.log(filtrado.reduce((a, b) => a + b));
};

addOnlyNums(1, "perro", 2, 4); //7

// Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

const countTheArgs = (...argumentos) => {
  console.log(argumentos.length);
};
countTheArgs("gato", "perro"); //2
countTheArgs("naranja", "rojo", "pollo", "oso"); //4

// Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

array1 = ["gato", "perro"]; //2
array2 = ["naranja", "rojo", "pollo", "oso"]; //4

const combineTwoArrays = [...array1, ...array2];
console.log(combineTwoArrays);

// 3. Ejercicios Opcionales ***********************
// Dado el siguiente objeto:
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

// Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana
// const maximaHoy = HIGH_TEMPERATURES.today;
// const maximaManana = HIGH_TEMPERATURES.tomorrow;

const { today: maximaHoy } = HIGH_TEMPERATURES;
console.log(maximaHoy);

const { tomorrow: maximaManana } = HIGH_TEMPERATURES;
console.log(maximaManana);

// Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
// Lo resuelvo usando el new Set para coger unicamente 1 palabra de cada, sin repetir.

const onlyUniques = (...soloUnicos) => {
  let soloUnicosFilt = [...new Set(soloUnicos)];
  console.log(soloUnicosFilt);
};
onlyUniques("gato", "pollo", "cerdo", "cerdo"); //['gato', 'pollo', 'cerdo']

onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

// Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

function combineAllArrays(...arrays) {
  let newArray = [];
  for(let i = 0; i < arrays.length; i++) {
      newArray.push(...arrays[i]);
  }
  console.log(newArray);
}

combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1])
// [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]);
// [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]



// Otro método para hacer este ejercicio sería mediante la posicion del array, línea 173 con new array, el problema es que ahí hay que saber el número total de arrays que hay, por tanto acabé usando la función del for

// let arrayMin = [2, 5, 7, 1, 9];
// console.log(arrayMin);
// console.log(...arrayMin);
// let minimo = Math.min(...arrayMin);
// console.log(minimo);
//  const arrayX = [["patata", "tomate", "lechuga"],[1, true, "chocolate"]];
//  const newArray = [...arrayX[0],...arrayX[1]]; //Funciona
// console.log(newArray);


// Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.
// 1. He sacado los numeros de los arrays juntándolos en uno. 
// 2. Una vez los tenia en uno (numbers Array) con la función "map" he multiplicado cada número del array por sí mismo, obteniendo el cuadrado de cada uno.
// 3. Una vez tenía el array convertido a numeros al cuadrado (exponentialNumbersArray) he sumado el array con "reduce"

function sumAndSquare (...numbers) {
  let numbersArray = [];
  for(let i = 0; i < numbers.length; i++) {
      numbersArray.push(...numbers[i]);
  }
  let exponentialNumbersArray = numbersArray.map(function(x) {return x * x});
  // console.log(exponentialNumbersArray);
  let sumFinal = exponentialNumbersArray.reduce((a,b) => a + b);
  console.log(sumFinal);
}

// Declaro unas variables para hacer la operación que comprueba que da bien

let a= 1;
let b= 2;
let c= 3;
let d= 4;

sumAndSquare([a,b],[c,d])
console.log(a*a+b*b+c*c+d*d)


