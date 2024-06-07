<script setup>

</script>

<template>
  <header>
    <div class="img">
      <img src="../assets/JeffBalkon.jpg">
    </div>
    <div class="tekst">
      <p>Hallo, ik ben Jeff en ik ben een student DVO</p>
      <h2>Contact gegevens</h2>

    </div>
  </header>
  <main>



  </main>
</template>
<style scoped>
header{
  margin-top: 100px;
  display: flex;
  flex-direction: row;

}
.img{
  display: flex;
  max-width: 50%;
  margin: auto;
  background-color: blueviolet;

}
.img img{
  max-width: 50%;
  margin: auto;
  border-radius: 10px;
}
.tekst{

  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: pink;
  text-align: center;
}
</style>
