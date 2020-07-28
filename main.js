
// Get Pokemon By ID Fetch
async function getPokemon(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return data;
}

// Get Pokemon By Name Fetch
async function getPokemonByName(name){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();
    return data;
}

// Init Function
async function init() {
    const pokemon = await getPokemon(1);
    updatePokemon(pokemon);
}
init();

// Update the UI with the pokemon
function updatePokemon(pokemon) {
    window.pokemon.textContent = pokemon.name;
    window.image.setAttribute('src', pokemon.sprites.front_default);
    window.type.textContent = pokemon.types[0].type.name;
    window.experience.textContent = pokemon.base_experience;
    window.weight.textContent = `${pokemon.weight}`;
    window.height.textContent = `${pokemon.height / 10} mts`;
}

// Search Pokemon by ID
window.search.addEventListener('change', async () => {
    const pokemon = await getPokemon(window.search.value);
    updatePokemon(pokemon);
});        
    
// Next Pokemon Button
function nextId() {
    let next = document.querySelector('#next');
    next.addEventListener('click', async () => {
        const currentNamePokemon = window.pokemon.textContent;

        const pokemon = await getPokemonByName(currentNamePokemon);
        const nextId = pokemon.id + 1;
        const nextPokemon = await getPokemon(nextId);
        updatePokemon(nextPokemon);
    });
}
nextId();

// Prev Pokemon Button
function prevId() {
    let prev = document.querySelector('#prev');
    prev.addEventListener('click', async () => {
        const currentNamePokemon = window.pokemon.textContent;

        const pokemon = await getPokemonByName(currentNamePokemon);
        const prevId = pokemon.id - 1;
        const prevPokemon = await getPokemon(prevId);
        updatePokemon(prevPokemon);
    });
}
prevId();