<template>
  <div class="item">
    <p class="text">{{todo.text}}</p>
    <div class="btn-delete" @click="deleteItem(todo)">-</div>
  </div>
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

<style scoped>
:root {
  --white: #F6F8F9;
  --beige: #ACAC9B;
  --beigeLight: #C6C6B0;
  --blue: #99A4AC;
}

.todoApp {
  width: 16em;
  background: var(--white);
  margin: 0 auto;
  padding: 1.4em 2em;
  text-align: center;
  box-shadow: 1px 1px 3px 1px var(--beigeLight);
}

.container-flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.input {
  padding: 0.4em 0.6em;
  border: transparent;
  box-shadow: inset 0px 0px 3px 1px var(--beigeLight);
  margin: 0.2em 0;
}

.list {

}

.list li {
  box-shadow: 1px 1px 3px 1px var(--beigeLight);
  padding: 0.4em 0.6em;
  margin:  0.2em 0;
  background: var(--beige);
}


.btn-add {
  cursor: pointer;
}


.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
}

.fade-in {
  opacity:0;
  animation: fadeIn ease-in 1;
  animation-fill-mode: forwards;
  animation-duration: 0.3s;
}

@keyframes App-logo-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes fadeIn {
  from { opacity:0; }
  to { opacity:1; }
}
</style>
