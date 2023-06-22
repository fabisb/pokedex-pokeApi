const URL = `https://pokeapi.co/api/v2/pokemon`;

const getPokeId = () => {
    let params = new URLSearchParams(location.search);
    var id = params.get('id');

    axios.get(`${URL}/${id}`)
    .then(function (request) {
        const pokemon = request.data;
        printPoke(pokemon);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const printPoke = (pokemon) => {
    var img = pokemon.sprites.front_default;
    var altura = pokemon.height / 39.37;
    var peso = pokemon.weight / 2.205;
    var outputTypes = '';
    var outputstats = '';
    var outputmoves = '';

    document.getElementById("name").innerHTML = pokemon.name;

    if (img === null){
        img = pokemon.sprites.other.home.front_default; //solo hice esta validacion de imagen porque es la mas usada, 
                                                        //y luego vi que hay muchas variantes y pasaria un monton de tiempo escribiendo cada una xd
        if (img === null){
            img = `./Examples/maxresdefault.jpg`; //en caso de no encontrar imagen, se pone una default
        }
    }

    for (var tipo of pokemon.types){
        outputTypes += ` ` + tipo.type.name;
    }
    
    for (var stat of pokemon.stats){
        outputstats += ` 
        <li class="stats list-group-item"> ${stat.stat.name}: ${stat.base_stat} Esfuerzo: ${stat.effort} </li>
        `;
    }

    for (var powers of pokemon.moves){
        console.log(powers.move.name);
        outputmoves += ` 
        ${powers.move.name}, 
        `;
    }

    document.getElementById("pokeimg").src = img;
    document.getElementById("id").innerHTML = `ID # ${pokemon.id}`;
    document.getElementById("altura").innerHTML = `Altura: ${altura.toFixed(2)} Metros`;
    document.getElementById("type").innerHTML = `Tipos: ${outputTypes}`;
    document.getElementById("peso").innerHTML = `Peso: ${peso.toFixed(2)} Kilos`;
    document.getElementById("stats").innerHTML = `${outputstats}`;
    document.getElementById("power").innerHTML = `</br> ${outputmoves}`;
  }