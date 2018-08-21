<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1 class="header">Vue To Do</h1>
    <div class="container">
      <div>
        <input type="text" v-model="todo" v-on:keyup.enter="createNewToDoItem" />
        <div class="btn-add" @click="createNewToDoItem()">+</div>
      </div>
      <div class="content">
        <ToDoItem v-for="todo in list"
        :todo="todo"
        @delete="onDeleteItem"
        :key="todo.id" />
      </div>
    </div>
  </div>
</template>

<script>
import ToDoItem from './components/ToDoItem.vue'

export default {
  name: 'app',
  components: {
    ToDoItem
  },
  data() {
    return {
      list: [
        {
          id: 1,
          text: 'feed pets'
        },
        {
          id: 2,
          text: 'return library books'
        }
      ],
      todo: ''
    }
  },

  methods: {
    createNewToDoItem() {
      if(!this.todo) {
        alert("please enter a todo!");
        return;
      }

      const newId = Math.max.apply(null, this.list.map(t => t.id)) + 1;
      this.list.push({ id: newId, text: this.todo });
      this.todo = '';
    },

    onDeleteItem(todo) {
      this.list = this.list.filter(item => item !== todo);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
