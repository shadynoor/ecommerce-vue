import { createApp } from "vue";
import "./style.css";
import router from "./router";
import store from "./store";
import App from "./App.vue";

// import VueMaterial from "vue-material";
// import "vue-material/dist/vue-material.min.css";
// import "vue-material/dist/theme/default.css";

createApp(App).use(router).use(store).mount("#app");
