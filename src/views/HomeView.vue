<script setup>
import ComponentProjectCardFavorite from "@/components/ComponentProjectCardFavorite.vue";

</script>

<template>
  <header>
    <div class="img">
      <img src="../assets/JeffBalkon.jpg">
    </div>
    <div class="tekst">
      <h1>Jeff Kippers</h1>
      <h2>Student DVO</h2>
      <p>Hallo, ik ben Jeff en ik ben een student DVO</p>
      <p>Kijk gerust rond in mijn portfolio!</p>
      <div class="info">
      <p>Email: Jeffke612@gmail.Com</p>
      <p>Telefoon: 04 73 31 23 43</p>
      </div>
    </div>

  </header>
  <div class="self-div">
  <a class="self" href="https://drive.google.com/file/d/1-U5l8ijR7Mp97fDMdCyBIMsP_pojmBFE/view?usp=drive_link">Link naar zelfreflectie</a>
  </div>
  <main>

<component-project-card-favorite></component-project-card-favorite>


  </main>
</template>
<style scoped>
header{
  margin: 100px;
  display: flex;
  flex-direction: row;
  padding: 20px;
  border-style: solid;
  border-width: 10px;

}
.img{
  display: flex;
  width: 50%;
}
.img img{
  max-width: 50%;
  border-radius: 10px;
}
.tekst{
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;

  text-align: center;
}
.tekst p{
  margin: 0;
  font-size: 20pt;
  color: white;
}
.tekst h1{
  margin-bottom: 0;
  font-size: 50pt;
  color: white;
}
.tekst h2{
  margin-top: 5px;
  font-size: 25pt;
  color: white;
}
.info{
  margin-top: 20px;
}
.self-div{
  display: flex;
}
.self{
  text-decoration: none;
  color: white;
  font-size: 20px;
  margin: auto;
}
</style>
