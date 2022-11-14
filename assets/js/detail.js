const pokemonDetailHtml = document.getElementById('body');
let isFill = true
detailPokemon();

function detailPokemon(){
    var pokemonId = sessionStorage.getItem('url');
    pokeApi.getPokemon(pokemonId).then((pokemon) => {

    const detailHtml = `<section class="content ${pokemon.type}">
    <div>
        <h1>Pokedex</h1>
    </div>
    <nav class="nav">
            <button id="backButton" onclick="backHomeButton()" type="button" class="back-button commum">
                Back
            </button>
        
            <button id="fevoriteButton" onclick="fevoriteButton()" type="button" class="fevorite-button commum">
                
            </button>
    </nav>

    <div id="pokemonDetail" class= "pokemon-detail">
        <h1 class="nome-pokemon">${pokemon.name}</h1>
                        <div class="list-detail">
                            <span class="number">${pokemon.id}</span>
                        <ol id="types" class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        <div class="img-pokemon">
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                        </div>
                        <!-- Tabs details -->
                        <div class="tab-detail">
                            <!-- Tabs buttons -->
                        <div class="tab-button">
                            <button id="bt-Aboult" class="button" style="text-decoration-line: underline" onclick="tabButton('Aboult', 'bt-Aboult')">Aboult</button>
                            <button id="bt-Base" class="button" onclick="tabButton('Base', 'bt-Base')">Base Status</button>
                            <button id="bt-Evolution" class="button" onclick="tabButton('Evolution', 'bt-Evolution')">Evolution</button>
                            <button id="bt-Moves" class="button" onclick="tabButton('Moves', 'bt-Moves')">Moves</button>
                        </div>

                        <div id="Aboult" class="container-tabs tabName"><h4>Aboult</h4></div>
                        <div id="Base" class="container-tabs tabName" style="display:none"><h4>Base Status</h4></div>
                        <div id="Evolution" class="container-tabs tabName" style="display:none"><h4>Evolution</h4></div>
                        <div id="Moves" class="container-tabs tabName" style="display:none"><h4>Moves</h4></div>

                        </div>
                        </div>
            </div>
    
        </section>`;

        pokemonDetailHtml.innerHTML += detailHtml;
    })     
   
 }

 function tabButton(tabName, button){
    var y = document.getElementsByClassName("button");
    var x = document.getElementsByClassName("tabName");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].style.textDecorationLine = "none";
    }
    document.getElementById(tabName).style.display = "block";
    document.getElementById(button).style.textDecorationLine = "underline";
}

function backHomeButton(){
    window.location.href = "index.html";
}

function fevoriteButton(){
    const favButton = document.getElementById("fevoriteButton");
    console.log(isFill);
    if(isFill){
        favButton.style.background = "url(/assets/image/heart_fill.svg)";
        favButton.style.backgroundRepeat = "no-repeat";
        favButton.style.backgroundPositionX = "center";
        isFill = false
    }else{
        favButton.style.background = "url(/assets/image/heart_unfill.svg)";
        favButton.style.backgroundRepeat = "no-repeat";
        favButton.style.backgroundPositionX = "center";
        isFill = true
    }
}
