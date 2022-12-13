const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const clearResultButton = document.getElementById('clearResultButton');
let offset = 0;
const limit = 5;

loadPokemonsItens(offset, limit);

function loadPokemonsItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li id="${pokemon.id}" class="pokemon item_lista ${pokemon.type}">

                        <div class="div_img">
                        <img class="img_pokemon" id="${pokemon.id}" src="${pokemon.photo}" alt="${pokemon.name}">
                        </div>
                        <span class="number">#${pokemon.id}</span>
                        <span class="name">${pokemon.name}</span>
                        <div id="${pokemon.id}" class="detail">

                            <div class="types">
                            ${pokemon.types.map((type) => `<div class="type ${type}">${type}</div>`).join('')}
                            </div>
                            
                            
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




