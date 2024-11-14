<template>
  <!-- Secțiunea de descriere a școlii -->
  <div class="description">
    <h2>
      Școala satului Caracușenii Vechi Liceul Teoretic Constantin Stamati-Ciurea.
    </h2>
  </div>
  <div v-if="selectedImage" class="modal" @click.self="closeModal">
    <div class="modal-content">
      <img :src="selectedImage" :alt="selectedAlt" class="modal-image">
      <button class="close-button" @click="closeModal">&times;</button>
    </div>
  </div>
  <!-- Secțiunea de imagini -->
  <div class="info-sections">
    <div v-for="(item, index) in sections" :key="index" class="info-section">
      <img
          class="info-image"
          :src="getImageUrl(item.image)"
          :alt="item.alt"
          @click="openModal(item.image, item.alt)"
      />
    </div>
  </div>
</template>

<script>
// Exportă componenta default, permițându-i să fie utilizată într-o aplicație Vue
export default {
  // Secțiunea `data` definește datele care vor fi folosite în componentă
  data() {
    return {
      // `selectedImage` va stoca imaginea selectată pentru a fi afișată în modal
      selectedImage: null,
      // `selectedAlt` va stoca textul alternativ (descrierea imaginii) pentru imaginea selectată
      selectedAlt: '',
      sections: [
        {name: 'Scoala', image: 'photo_6_2024-11-08_23-55-54.jpg', alt: 'Scoala'},
        {name: 'Scoala', image: 'photo_1_2024-11-08_23-55-54.jpg', alt: 'Scoala'},
        {name: 'Scoala', image: 'img.png', alt: 'Scoala'},]
    };
  },
  // Secțiunea `methods` conține funcțiile care vor fi utilizate în această componentă
  methods: {
    getImageUrl(imageName) {
      return new URL(`../assets/${imageName}`, import.meta.url).href;
    },
    // `openModal` este apelată atunci când se dorește deschiderea modalului cu imaginea selectată
    openModal(image, alt) {
      this.selectedImage = this.getImageUrl(image);
      this.selectedAlt = alt;
      document.body.style.overflow = 'hidden';
    },
    // `closeModal` este apelată pentru a închide modalul
    closeModal() {
      // Resetează imaginea selectată și textul alternativ la valorile inițiale
      this.selectedImage = null;
      this.selectedAlt = '';
      // Reactivatează derularea paginii după ce modalul este închis
      document.body.style.overflow = 'auto';
    }
  }
};
</script>


<style scoped>
.description {
  color: #ffffff;
  margin-top: 9rem;
  font-size: 2rem;
  text-align: center;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
}

.modal-image {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
}

.close-button {
  position: absolute;
  top: -10px;
  right: -40px;
  background: none;
  border: none;
  color: white;
  font-size: 50px;
  cursor: pointer;
}

.info-sections {
  display: flex;
  flex-wrap: wrap; /* Permite trecerea pe un nou rând dacă spațiul nu este suficient */
  justify-content: center; /* Aliniază secțiunile pe centru */
  gap: 1rem;
  padding: 1rem;
}

.info-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.info-image {
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 1rem;
  cursor: pointer;
}

.info-section:hover {
  transform: translateY(-5px);
}

.info-image:hover {
  transform: scale(1.05);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .description {
    font-size: 1.8rem;
    margin-top: 9rem;
  }

  .info-section {
    width: calc(50% - 1rem); /* 2 items per row */
  }

  .close-button {
    font-size: 24px;
    top: 5px;
    right: 5px;
  }
}

@media (max-width: 768px) {
  .description {
    font-size: 1.5rem;
    margin-top: 12rem;
  }

  .info-section {
    width: 100%; /* Single item per row on tablets */
  }

  .info-image {
    max-width: 350px;
  }

  .close-button {
    font-size: 24px;
    top: 5px;
    right: 5px;
  }
}

@media (max-width: 480px) {
  .description {
    font-size: 1.2rem;
    margin-top: 10rem;
    padding: 0 1rem;
  }

  .info-section {
    padding: 0.8rem;
  }

  .info-image {
    max-width: 100%;
  }

  .close-button {
    font-size: 24px;
    top: 5px;
    right: 5px;
  }
}
</style>
