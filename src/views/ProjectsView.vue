<template>
<main>
  <component-project-card></component-project-card>
</main>
</template>

<script>
import ComponentProjectCard from "@/components/ComponentProjectCard.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {ComponentProjectCard}
})


</script>

<style scoped>
main{
  margin-top: 100px;
}
</style>