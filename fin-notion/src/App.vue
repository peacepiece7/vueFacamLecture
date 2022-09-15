
<template>
  <main>
    <nav>
      <div class="title">
      </div>
      <ul>
        </ul>
        <div class="actions"></div>
    </nav>
    <div class="workspace">
      <header></header>
      <div class="workspace__contents">
        <RouterView/>
      </div>
    </div>
  </main>
</template>

<script> 
import { mapStores } from 'pinia';
import { useWorkspaceStore } from '../store/workspace';
  export default {
    computed : {
      ...mapStores(useWorkspaceStore)
    },
    created () {
      this.workspaceStore.readWorkspaces();
    }
  }
</script>

<style scoped lang="scss">
  main {
    // width : default auto;
    display : flex;
    height: 100vh;
    nav {
      display: flex;
      flex-direction: column;
      flex-shrink: 0; // 감소 너비 비율
      width : 260px;
      border : 10px solid; // default color 색상
      .title {
        height: 80px;
        border : 10px solid red;
      }
      ul {
        border : 10px solid yellow;
        flex-grow: 1;
      }
      .actions {
        flex-shrink: 0;
        height: 150px;
        border : 10px solid crimson;
      }
    }
  }
  .workspace {
    flex-grow: 1; // 증가 너비 비율
    border : 10px solid red;
  }
</style>