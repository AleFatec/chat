import axios from 'axios';

const getPokemons = axios.get('https://pokeapi.co/api/v2/pokemon/');

export  {
    getPokemons,
}