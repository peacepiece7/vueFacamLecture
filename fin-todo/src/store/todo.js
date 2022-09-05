import { defineStore } from "pinia"
// 'todo'이름을 다르게하면 바인딩된 컴포넌트에 메서드 이름이 변경됨
// 즉 'todo'가 'abs'면 this.absStore를 호출해야 함
export const todoStore = defineStore('todo', {
    // data
    state: () => ({
        todos: []
    }),
    // computed
    getter: {
    },
    // methods
    actions: {
        async createTodo(title) {
            await request({
                method: 'POST',
                body: { title }
            })
            this.readTodos()
        },
        async readTodos() {
            this.todos = await request({
                method: 'GET'
            })
            console.log("this.todos")
            console.log(this.todos)
        },
        async updateTodo(payload) {
            const { title, done, order } = payload
            await request({
                method: 'PUT',
                body: {
                    title,
                    done,
                    order
                }
            })
        }
    }
})

async function request(options) {
    const { method, body } = options
    const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
        method,
        headers: {
            'content-type': 'apllication/json',
            apikey: 'FinTech202207',
            username: 'JungTaeWook'
        },
        body: JSON.stringify(body)
    })
    return await res.json()
}
