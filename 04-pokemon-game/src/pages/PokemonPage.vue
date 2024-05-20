<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quien es este pokémon?</h1>

    <!--TODO img-->
    <PokemonPicture :pokemon-id="pokemon.id" :show-pokemon="showPokemon" />

    <!--Todo Opciones-->

    <PokemonOptions
      v-if="!selected"
      :pokemons="pokemonArr"
      @selection-pokemon="checkAnswer"
    />

    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">Siguiente</button>
    </template>
  </div>
</template>

<script>
import PokemonPicture from "../components/PokemonPicture";
import PokemonOptions from "../components/PokemonOptions";

import getPokemonOptions from "@/helpers/getPokemonOptions";

console.log("PokemonOptions", getPokemonOptions());

export default {
  name: "PokemonPage",
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
      selected: false,
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      // console.log("this.pokemonArr", this.pokemonArr);

      const rndInt = Math.floor(Math.random() * 4);
      // console.log("rndInt", rndInt);
      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(selectedId) {
      console.log("Pokemon Page llamado", selectedId);
      this.showPokemon = true;
      this.showAnswer = true;
      this.selected = true;

      if (selectedId === this.pokemon.id) {
        this.message = `Correcto, ${this.pokemon.name}`;
      } else {
        this.message = `Oops, era ${this.pokemon.name}`;
      }
    },
    newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArr = [];
      this.pokemon = null;
      this.selected = false;
      this.mixPokemonArray();
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>
