const pokeapi = "https://pokeapi.co/api/v2/pokemon?limit=200&offset=0";
const pokeapi2 = "https://pokeapi.co/api/v2/pokemon?limit=200&offset=200";
const pokeapi3 = "https://pokeapi.co/api/v2/pokemon?limit=200&offset=400";
const pokeapi4 = "https://pokeapi.co/api/v2/pokemon?limit=200&offset=650";
const pokeapi5 = "https://pokeapi.co/api/v2/pokemon?limit=200&offset=750";
const pokeapi6 = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=950";


const loadApi = () => {
    axios.get(pokeapi)
    .then((api) => {
        var load = "2";
        const pokename  = api.data.results;
        pokemons(pokename, load);
    })
    .catch(function(error) {
        console.log(error);
    });
}

const pokemons2 = () =>{
    axios.get(pokeapi2)
    .then((api) => {
        var load = "3";
        const pokename = api.data.results;
        pokemons(pokename, load);
    })
    .catch(function(error) {
        console.log(error);
    });
}

const pokemons3 = () =>{
    axios.get(pokeapi3)
    .then((api) => {
        var load = "4";
        const pokename = api.data.results;
        pokemons(pokename, load);
    })
    .catch(function(error) {
        console.log(error);
    });
}
const pokemons4 = () =>{
    axios.get(pokeapi4)
    .then((api) => {
        var load = "5";
        const pokename = api.data.results;
        pokemons(pokename, load);
    })
    .catch(function(error) {
        console.log(error);
    });
}

const pokemons5 = () =>{
    axios.get(pokeapi5)
    .then((api) => {
        var load = "6";
        const pokename = api.data.results;
        pokemons(pokename, load);
    })
    .catch(function(error) {
        console.log(error);
    });
}

const pokemons6 = () =>{
    axios.get(pokeapi6)
    .then((api) => {
        var load = "0";
        const pokename = api.data.results;
        pokemons(pokename, load);
    })
    .catch(function(error) {
        console.log(error);
    });
}

function pokemons(data, load){
    var output = "";
    var btn = "";
    for(var i of data){
        axios.get(i.url)
        .then((url)=>{
            var img = url.data.sprites.front_default; 
            if (img === null){
                img = url.data.sprites.other.home.front_default; //solo hice esta validacion de imagen porque es la mas usada, 
                                                                //y luego vi que hay muchas variantes y pasaria un monton de tiempo escribiendo cada una xd
                if (img === null){
                    img = `./Examples/maxresdefault.jpg`; //en caso de no encontrar imagen, se pone una default
                }
            }
                output += `
                <div id="divss" class="col-2 imgs">
                            <div id="validimg">
                            <a href="./pokemon.html?id=${url.data.id}">
                                <img loading="lazy" id="imgpoke" src="${img}" alt="${url.data.id}">
                            </a>
                            </div>
                            <div>
                                <p class="fs-5 fw-semibold info">${url.data.name}</p>
                                <p class="font-monospace info">ID: #${url.data.id}</p>
                            </div>
                        </div>
                </div>
            `;  
            document.getElementById("pokemons").innerHTML = output; 
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    if (load != 0){
        btn = `
        <div id="pokebtn">
            <button type="button" onclick="pokemons${load}()" class="btn btn-success">Cargar mas...</button>
        </div>
        `;
        document.getElementById("pokebtn").innerHTML = btn;
    }
    else {
        btn = `
        <div id="pokebtn">
        <a href="./index.html"> 
        <button type="button" class="btn btn-success">Volver al inicio</button>
        </a>
        </div>
        `;
        document.getElementById("pokebtn").innerHTML = btn;
    }
}


