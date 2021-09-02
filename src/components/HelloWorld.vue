<template>
  <div>
    <h3>CRUD Task!</h3>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./TodoList.vue";
export default {
  name: "HelloWorld",
  components: {
    TodoList,
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped>
h3 {
  margin: 40px;
}
</style>
