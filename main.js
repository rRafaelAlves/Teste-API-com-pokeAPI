function carregarPokemon (){
   const urlPokemon1 = 'https://pokeapi.co/api/v2/pokemon/1'
   const urlPokemon2 = 'https://pokeapi.co/api/v2/pokemon/25'
   const urlPokemon3 = 'https://pokeapi.co/api/v2/pokemon/4'

   fetch(urlPokemon1)
   .then((conteudo)=>{
    return conteudo.json();
   })

   .then((dataApi)=>{
    document.getElementById('namePokemon1').innerHTML = dataApi['name'];
    const p1 = dataApi['sprites']['front_default'];

    document.getElementById('imgPokemon1').setAttribute('src', p1)
    document.getElementById('poderPokemon1').innerHTML = dataApi['types']['0']['type']['name'];
   })

   fetch(urlPokemon2)
   .then((conteudo)=>{
    return conteudo.json();
   })
   .then((dataApi)=>{
    document.getElementById('namePokemon2').innerHTML = dataApi['name'];
    const p1 = dataApi['sprites']['front_default'];

    document.getElementById('imgPokemon2').setAttribute('src', p1)
    document.getElementById('poderPokemon2').innerHTML = dataApi['types']['0']['type']['name'];
   })

   fetch(urlPokemon3)
   .then((conteudo)=>{
    return conteudo.json();
   })
   .then((dataApi)=>{
    document.getElementById('namePokemon3').innerHTML = dataApi['name'];
    const p1 = dataApi['sprites']['front_default'];

    document.getElementById('imgPokemon3').setAttribute('src', p1)
    document.getElementById('poderPokemon3').innerHTML = dataApi['types']['0']['type']['name'];
   })
}

document.getElementById('btn'). onclick = carregarPokemon;