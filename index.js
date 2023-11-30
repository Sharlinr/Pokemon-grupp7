const PokedexData = [
    {
      name: "bulbasaur",
      height: 7,
      weight: 69,
      type: "grass",
      url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    },
    {
      name: "charmander",
      height: 6,
      weight: 85,
      type: "fire",
      url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
    },
    {
      name: "pikachu",
      height: 4,
      weight: 60,
      type: "electric",
      url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
    },
    {
      name: "mewtwo",
      height: 20,
      weight: 1220,
      type: "psychic",
      url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
    },
    {
      name: "magikarp",
      height: 9,
      weight: 100,
      type: "water",
      url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png"
    },
    {
      name: "jigglypuff",
      height: 5,
      weight: 55,
      type: "normal",
      url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png"
    },
    {
      name: "squirtle",
      height: 5,
      weight: 90,
      type: "water",
      url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
    },
    {
      name: "jolteon",
      height: 8,
      weight: 245,
      type: "electric",
      url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png"
    },
    {
      name: "electabuzz",
      height: 11,
      weight: 300,
      type: "electric",
      url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png"
    },
    {
      name: "moltres",
      height: 20,
      weight: 600,
      type: "fire",
      url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png"
    },
    {
      name: "growlithe",
      height: 7,
      weight: 190,
      type: "fire",
      url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png"
    },
    {
      name: "oddish",
      height: 5,
      weight: 54,
      type: "grass",
      url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png"
    },
    {
      name: "rattata",
      height: 3,
      weight: 35,
      type: "normal",
      url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png"
    },
    {
      name: "hypno",
      height: 16,
      weight: 756,
      type: "psychic",
      url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png"
    }
  ];

//Visa ut samtliga pokemon och deras data på sidan.

 let ulPokemon = document.querySelector('#pokemonList');
 PokedexData.forEach(pokemon => {
     let li = document.createElement('li');
    li.innerHTML += `${pokemon.name}, ${pokemon.height}, ${pokemon.weight}, ${pokemon.type}`;
    ulPokemon.append(li);
 });

// let chosenType = document.querySelectorAll('input[type="checkbox"]:checked');
let filterBtn = document.querySelector("#filterBtn");



filterBtn.addEventListener('click', () => {
  let chosenType = document.querySelectorAll('input[type="checkbox"]:checked');
  let chosenTypeArr = [];
  chosenType.forEach((checkbox) => {
    chosenTypeArr.push(checkbox.value);
  });
  
  let filteredByType = PokedexData.filter((pokemon) => {
    return chosenTypeArr.includes(pokemon.type);
  });
  
  ulPokemon.innerHTML = "";

  filteredByType.forEach((pokemon) => {
    let li = document.createElement("li");
    li.innerHTML += `${pokemon.name}, ${pokemon.height}, ${pokemon.weight}, ${pokemon.type}`;
    ulPokemon.append(li);
    console.log(chosenTypeArr);
  });
 });


