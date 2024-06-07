<script>
import {useProjectStore} from "../stores/ProjectsStore.js";

export default {
  setup() {
    const projectStore = useProjectStore();

    return {projectStore};
  }
}
</script>

<template>
<section v-for="project in projectStore.selected">
  <h1></h1>
</section>
</template>

<style scoped>

</style>