<script>
import {useProjectStore} from "../stores/ProjectsStore.js";

export default {
  setup(){
    const projectStore = useProjectStore();

    return {projectStore};
  }
}
</script>
<template>
  <section>
    <div v-for="project in projectStore.projects">
      <router-link to="/product"><a>
        <img src="" alt="Pictures with balloons and the word Yeah">
        <h3>{{project.title}}</h3>
        <p>{{project.description}}</p>
      </a></router-link>
    </div>

  </section>

</template>



<style scoped>

section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
  padding: 10px;

}
section div {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
section div a {
  display: flex;
  text-decoration: none;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
  padding: 20px;
  background: #e5e5ea;
}
section div a:hover {
  background: lightgreen;
}
section div a img {
  align-self: center;
  width: 100%;
}
section div a h3 {
  align-self: center;
  color: #000000;
  font-size: 35px;
}
</style>