<template>
  <nav class="navbar">
    <div class="container">
      <div class="pages">
        <router-link to="/"><a>Home</a></router-link>
        <router-link to="/"><a>Portfolio</a></router-link>
        <router-link to="/"><a>CV</a></router-link>
      </div>
      <span class="hamburger-icon" style="font-size:30px;cursor:pointer" @click="toggleNav">&#9776;</span>
    </div>
  </nav>

  <div id="myNav" class="overlay" :style="{ width: navWidth }">
    <a href="javascript:void(0)" class="closebtn" @click="toggleNav">&times;</a>
    <div class="overlay-content">

      <router-link to="/"><a>Home</a></router-link>
      <router-link to="/events"><a>initatie</a></router-link>
      <router-link to="/about"><a>Over ons</a></router-link>
      <router-link to="/kalender"><a>Kalender</a></router-link>
      <router-link to="/contact"><a>Contact</a></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navWidth: '0'
    };
  },
  methods: {
    toggleNav() {
      this.navWidth = this.navWidth === '0' ? '100%' : '0';
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: white;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: fixed;
  top: 0;
  min-height: 50px;

}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.pages {
  flex-grow: 1;
  text-align: center;
}

.pages a {
  color: black;
  text-decoration: none;
  margin: 0 25px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 120px;
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 15px 0px;
  width: 100%;
  text-decoration: none;
  display: block;
  margin: 0px;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

/*hamburger*/

.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #062845fb;
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: white;
  display: block;
  transition: 0.3s;
}
a.overlay-optie {
  font-size: 25px;
}


.overlay a:hover, .overlay a:focus {
  color: #476A99;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

.hamburger-icon {
  display: none;
  color: #476A99;
  font-size: 40px!important;
}


@media screen and (max-height: 450px) {
  .overlay a { font-size: 20px }
  .overlay .closebtn { font-size: 40px; top: 15px; right: 35px; }
}

@media screen and (max-width: 950px) {
  .hamburger-icon { display: block; }
  .pages { display: none; }
}

</style>

