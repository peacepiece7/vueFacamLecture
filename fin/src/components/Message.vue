<template>
  <h2> x : {{ x }}</h2>
  <slot></slot>
</template>

<script>
// import Message from './Message.vue'    
    export default { 
        props : {
            x : {
                type : Number,
                default : -1
            }
        }
    }
</script>

<style></style>

