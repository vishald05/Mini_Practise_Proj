async function fetchdata(){
    const name = document.getElementById("pokemonName").value.toLowerCase();
    const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    
    if(!response.ok){
        console.log("Failed to fetch");
    }
    else{
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const Myimg = document.getElementById("PokemonPic");
        Myimg.src = pokemonSprite;
        Myimg.style.display = "block";

    }
}