// Crear el array de objetos "Pizzas". 🍕
// 👉 Debemos crear 6 objetos como mínimo.
// 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

// 🔥 Crear una iteración del array que imprima en consola:
// a) Las pizzas que tengan un id impar.
// b) ¿Hay alguna pizza que valga menos de $600?
// c) El nombre de cada pizza con su respectivo precio.
// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.

// TODAS  las respuestas deben ser USER-FRIENDLY. 
// Si (como en el punto B), la respuesta es un booleano (true o false), no imprimir el booleano , imprimir en consola una respuesta que toda persona pueda entender, sepa o no de programación (Es decir, no podemos imprimir un array o un objeto en consola, por ejemplo.). 
// Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

// Por ejemplo: "La pizza X, tiene un valor de $XXXX”.

const pizzas = [
    {
        id: 1,
        nombre: "Muzzarella",
        ingredientes: ["Salsa Tomate","Muzzarella","Oregano"],
        precio: 500
    },
    {
        id: 2,
        nombre: "Napoletana",
        ingredientes: ["Salsa Tomate","Muzzarella","Tomate", "Ajo"],
        precio: 700
    },
    {
        id: 3,
        nombre: "Fugazzetta",
        ingredientes: ["Salsa Tomate","Muzzarella","Cebolla","Oregano"],
        precio: 750
    },
    {
        id: 4,
        nombre: "Calabrese",
        ingredientes: ["Salsa Tomate","Muzzarella","Salame"],
        precio: 800
    },
    {
        id: 5,
        nombre: "Quattro Formaggi",
        ingredientes: ["Salsa Tomate","Muzzarella","Gorgonzola","Fontina","Parmesano"],
        precio: 1000
    },
    {
        id: 6,
        nombre: "Explosiva",
        ingredientes: ["Salsa Tomate","Muzzarella","Huevo frito","Papas fritas"],
        precio: 900
    },
];

// a) Las pizzas que tengan un id impar.
console.log("a) Pizzas con Id Impar")
const idImpar = pizzas.filter((pizza) => pizza.id % 2 != 0)

console.log('Las pizzas con Id impar son:')
for (pizza of idImpar) {
    console.log(`${pizza.nombre}` )};

// b) ¿Hay alguna pizza que valga menos de $600?
console.log("b) ¿Hay alguna pizza que valga menos de $600?")
const pizzaMenosDe600 = pizzas.some( (e) => e.precio <= 600)

console.log (pizzaMenosDe600)

// c) El nombre de cada pizza con su respectivo precio.
console.log("c) Lista de precios")
const NombreMasPrecio = pizzas.map ( (pizza) => {
    return {
        nombre: pizzas.nombre,
        precio: pizzas.precio
    }
})
pizzas.forEach ( (e) => console.log(`La pizza ${e.nombre} cuesta ${e.precio}`))

// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los 
//     ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos,
//     ya que cada pizza del array de pizzas tiene un array de ingredientes.

console.log("d) Lista de ingredientes")

pizzas.forEach ((pizzas) => {
    console.log ('La pizza ' + pizzas.nombre + ' tiene:')
    pizzas.ingredientes.forEach ((ingrediente) => {
        console.log( `_ ${ingrediente}`)
    })
})