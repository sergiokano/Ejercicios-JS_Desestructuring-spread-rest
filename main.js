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
  console.log (argumentos.length);
};
countTheArgs("gato", "perro"); //2
countTheArgs("naranja", "rojo", "pollo", "oso"); //4


// Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

array1 = ["gato", "perro"]; //2
array2 = ["naranja", "rojo", "pollo", "oso"]; //4

const combineTwoArrays = [...array1,...array2];
console.log(combineTwoArrays);