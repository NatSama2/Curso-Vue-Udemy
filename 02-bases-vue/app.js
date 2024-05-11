const app = Vue.createApp({
  template: `
  <h1>Hola Mundo</h1>
  <p>Desde app.js</p>
  `,
});

app.mount("#myApp");

/*
const { createApp } = Vue;

createApp({
  data() {
    return {
      texto: "Hola desde Vue 3",
    };
  },
}).mount("#myApp");
*/
