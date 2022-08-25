<template>
<h1>{{messageStore.message}}</h1>
<h2>{{messageStore.reversedMessage}}</h2>
</template>
<script>
import { mapStores } from 'pinia';
import { messageStore } from '../store';
export default {
    computed : {
        ...mapStores(messageStore)
    },
    created() {
        console.log(this.messageStore)
    }
}
</script>