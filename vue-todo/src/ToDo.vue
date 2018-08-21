<template>
  <div id="app" class="todoApp">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1 class="header">Vue To Do</h1>
    <div class="container">
      <div class="container-flex">
        <input class="input" type="text" v-model="todo" v-on:keyup.enter="createNewToDoItem" />
        <div class="btn-add" @click="createNewToDoItem()">+</div>
      </div>
      <ul class="list">
        <ToDoItem v-for="todo in list"
        :todo="todo"
        @delete="onDeleteItem"
        :key="todo.id" />
      </ul>
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
:root {
  --white: #F6F8F9;
  --beige: #ACAC9B;
  --beigeLight: #C6C6B0;
  --blue: #99A4AC;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  height: 100vh;

  /*
  background-image: radial-gradient(#555, #111);
  background-size: 100% 100%;
  */
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
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
