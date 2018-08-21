<template>
  <li class="item container-flex fade-in">
    <span class="text">{{todo.text}}</span>
    <div class="btn-delete" @click="deleteItem(todo)">-</div>
  </li>
</template>

<script>
export default {
  name: 'ToDoItem',
  props: ['todo'],
  methods: {
    deleteItem(todo) {
      this.$emit('delete', todo)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- temp, consider replacing with single css file for all todos -->
<!--<link rel="stylesheet" href="./../common/css/ToDo.css"/>-->

<style scoped>
.btn-delete {
  cursor: pointer;
  background: rgb(214, 59, 51);
  display: inline-block;
  width: 2em;
  height: 2em;
  line-height: 2em;
  color: #FFF;
  text-align: center;
  border-radius: 50%;
  box-shadow: 1px 1px 3px var(--beige);
}
</style>
