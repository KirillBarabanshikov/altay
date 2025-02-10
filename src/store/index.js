import { createStore } from "vuex";
import router from "@/router";

export default createStore({
  state: {
    events: 1,
  },
  getters: {
    events: (state) => state.events,
  },
  mutations: {
    setEvents(state, num) {
      state.events = num;
    },
    backFromSeason(state) {
      router.go(-1);
      state.events = 2;
    },
  },
  actions: {},
  modules: {},
});
