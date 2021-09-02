<template>
  <div>
    <div
      style="background: #40B883; width: 80%; padding: 20px; border-radius: 10px; margin: auto"
      class="conatiner row"
    >
      <input class="form-control col-sm-9" v-model="name" />
      <div class="col-sm-1"></div>
      <button class="btn btn-warning col-sm-2" @click="submit()">Save</button>
    </div>
    <button class="btn btn-secondary col-sm-2" @click="goBack()">Cancel</button>
  </div>
</template>
<script>
export default {
  name: "TodoForm",
  data() {
    return {
      name: "",
      id: "",
    };
  },
  methods: {
    submit() {
      if (this.id) {
        //EDIT
        this.$store.commit("editTodo", { id: this.id, name: this.name });
        this.$router.go(-1);
      } else {
        //ADD
        if (this.name.length > 0) {
          this.$store.commit("addTodo", { name: this.name });
          this.$router.go(-1);
        }
      }
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  mounted() {
    if (this.$route.params.data) {
      this.name = this.$route.params.data.name;
      this.id = this.$route.params.data.id;
    }
  },
};
</script>
