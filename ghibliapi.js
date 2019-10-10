'use strict';

/*2 posibilidades: a) modifico el objeto agregando la imagen 
como propiedad o una vez ya tengo el objeto le agrego con un loop o forEach foto a cada objeto  . Escojo la primera opción   */

function matchFilmImage(data, photos) {
    data.forEach(movie => {
        //buscar en photos la id de movie
        //meter en movie la url de photo
        const movieImage = photos.find(photo => {
            if (photo.id === movie.id) {
                return photo;
            }
        })
        movie.image = movieImage.url;
    })
}

async function getFilms() {
    let response = await fetch(`https://ghibliapi.herokuapp.com/films`);
    let data = await response.json();
    matchFilmImage(data, photos);
    //llamo a la función que me ha agregado la foto al objeto
    let parent = document.querySelector(".flex-container");
    //He de seleccionar al padre para hacer el appendChild
    console.log(data);

    for (let i = 0; i < data.length; i++) {
        let li = document.createElement('li');
        li.setAttribute("metadata", "photo");
        li.setAttribute("class", "flex-item");
        /*a la class li le agrego el atributo flex-item definido 
        en el css: class*/
        li.innerHTML = `
            <img src = "${data[i].image}" width = '100%'>
            <p class= "card-text">Title: ${data[i].title}</p> 
            <p class = "card-text">Director: ${data[i].director}</p>
            <p class = "card-text">Release date: ${data[i].release_date}</p> 
        </div>`

        parent.appendChild(li);
        console.log(li);
    }
    console.log(data);
}
getFilms();

//var p = document.createElement("p");
//document.body.appendChild(p);


//https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49
/*preguntar*/


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