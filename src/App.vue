<template>
  <!-- Containerul principal al aplicației, care include bara de navigare și vizualizarea componentelor -->
  <div id="app">
    <!-- AppBar fixat în partea de sus -->
    <div class="app-bar">
      <AppBar/>
    </div>

    <!-- Conținutul principal, care începe de sub AppBar -->
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
// Importă componenta AppBar pentru a fi utilizată în componenta principală
import AppBar from './components/AppBar.vue';
import {useRouter} from "vue-router";

export default {
  created() {
    const router = useRouter();
    const redirectPath = new URLSearchParams(window.location.search).get('redirect');
    if (redirectPath) {
      router.push(redirectPath);
    }
  },
  name: 'App', // Numele componentei
  components: {
    // Includerea componentelor ce vor fi utilizate în aplicație
    AppBar
  }
}
</script>

<style scoped>
/* Stiluri pentru AppBar */
.app-bar {
  position: fixed; /* Fixează AppBar în partea de sus */
  top: 0;
  left: 0;
  right: 0;
  background-color: #333; /* Culoare de fundal pentru AppBar */
  z-index: 1000; /* Asigură că AppBar este deasupra altor elemente */
}

/* Stiluri pentru containerul principal al aplicației */
.content {
  flex: 1;
  overflow-y: auto; /* Permite derularea în cazul în care conținutul depășește înălțimea ferestrei */
}
</style>

<style>
/* Stiluri pentru body, care se aplică la întreaga pagină */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-image: url('@/assets/photo_3_2024-11-08_23-55-54.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

/* Stiluri pentru containerul principal */
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
