<template>
  <div class="container" style="width: 50%">
    <button class="btn btn-secondary" @click="addTodo()">Add Todo</button>
    <div v-for="(todo, index) in this.$store.state.todos" :key="index">
      <div
        style=" background: #40B883; border-radius: 10px;margin: 10px"
        class="row"
      >
        <div class="col-sm-8">
          <h3>Id: {{ todo.id }}</h3>
          <h3>Name: {{ todo.name }}</h3>
        </div>
        <div class="col-sm-4" style="margin-top: 20px">
          <button class="btn btn-warning" @click="editTodo(todo)">
            Edit
          </button>
          <button class="btn btn-danger" @click="deleteTodo(todo.id)">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  methods: {
    addTodo() {
      this.$router.push({ name: "TodoForm" });
    },
    editTodo(data) {
      this.$router.push({ name: "TodoForm", params: { data: data } });
    },
    deleteTodo(id) {
      this.$store.commit("deleteTodo", { id: id });
    },
  },
};
</script>
