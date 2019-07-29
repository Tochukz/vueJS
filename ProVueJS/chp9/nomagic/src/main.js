require("../node_modules/bootstrap/dist/css/bootstrap.min.css");

/**
 * Implementing counter using the DOM API
 *
let counter = 1;

let container = document.createElement("div");
container.classList.add("text-center", "p-3");

let msg = document.createElement("h1");
msg.classList.add("bg-primary", "text-white", "p-3");
msg.textContent = "Button Not Presses";

let button = document.createElement("button");
button.textContent = "Press Me";
button.classList.add("btn", "btn-seconadary");
button.onclick = () => msg.textContent = `Button Presses: ${counter++}`;

container.appendChild(msg);
container.appendChild(button);

let app = document.getElementById("app");
app.parentElement.replaceChild(container, app);
*/

//Impelmenting counter using Vue
/*
import Vue from "vue";

new Vue({
    el: "#app",
    template: `<div class="text-center p-3">
                <h1 class="bg-secondary text-white p-3">
                   {{ message }}
                </h1>
                <button class="btn btn-secondary" v-on:click="handleClick">
                  Press Me
                </button>
               </div>`,
    data: {
        counter: 0
    },
    methods: {
      handleClick() {
        this.counter++;
      }
    },
    computed: {
      message() {
        return this.counter == 0 ?
          "Button Not Pressed" : `Button Presses: ${this.counter}`;
      }
    }
})

*/

import Vue from 'vue';
import MyComponent from "./App";
import Split from './components/Split';

new Vue({
  el: '#app',
  components: {
    "custom": MyComponent ,
    split: Split
  },
  template: `<div class="text-center">
              <h1 class="bg-primary text-white p-3">
                This is the main.js file
              </h1>
              <custom />
              <split />
            </div>`
});