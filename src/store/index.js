import Vue from "vue";
import Vuex from "vuex";
import home from "./modules/home";
import addr from "./modules/addr";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    addr
  }
});
