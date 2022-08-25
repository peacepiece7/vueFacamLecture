<template>
<button  @click="messageStore.handler">Handle</button>
<Container></Container>
</template>

<script>

import { mapStores } from "pinia"
import { messageStore } from "./store"
import Container from "./components/Container.vue"

export default {
  components : {
    Container
  },
  computed : {
    ...mapStores(messageStore)
  }
}

</script>