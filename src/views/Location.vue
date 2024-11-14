<template>
  <div class="location">
    <div v-if="selectedImage" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <img :src="getImageUrl(selectedImage)" :alt="selectedAlt" class="modal-image">
        <button class="close-button" @click="closeModal">&times;</button>
      </div>
    </div>
    <div class="info-sections">
      <div v-for="(item, index) in locations" :key="index" class="info-section">
        <img
            class="info-image"
            :src="getImageUrl(item.image)"
            :alt="item.alt"
            @click="openModal(item.image, item.alt)"
        />
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedImage: null,
      selectedAlt: '',
      locations: [
        {name: 'Primaria', image: 'primaria.jpg', alt: 'Primaria'},
        {name: 'Casa de cultură', image: 'photo_2024-11-09_21-12-16.jpg', alt: 'Casa de cultura'},
        {name: 'Grădinița', image: 'photo_5_2024-11-08_23-55-54.jpg', alt: 'Gradinita'},
        {name: 'Bulhac', image: 'photo_2_2024-11-08_23-55-54.jpg', alt: 'Bulhac'},
        {name: 'Piața', image: 'piata.jpg', alt: 'Piata'},
        {name: 'Defileul Ciuntului', image: 'Caracusenii-Vechi.jpg', alt: 'Defileul Ciuntului'},
        {name: 'Magazin Moldovan Liviu', image: 'livic.jpg', alt: 'Magazin 1'},
        {name: 'Magazin 2', image: 'photo_2_2024-11-08_23-55-54.jpg', alt: 'Magazin 2'},
        {name: 'Magazin 3', image: 'photo_2_2024-11-08_23-55-54.jpg', alt: 'Magazin 3'},
        {name: 'Magazin 4', image: 'photo_2_2024-11-08_23-55-54.jpg', alt: 'Magazin 4'},
        {name: 'Benzinăria', image: 'photo_2_2024-11-08_23-55-54.jpg', alt: 'Benzinaria'}
      ]
    };
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`../assets/${imageName}`, import.meta.url).href;
    },
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
.location {
  padding: 10rem; /* Add padding around the content */
}

h2 {
  font-size: 2.4rem; /* Setează dimensiunea fontului */
  margin-top: 7rem; /* Spațiu suplimentar în partea de sus */
  font-weight: 600; /* Font îngroșat */
  word-wrap: break-word; /* Asigură că textul se va împărți corect pe ecranele mici */
}

/* Stiluri pentru modal (popup) */
.modal {
  position: fixed; /* Poziționează modalul fix pe ecran */
  top: 0; /* Aliniază la partea de sus */
  left: 0; /* Aliniază la partea stângă */
  width: 100%; /* Lățimea modalului pe întreaga lățime a ecranului */
  height: 100%; /* Înălțimea modalului pe întreaga înălțime a ecranului */
  background-color: rgba(0, 0, 0, 0.7); /* Fundal semitransparent */
  display: flex; /* Folosește flexbox pentru centrare */
  justify-content: center; /* Centrează conținutul pe axa orizontală */
  align-items: center; /* Centrează conținutul pe axa verticală */
  z-index: 1000; /* Asigură că modalul va fi deasupra altor elemente */
  cursor: pointer; /* Setează cursorul ca pointer pentru a indica faptul că este clicabil */
}

/* Conținutul modalului */
.modal-content {
  position: relative; /* Poziționează relativ pentru a putea muta butonul de închidere */
  max-width: 90%; /* Lățime maximă de 90% din ecran */
  max-height: 90%; /* Înălțime maximă de 90% din ecran */
  border-radius: 10px; /* Colțuri rotunjite */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Adăugă umbra pentru adâncire */
  padding: 10px; /* Adaugă padding în jurul imaginii */
}

/* Stiluri pentru imaginea din modal */
.modal-image {
  max-width: 100%; /* Lățimea maximă a imaginii să fie 100% din container */
  max-height: 90vh; /* Înălțimea maximă a imaginii să fie 90% din înălțimea ferestrei */
  object-fit: contain; /* Asigură că imaginea se va ajusta corect fără a fi decupată */
  border-radius: 8px; /* Colțuri rotunjite pentru imagine */
}

/* Stiluri pentru butonul de închidere al modalului */
.close-button {
  position: absolute; /* Poziționează butonul relativ la containerul modalului */
  top: -10px; /* Plasează butonul deasupra imaginii */
  right: -40px; /* Plasează butonul în dreapta imaginii */
  background: none; /* Elimină fundalul */
  border: none; /* Elimină bordura */
  color: white; /* Culoarea textului (butonul de închidere) */
  font-size: 50px; /* Mărimea fontului pentru simbolul × */
  cursor: pointer; /* Cursorul devine pointer pentru a semnala că este clicabil */
}

/* Secțiuni pentru informații (grid) */
.info-sections {
  display: grid; /* Folosește grid pentru aranjarea secțiunilor */
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); /* Coloane responsivă cu dimensiuni minime de 280px */
  gap: 1rem; /* Spațiu între elemente */
  max-width: 1200px; /* Lățime maximă a secțiunii */
  margin: 0 auto; /* Centrează secțiunea pe pagină */
}

/* Stiluri pentru fiecare secțiune de informații */
.info-section {
  font-size: 1.2rem; /* Mărimea textului */
  display: flex; /* Folosește flexbox pentru a aranja elementele */
  flex-direction: column; /* Aliniază elementele în coloană */
  align-items: center; /* Aliniază elementele la centru */
  padding: 1.5rem; /* Padding în jurul fiecărei secțiuni */
  background-color: rgba(255, 255, 255, 0.1); /* Fundal semitransparent */
  border-radius: 10px; /* Colțuri rotunjite */
  transition: transform 0.3s ease; /* Tranziție pentru efectele de hover */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Umbră subtilă pentru fiecare secțiune */
}

/* Efectul de hover pentru fiecare secțiune de informații */
.info-section:hover {
  transform: translateY(-5px); /* Ridică ușor secțiunea la hover */
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2); /* Umbra devine mai mare pe hover */
}

/* Stiluri pentru imagini din fiecare secțiune de informații */
.info-image {
  width: 100%; /* Lățimea imaginii să fie 100% din container */
  height: 200px; /* Înălțimea este setată la 200px pentru uniformitate */
  object-fit: cover; /* Acoperă complet zona disponibilă fără a deforma imaginea */
  border-radius: 8px; /* Colțuri rotunjite */
  margin-bottom: 1rem; /* Spațiu între imagine și descriere */
  transition: transform 0.3s ease; /* Tranziție pentru efectul de zoom la hover */
  cursor: pointer; /* Cursorul devine pointer pentru a semnala că imaginea este clicabilă */
}

/* Efectul de hover pe imagini */
.info-image:hover {
  transform: scale(1.1); /* Zoom ușor pe imagine la hover */
}

/* Stiluri pentru textul de descriere din secțiunile de informații */
p {
  font-size: 1rem; /* Mărimea fontului */
  color: #ffffff; /* Culoare albă pentru text */
  line-height: 1.6; /* Înălțimea liniei pentru o lizibilitate mai bună */
  text-align: center; /* Aliniază textul la centru */
  margin-top: 0.8rem; /* Adaugă spațiu deasupra textului */
}

@media (max-width: 768px) {
  .location {
    padding: 2rem; /* Minimized padding for very small screens */
  }

  .modal-content {
    max-width: 90%; /* Ensure modal fits on smaller screens */
  }

  /* Info sections layout */
  .info-sections {
    grid-template-columns: 1fr 1fr; /* Two columns for small screens */
  }

  /* Font size adjustments */
  h2 {
    font-size: 1.8rem;
    margin-top: 4rem;
  }

  p {
    font-size: 0.85rem;
    margin-top: 0.5rem;
  }

  /* Reduce padding and size for each info section */
  .info-section {
    padding: 1rem;
  }

  /* Smaller images in the grid */
  .info-image {
    height: 120px; /* Smaller image for mobile view */
  }
}

@media (max-width: 1024px) {
  .location {
    padding-top: -45rem;
  }
}

@media (max-width: 780px) {
  .location {
    margin-top: 1rem;
  }

  .info-section p {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.85);
  }

  .close-button {
    font-size: 24px;
    top: 5px;
    right: 5px;
  }
}

@media (max-width: 400px) {
  .location {
    margin-top: 7rem;
  }

  .close-button {
    font-size: 24px;
    top: 5px;
    right: 5px;
  }
}
</style>
