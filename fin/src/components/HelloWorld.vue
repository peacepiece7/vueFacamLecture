<template>
  <h1>Hello, world! / {{ abc }} / {{ c }}</h1>
  <!-- this.$emit -->
  <button @click="$emit('wow', 8)">
    wow!
  </button>
  <Message :x="c">
    안녕하세요 <span style="color : red">정태욱</span> 입니다.
  </Message>
</template>

<script>
import Message from './Message.vue'

export default {
    components : {
        Message
    },
    props : {
        abc : {
            type : String,
            required : true
        },
        c : {
            type : Number,
            default : -1
        }
    },
    emits : ['wow']
}
</script>

<style></style>
