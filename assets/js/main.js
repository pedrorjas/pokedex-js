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
                        
                        <div class="detail">
                            <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                            </ol>
                            <img src="${pokemon.photo}" alt="${pokemon.name}">
                        </div>
            </li>
        `).join('');

        pokemonList.innerHTML += newHtml;
        })
}

if(pokemonList){
pokemonList.addEventListener.getElementById("click", () => {
        console.log('teste')
        }
    )
}

function detailPokemon(pokemon){
    pokemon.tar
     pokemon.addEventListener.getElementById("click", () => {
         console.log(pokemon);
         }
     )
 }

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



function tabButton(tabName, button){
    var y =document.getElementsByClassName("button");
    var x = document.getElementsByClassName("tabName");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].style.textDecorationLine = "none";
    }
    document.getElementById(tabName).style.display = "block";
    document.getElementById(button).style.textDecorationLine = "underline";
}
