<template>
  <div>
    <h1>404 - Pagina nu a fost găsită</h1>
    <p>Veți fi redirecționat către pagina principală în câteva secunde...</p>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push('/caracusenii-vechi/');
    }, 1000);
  }
};
</script>

<style scoped>

</style>