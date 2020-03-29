'use strict';

/* The Ghibli public app hasn't the film posters, only the data, for this reason:
Two possibilities: 
a) I change the object adding the image as a property
b) Once I have the object from the API with a loop or a forEach I add the photo.
I chose the first option:*/

function matchFilmImage(data, photos) {
    data.forEach(movie => {
        const movieImage = photos.find(photo => {
            if (photo.id === movie.id) {
                return photo;
            }
        })
        movie.image = movieImage.url;
    })
}

async function getFilms(){
    let response = await fetch(`https://ghibliapi.herokuapp.com/films`);
    let data = await response.json();
    matchFilmImage(data, photos);
    let parent = document.querySelector(".flex-container");


    for (let i = 0; i < data.length; i++) {
        let li = document.createElement('li');
        li.setAttribute("metadata", "photo");
        li.setAttribute("class", "flex-item");
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
