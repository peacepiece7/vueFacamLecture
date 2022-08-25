import { defineStore } from "pinia"

// defineStore(name, option)
export const messageStore = defineStore('message', {
    // state =~ data
    state : () => {
        return { message : "Hello, Lin!" }
    },
    // getters =~ computed
    getters : {
        reversedMessage : (state) => {
            // this.message x
            return state.message.split("").reverse().join("")
        }
    },
    actions : {
        handler() {
            this.message += "!"
        }
    }
})

