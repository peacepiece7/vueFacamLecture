import { defineStore } from "pinia"
// 'todo'이름을 다르게하면 바인딩된 컴포넌트에 메서드 이름이 변경됨
// 즉 'todo'가 'abs'면 this.absStore를 호출해야 함
export const todoStore = defineStore('todo', {
    // data
    state: () => ({
        todos: [],
        filters : {
            done : 'all',
            sortBy : 'none'
        }
    }),
    // computed
    getter: {
        filteredTodos(state) {
            let filteredTodos = [...state.todos]
            console.log("state.filters :", state.filters)
            // 표시
            if(state.filters.done !== "all") {
                filteredTodos = state.todos.filter(todo => {
                    switch (state.filters.done) {
                        case 'true' :
                            return todo.done
                        case 'false' :
                            return !todo.done
                    }
                })
            }
            // 정렬
            if(state.filters.sortBy !== 'none') {
                filteredTodos.sort((a,b) => {
                    const aTime = new Date(a.createdAt).getTime()
                    const bTime = new Date(b.createdAt).getTime()
                    switch(state.filters.sortBy) {
                        case 'newest' :
                            return bTime - aTime
                        case 'oldest' :
                            return aTime - bTime
                        default:
                            return 0
                    }
                })
            }
            return filteredTodos;
        }
    },
    // methods
    actions: {
        async readTodos() {
            this.todos = await request({
                method: 'GET'
            })
            console.log("this.todos")
            console.log(this.todos)
        },
        async createTodo(title) {
            await request({
                method: 'POST',
                body: { title }
            })
            this.readTodos()
        },
        async updateTodo(payload) {
            const { id, title, done, order } = payload
            console.log("updateTodo :", id, title, done, order)
            await request({
                method: 'PUT',
                body: {
                    title,
                    done,
                    order,
                },
                id  
            })
            this.readTodos()
        },
        async deleteTodo(id) {
            await request({
                method : "DELETE",
                id
            })
            this.readTodos()
        },
        async reorderTodos({oldIndex, newIndex}) {
            const todoIds = this.todos.map((todo) => todo.id)
            const oldId = todoIds[oldIndex]
            todoIds.splice(oldIndex, 1)
            todoIds.splice(newIndex, 0, oldId);
            await request({
                id : 'reorder',
                method : 'PUT',
                body : {
                    todoIds
                }
            })
            await this.readTodos()
        }
    }
})

async function request(options) {
    const { method, body, id = '' } = options
    const res = await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`, {
        method,
        headers: {
            "Access-Control-Origin" : true,
            'content-type': 'application/json',
            'apikey': 'FinTech202207',
            'username': 'jungTaeWook'
        },
        body: JSON.stringify(body)
    })
    return await res.json()
}
