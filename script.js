
let pokemones = [
  {
    nombre: "Bulbasaur",
    img: "./img/imagenBulbasaur.png",
    tipo: ["Planta", "Veneno"],
    numero: 1,
    descripcion: "Un Pokémon semilla que crece con la luz del sol.",
    hp: 45,
    hpActual: 45,
    ataque: 49,
    defensa: 49
  },
  {
    nombre: "Charmander",
    img: "./img/imagenchanmander.png",
    tipo: ["Fuego"],
    numero: 4,
    descripcion: "La llama en su cola indica su salud y vitalidad.",
    hp: 39,
    hpActual: 39,
    ataque: 52,
    defensa: 43
  },
  {
    nombre: "Squirtle",
    img: "./img/imagenSquirtle.png",
    tipo: ["Agua"],
    numero: 7,
    descripcion: "Cuando se asusta, se esconde dentro de su caparazón.",
    hp: 44,
    hpActual: 44,
    ataque: 48,
    defensa: 65
  },
  {
    nombre: "Gengar",
    img: "",
    tipo: ["Fantasma"],
    numero: 7,
    descripcion: "Cuando se asusta, se esconde dentro de su caparazón.",
    hp: 44,
    hpActual: 44,
    ataque: 48,
    defensa: 65
  }
];

function mostrarPokemones() {
  console.log("Lista de Pokemones:");
  console.table(pokemones);
  console.log("Nombres cargados:", pokemones.map(p => p.nombre).join(", "));
}

function agregarPokemon() {
  let continuar = true;
  while (continuar) {
    let nombre = prompt("Ingrese el nombre del Pokémon:");
    if (!nombre) break;

    let img = prompt("Ingrese la URL o ruta relativa de la imagen (ej: ./img/miImagen.png):") || "";
    let tiposInput = prompt("Ingrese los tipos separados por coma (ej: Agua, Hielo):") || "";
    let tipos = tiposInput ? tiposInput.split(",").map(t => t.trim()) : [];
    let numero = parseInt(prompt("Ingrese el número en la Pokédex:"), 10);
    if (Number.isNaN(numero)) numero = 0;
    let descripcion = prompt("Ingrese una descripción:") || "";
    let hp = parseInt(prompt("Ingrese los puntos de vida (HP):"), 10);
    if (Number.isNaN(hp)) hp = 0;
    let ataque = parseInt(prompt("Ingrese el valor de ataque:"), 10);
    if (Number.isNaN(ataque)) ataque = 0;
    let defensa = parseInt(prompt("Ingrese el valor de defensa:"), 10);
    if (Number.isNaN(defensa)) defensa = 0;

    let nuevoPokemon = {
      nombre,
      img,
      tipo: tipos,
      numero,
      descripcion,
      hp,
      hpActual: hp,
      ataque,
      defensa
    };

    pokemones.push(nuevoPokemon);
    alert(`${nombre} fue agregado exitosamente!`);

    let resp = prompt("¿Desea agregar otro pokémon? (s/n)").toLowerCase();
    continuar = resp === "s" || resp === "si";
  }
}

function restarHP() {
  let nombre = prompt("Ingrese el nombre del Pokémon al que quiere restar HP:");
  if (!nombre) {
    alert("Nombre vacío.");
    return;
  }
  let pokemon = pokemones.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());

  if (pokemon) {
    let resta = parseInt(prompt(`¿Cuántos HP desea restar a ${pokemon.nombre}?`), 10);
    if (Number.isNaN(resta)) {
      alert("Valor inválido.");
      return;
    }
    pokemon.hp -= resta;
    if (pokemon.hp < 0) pokemon.hp = 0;
    pokemon.hpActual = Math.min(pokemon.hpActual, pokemon.hp);
    alert(`Ahora ${pokemon.nombre} tiene ${pokemon.hp} HP.`);
  } else {
    alert("No se encontró ese Pokémon.");
  }
}

function menu() {
  let opcion;
  do {
    opcion = prompt(
      "Elija una opción:\n1 - Mostrar Pokemones\n2 - Agregar Pokémon\n3 - Restar HP\n0 - Salir"
    );

    switch (opcion) {
      case "1":
        mostrarPokemones();
        break;
      case "2":
        agregarPokemon();
        break;
      case "3":
        restarHP();
        break;
      case "0":
        alert("Saliendo del programa...");
        break;
      default:
        alert("Opción no válida");
    }

    mostrarPokemones();
  } while (opcion !== "0");
}

menu();
