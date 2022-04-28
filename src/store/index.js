import { createStore } from "vuex";

export default createStore({
  state: {
    characters: [],
    charactersFilter: [],
    menuColor: "",
  },
  getters: {},
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload;
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload;
    },
    setMenuColor(state, payload) {
      state.menuColor = payload;
    },
  },
  actions: {
    async getCharacters({ commit }) {
      try {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
        commit("setCharacters", data.results);
        commit("setCharactersFilter", data.results);
      } catch (error) {
        console.log(error);
      }
    },

    filterByStatus({ commit, state }, status) {
      const res = state.characters.filter((character) => {
        return character.status.includes(status);
      });
      commit("setCharactersFilter", res);
    },

    filterByName({ commit, state }, name) {
      const formatName = name.toLowerCase();
      const res = state.characters.filter((character) => {
        const characterName = character.name.toLowerCase();

        if (characterName.includes(formatName)) {
          return character;
        }
      });
      commit("setCharactersFilter", res);
    },

    changeMenuColor({ commit }, color) {
      const res = color;
      console.log(res);
      commit("setMenuColor", res);
    },
  },
  modules: {},
});
