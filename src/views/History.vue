<template>
  <div v-if="selectedImage" class="modal" @click.self="closeModal">
    <div class="modal-content">
      <img :src="selectedImage" :alt="selectedAlt" class="modal-image"/>
      <button class="close-button" @click="closeModal">&times;</button>
    </div>
  </div>

  <div class="info-sections">
    <div class="info-section">
      <img
          class="info-image"
          src="@/assets/img_1.png"
          alt="Primaria"
          @click="openModal($event.target.src, 'Primaria')"
      />
      <p>{{ description1 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedImage: null,
      selectedAlt: '',
      description1: "Caracuşenii Vechi este un sat din raionul Briceni, Republica Moldova. Satul este aşezat pe malul\n" +
          "drept al părâului Lopatnic. A fost atestat pentru prima dată la 2 mai anul 1575. În satul Caracuşenii Vechi se\n" +
          "afla moşia scriitorului Constantin Stamati-Ciurea, unde în 1860 se retrage acesta, consacrîndu-se activităţii\n" +
          "literare, picturii, fotografiei, astronomiei. În 1988, cu prilejul comemorării a 160 de ani de la naşterea\n" +
          "scriitorului, a fost inaugurat la Caracuşenii Vechi, în localul şcolii, un muzeu consacrat vieţii şi operei lui\n" +
          "Constantin Stamati-Ciurea, iar în 1993 i-a fost înălţat un bust.",
    };
  },
  methods: {
    openModal(image, alt) {
      this.selectedImage = image;
      this.selectedAlt = alt;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.selectedImage = null;
      this.selectedAlt = '';
      document.body.style.overflow = 'auto';
    }
  }
};
</script>

<style scoped>
/* Informații vizuale și textuale */
.info-sections {
  padding-top: 10rem;
  display: grid;
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}

.info-section {
  color: #ffffff;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.04);
  border-radius: 10px;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.info-image {
  width: 500px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.info-image:hover {
  transform: scale(1.05);
}

/* Modal (popup) */
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
  right: -10px;
  background: rgba(255, 255, 255, 0.7);
  border: none;
  font-size: 1.5rem;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s;
}

.close-button:hover {
  background-color: rgba(255, 255, 255, 1);
}

@media (max-width: 1024px) {
  .info-sections {
    margin-top: 5rem;
  }
}
@media (max-width: 768px) {
  .info-sections {
    padding-top: 5rem;
    margin-bottom: -9rem;
  }

  .info-image {
    width: 100%;
    height: auto;
  }

  .info-section {
    font-size: 1rem;
  }

  .close-button {
    font-size: 24px;
    top: 5px;
    right: 5px;
  }
}

@media (max-width: 450px) {
  .info-sections {
    margin-top: 1rem;
  }

  .close-button {
    font-size: 24px;
    top: 5px;
    right: 5px;
  }
}
</style>