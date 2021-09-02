import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import TodoForm from "./components/TodoForm.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "HelloWorld", component: HelloWorld },
    { path: "/todoForm", name: "TodoForm", component: TodoForm },
  ],
});

export default router;
