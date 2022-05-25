const poke_container = document.getElementById(`poke-container`);
const pokemon_count = 150;
const colors = {
    fire : `#fddfdf`,
    grass : `#defde0`,
    electric : `#fcf7de`,
    water : `#def3fd`,
    ground : `#f4e7da`,
    rock : `#d5d5d4`,
    fairy : `#fceaff`,
    poison : `#98d7a5`,
    bug : `#fod5a3`,
    dragon : `#97b3e6`,
    psychic : `#eaeda1`,
    flying : `#f5f5f5`,
    fighting : `#e6e0d4`,
    normal: `#f5f5f5`
}

const main_types = Object.keys(colors);
const count = 150;
const fetchPokemon = async() => {
    for(i=1; i<= count ; i++){
        await gotPokemon(i);

    }
}

const gotPokemon = async id => {
    const url = ` https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    createPokemonCard(data);
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement(`div`);
    pokemonEl.classList.add(`pokemon`);
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const poke_type = pokemon.types.map( type => type.type.name);
    const type = main_types.find(type => poke_type.indexOf(type) > -1);
    const color = colors[type];

    pokemonEl.style.backgroundColor = color
    
    console.log(main_types);


    const pokemonInnerHTML = 
    `   <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}">
        </div>
        <div class="info">
             <h3 class="name">${name}</h3>
            <small class="type">Type:<span>${type}</span></small>
        </div>`;

        pokemonEl.innerHTML = pokemonInnerHTML;
        poke_container.appendChild(pokemonEl);

}

fetchPokemon ();

