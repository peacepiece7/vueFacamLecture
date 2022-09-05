<template>
    <!-- v-model은 한글 이슈가 생김  v-model="title" -->
    <div class="todo=creator">
        <input :value="title" @input="title = $event.target.value" type="text" placeholder="할 일을 추가하세요"
            @keydown.enter="createTodo">
        <button @click="createTodo">Add</button>
    </div>
</template>


<script>
import { mapStores } from "pinia"
import { todoStore } from "~/store/todo.js"

export default {
    data() {
        return {
            title: ''
        }
    },
    computed: {
        ...mapStores(todoStore)
    },
    methods: {
        createTodo(event) {
            if (event.isComposing) return // 함수가 동작중에는 리턴
            if (!this.title.trim()) return
            this.todoStore.createTodo(this.title)
            this.title = ''
        }
    },

}
</script>