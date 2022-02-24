<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png"/>
    <br>
    <button v-on:click="retorna()">asdadsadsad</button>
    <HelloWorld :msg='title'/>
    <PokeMon v-for="pokemon in pokemons" :key="pokemon" :pokemon="pokemon"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PokeMon from './components/PokeMon'

// api
import { getPokemons } from './api/api'

export default {
  name: 'App',
  data: function(){
    return{
      title: "Esse é o NOSSO titulo",
      pokemons: []
    }
  },
  created: function(){
    for (let i = 1; i <= 10; i++) {
      getPokemons.then((resp) =>{
        this.pokemons.push(resp.data.results[i]);
      });
    }
  },
  components: {
    HelloWorld,
    PokeMon,
  },
  methods:{
    // nothing at moment
    retorna(){
      console.log(this.pokemons);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display:flex;
}
img{
  width: 50px;
}
</style>
