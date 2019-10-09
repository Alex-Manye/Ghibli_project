'use strict';

async function getUsers() {
    let response = await fetch(`https://ghibliapi.herokuapp.com/films`);
    let data = await response.json();
    //let div = document.querySelector("#card-deck");

    for (let i = 0; i < data.length; i++) {
        let article = document.createElement('article');
        article.setAttribute("class", "card");
        //¿por qué le damos 2 atributos?
        article.innerHTML = `<img src= "./img/Ghiblifoto1.jpeg"
        class = "card-image-top" alt = "${data[i].title}";`
        //¿2 innerHTML?
        article.innerHTML = `<div class = "card-body">;
            <h5 class="card-title">${data[i].title}</h5> 
            <p class = "card-text" > ${data[i].director}</p>
            <p class = "card-text"> ${data[i].release_date}</p> 
        </div>`

        section.appendChild(article); /* esto es lo que está mal*/

        console.log(article);
    }
    console.log(data);
}
getUsers();

/*
const connectToApi = () => {
    const section = document.querySelector('.pokemon-list');

    for (let i = 1; i < 22; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(function (response) {
                return response.json()
            })
            .then(function (pokemon) {
                console.log(pokemon)
                const article = document.createElement('article')
                article.innerHTML = `
          <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
          <h3>${pokemon.name}</h3>
          <div>
            ${pokemon.types.map(pokemonType => `<p class="pokemon-type-label">${pokemonType.type.name}</p>`).join('')}
          </div>
        `
                section.appendChild(article);
            })
            .catch(function (error) {
                return error;
            })
    }
}
connectToApi();
*/