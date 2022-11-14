const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const clearResultButton = document.getElementById('clearResultButton');
let offset = 0;
const limit = 5;

function loadPokemonsItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li id="${pokemon.id}" class="pokemon ${pokemon.type}">

                        <span class="number">#${pokemon.id}</span>
                        <span class="name">${pokemon.name}</span>
                        <div id="${pokemon.id}" class="detail">
                            <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                            </ol>
                            <span class="imgLabel">
                            <img id="${pokemon.id}" src="${pokemon.photo}" alt="${pokemon.name}">
                            <label class="label">Click me</label>
                            </span>
                            </a>
                        </div>
            </li>
        `).join('');
        pokemonList.innerHTML += newHtml;
        })
}

if(pokemonList){
    pokemonList.addEventListener("click",function(e) {

        //if (e.target && e.target.matches("img")) {
            if (e.target.matches("img")) {
                sessionStorage.setItem('url', e.target.id);
                var urlDetails = "pokemon-detail.html";
                //detailPokemon(e.target.id);
                window.location.href = urlDetails;

           }
      });
}

//loadPokemonsItens.addEventListener('click', () => {console.log("Teste")})



if(loadMoreButton){
    loadMoreButton.addEventListener('click', () => {
        loadPokemonsItens(offset, limit);
        offset += limit;
    })
}

if(clearResultButton){
    clearResultButton.addEventListener('click', () => {
        pokemonList.innerHTML = ``;
        offset = 0;
    })
}




