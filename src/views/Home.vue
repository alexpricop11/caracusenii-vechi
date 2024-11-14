<template>
  <!-- Secțiunea principală a paginii, care conține titlul -->
  <div class="home">
    <!-- Titlul care schimbă culoarea dinamic, în funcție de valoarea currentColor -->
    <h2 :style="{ color: currentColor }">Bun venit pe pagina satului Caracușenii Vechi</h2>
    <p>Aici vor fi toate noutățile si evenimentele satului</p>
  </div>
  <History/>
  <Location/>
</template>

<script>
import History from "@/views/History.vue";
import Location from "@/views/Location.vue";

export default {
  data() {
    return {
      colors: ['blue', 'yellow', 'red'], // Array de culori pe care le va schimba aplicația
      currentColorIndex: 0, // Indexul curent al culorii
    };
  },
  components: {
    History, Location
  },
  computed: {
    currentColor() {
      return this.colors[this.currentColorIndex]; // Calculează culoarea curentă în funcție de indexul curent
    }
  },
  mounted() {
    this.changeColor(); // Apelează funcția de schimbare a culorii atunci când componenta este montată
  },
  methods: {
    // Schimbă culoarea la fiecare 1 secundă
    changeColor() {
      setInterval(() => {
        this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length; // Actualizează indexul culorii
      }, 1000);
    },
  }
};
</script>

<style scoped>
/* Stiluri pentru secțiunea principală a paginii (home) */
.home {
  height: auto; /* Setează înălțimea secțiunii la 100% din înălțimea vizibilă a ferestrei */
  display: flex; /* Folosește flexbox pentru a alinia elementele în interior */
  flex-direction: column; /* Aranjează elementele în coloană */
  align-items: center; /* Aliniază elementele pe axa transversală (orizontală) la centru */
  justify-content: flex-start; /* Aliniază elementele pe axa principală (verticală) la centru */
  text-align: center; /* Aliniază textul la centru */
  font-family: 'Arial', sans-serif; /* Setează fontul folosit */
  margin-top: 0; /* Elimină marginea de sus */
  margin-bottom: -10rem; /* Elimină padding-ul implicit */
}

/* Stiluri pentru titlul h2 */
h2 {
  font-size: 2.4rem; /* Setează dimensiunea fontului */
  margin-top: 9rem; /* Spațiu suplimentar în partea de sus */
  padding-bottom: 5rem;
  font-weight: 600; /* Font îngroșat */
  word-wrap: break-word; /* Asigură că textul se va împărți corect pe ecranele mici */
}
p{
  margin-top: -1rem;
  font-size: 2rem;
}

@media (max-width: 1024px) {
}

/* Media Query pentru ecrane mai mici de 600px */
@media (max-width: 768px) {
  h2 {
    margin-top: 11rem;
    font-size: 1.8rem; /* Dimensiune mai mică a fontului pe telefon */
  }
}

@media (max-width: 450px) {
  h2 {
    margin-top: 10rem;
    font-size: 1.8rem; /* Dimensiune mai mică a fontului pe telefon */
  }
  p{
    font-weight: bold;
    margin-bottom: 5rem;
  }
}
</style>