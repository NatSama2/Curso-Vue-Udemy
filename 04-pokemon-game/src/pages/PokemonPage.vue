<template>
  <h1>¿Quien es este pokémon?</h1>

  <!--TODO img-->
  <PokemonPicture :pokemonId="4" :showPokemon="true" />

  <!--Todo Opciones-->

  <PokemonOptions :pokemons="pokemonArr" />
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
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      console.log("this.pokemonArr", this.pokemonArr);
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>
