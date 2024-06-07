<template>

  <div class="card" v-for="project in ">

  </div>
</template>

<script>
import {useProjectStore} from "@/stores/ProjectsStore.js";

export default {
  setup(){
    const useprojectStore = useProjectStore();
  }
}
</script>

<style scoped>

</style>