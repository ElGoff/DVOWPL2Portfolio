<script>
//import { RouterLink, RouterView } from 'vue-router'
import ComponentFooter from "@/components/ComponentFooter.vue";
import ComponentNavBar from "@/components/ComponentNavBar.vue";

export default {
  components: {
    ComponentFooter,
    ComponentNavBar,
    // RouterLink,
    // RouterView,
  }
}
</script>

<template>
<component-nav-bar></component-nav-bar>

  <RouterView />
  <component-footer></component-footer>
</template>

<style scoped>

</style>
