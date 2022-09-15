<template>
  <div class="todo-items">
    {{ todo.done }}
    <span class="order-handle">:::</span>
    <input
      v-model="done"
      type="checkbox"
      @change="
        todoStore.updateTodo({
          id: todo.id,
          title: title,
          done: todo.done,
        })
      "
    />
    <input
      :value="title"
      type="text"
      @input="title = $event.target.value"
      @change="
        todoStore.updateTodo({
          id: todo.id,
          title: title,
          done: todo.done,
        })
      "
    />
    {{ dateFormatter(todo.createdAt) }}
    <button @click="todoStore.deleteTodo(todo.id)">삭제</button>
  </div>
</template>

<!-- v-model(한글 사용 필요 없을 경우), value @input(한글 사용 필요 할 경우) -->
<script>
import dayjs from "dayjs";
import { mapStores } from "pinia";
import { todoStore } from "~/store/todo.js";

export default {
  props: {
    todo: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      title: "",
      done: false,
    };
  },
  computed: {
    ...mapStores(todoStore),
    // this.todoStore
  },
  created() {
    this.title = this.todo.title;
    this.done = this.todo.done;
  },
  methods: {
    dateFormatter(date) {
      return dayjs(date).format("YYYY.MM.DD");
    },
  },
  updateTodo() {
    console.log(` id : ${this.todo.id},
            title : ${this.title},
            done : ${this.todo.done},`);
    this.todoStore.updateTodo({
      id: this.todo.id,
      title: this.title,
      done: this.todo.done,
    });
  },
};
</script>

<style></style>
