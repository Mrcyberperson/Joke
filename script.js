document.addEventListener('DOMContentLoaded', getJoke);

function getJoke() {
    const jokeTextElement = document.getElementById('joke-text');
    
    fetch('https://v2.jokeapi.dev/joke/Any?format=txt')
        .then(response => response.text())
        .then(joke => {
            jokeTextElement.textContent = joke;
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            jokeTextElement.textContent = 'Failed to fetch joke';
        });
}

document.getElementById('new-joke-btn').addEventListener('click', getJoke);
