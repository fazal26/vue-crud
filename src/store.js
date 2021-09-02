import Vue from "vue";
import Vuex from "vuex";
import { apiData } from "./apiData";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: apiData,
  },
  mutations: {
    addTodo(state, data) {
      state.todos.push({ name: data.name, id: state.todos.length + 1 });
    },
    editTodo(state, data) {
      state.todos = state.todos.map((item) => {
        if (item.id == data.id) {
          item.name = data.name;
        }
        return item;
      });
    },
    deleteTodo(state, data) {
      state.todos = state.todos.filter((item) => item.id != data.id);
    },
  },
});

export default store;
