document.addEventListener('DOMContentLoaded', function() {
    const moviesContainer = document.getElementById('movies-container');
    const addMovieForm = document.getElementById('add-movie-form');
    function getMovies() {
        return fetch(' http://localhost:3000/movies')
        .then(response => response.json());
         }
    
    const preLoadedMovies = [
    {
    title: 'The Walking Dead',
    genre: 'Thriller',
    director: 'Robert Luketic',
    releaseYear: 2001
    },
    {
    title: 'Dead Poets Society',
    genre: 'teen/thriller',
    director: 'Peter Weir',
    releaseYear: 1989
    },
{
    title: 'Harry potter',
    genre: 'Drama',
    director: 'Mark Waters',
    releaseYear: 2004
     }
    ];

    // Display pre-loaded movies
     displayMovies(preLoadedMovies);
    
     // Add movie form submission event
    addMovieForm.addEventListener('submit', function(event) {
    event.preventDefault();
     const titleInput = document.getElementById('title');
    const genreInput = document.getElementById('genre');
     const directorInput = document.getElementById('director');
    const releaseYearInput = document.getElementById('release-year');
 
    const movieData = {
     title: titleInput.value,
     genre: genreInput.value,
     director: directorInput.value,
     releaseYear: releaseYearInput.value
    };
 // Add the new movie to the movies container
    const newMovie = createMovieElement(movieData);
    moviesContainer.appendChild(newMovie);
 
    // Clear the form inputs
    titleInput.value = '';
    genreInput.value = '';
    directorInput.value = '';
    releaseYearInput.value = '';
    });
    
function displayMovies(movies) {
    movies.forEach(function(movie) {
     const movieGroup = document.createElement('div');
    movieGroup.classList.add('movies-group');
    
const movieTitle = document.createElement('h3');
movieTitle.textContent = movie.title;
movieGroup.appendChild(movieTitle);
    
const movieElement = createMovieElement(movie);
movieGroup.appendChild(movieElement);
 moviesContainer.appendChild(movieGroup);
    });
    }

    function createMovieElement(movie) {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
     movieElement.innerHTML = `
     <h>${movie.title}</h>
    <p>Title: ${movie.title}</p>
     <p>Genre:${movie.genre}</p>
    <p>Director:${movie.director}</p>
     <p>Release Year:${movie.releaseYear}</p>
    `;
 
    return movieElement;
 }
    });
    