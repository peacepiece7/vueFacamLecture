<template>
    <div class="todo-items">
        {{ todo.done }}
        <input :value="todo.title" type="text" @change="updateTodo" />
        {{ todo.createdAt }}
    </div>
</template>


<script>
export default {
    props: {
        todo: {
            type: Object,
            require: true
        }
    },
    methods: {
        updateTodo() {

        }
    }
}
</script>


<style>
</style>