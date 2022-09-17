import { createStore } from "vuex";
import { auth } from "./store";

const store = createStore({
  modules: {
    auth,
  },
});

export default store;