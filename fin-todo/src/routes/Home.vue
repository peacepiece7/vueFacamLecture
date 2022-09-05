<template>
    <h1>Home!</h1>
    <TodoCreator></TodoCreator>
    <div class="todos">
        <TodoItem v-for="todo in todoStore.todos" :key="todo.id" :todo="todo" />
    </div>

</template>


<script>
import TodoCreator from "~/components/TodoCreator.vue"
import TodoItem from "~/components/TodoItem.vue"
import { mapStores } from "pinia";
import { todoStore } from "~/store/todo.js";

export default {
    components: {
        TodoCreator,
        TodoItem
    },
    computed: {
        ...mapStores(todoStore)
    },
    created() {
        this.todoStore.readTodos();
    }
    // created() {
    //     this.todoStore.todos
    // }
}
</script>