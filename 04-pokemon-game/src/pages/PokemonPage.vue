<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quien es este pokémon?</h1>

    <!-- Imagen del Pokémon -->
    <PokemonPicture :pokemon-id="pokemon.id" :show-pokemon="showPokemon" />

    <!-- Opciones de Pokémon -->
    <PokemonOptions
      class="fade-in"
      v-if="!selected && !gameOver"
      :pokemons="pokemonArr"
      @selection-pokemon="checkAnswer"
    />

    <!-- Mostrar mensaje y botón de siguiente o reiniciar -->
    <template v-if="showAnswer || gameOver">
      <h2 class="fade-in">{{ message }}</h2>
      <button class="btn next" v-if="!gameOver" @click="nextQuestion">
        Siguiente
      </button>
      <button class="btn restart" v-else @click="resetGame">
        Reiniciar juego
      </button>
    </template>

    <!-- Mostrar puntaje al finalizar el juego -->
    <template v-if="gameOver">
      <h2 class="fade-in">Felicidades su puntaje es de {{ score }}</h2>
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
      score: 0,
      answersCount: 0,
      gameOver: false,
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
      this.answersCount++;

      if (selectedId === this.pokemon.id) {
        this.score++;
        this.message = `Correcto, ${this.pokemon.name}`;
      } else {
        this.message = `Oops, era ${this.pokemon.name}`;
      }

      console.log(`Score: ${this.score}, Answers Count: ${this.answersCount}`);

      // Lógica del contador
      if (this.answersCount === 10) {
        this.gameOver = true;
      }
    },
    nextQuestion() {
      if (!this.gameOver) {
        this.pokemon = null; // Restablecer pokemon a null
        this.showPokemon = false;
        this.showAnswer = false;
        this.selected = false;
        this.mixPokemonArray();
      }
    },
    resetGame() {
      this.score = 0;
      this.answersCount = 0;
      this.gameOver = false;
      this.newGame();
    },

    newGame() {
      this.pokemon = null;
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

<style scoped>
.btn {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 2px;
  cursor: pointer;
  border-radius: 12px;
  transition-duration: 0.4s;
}

.btn:hover {
  background-color: #45a049;
}

.next {
  background-color: #008cba;
}

.next:hover {
  background-color: #007bb5;
}

.restart {
  background-color: #f44336;
}

.restart:hover {
  background-color: #da190b;
}
</style>
