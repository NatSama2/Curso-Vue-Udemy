<template>
  <h1>¿Quien es este pokémon?</h1>

  <!--TODO img-->
  <PokemonPicture />

  <!--Todo Opciones-->

  <PokemonOptions />
</template>

<script>
import PokemonPicture from "../components/PokemonPicture";
import PokemonOptions from "../components/PokemonOptions";

export default {
  name: "PokemonPage",
  components: {
    PokemonPicture,
    PokemonOptions,
  },
};
</script>
