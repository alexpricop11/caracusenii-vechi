<template>
  <!-- Bara principală a aplicației cu o clasă condițională pentru starea meniului mobil -->
  <div class="app-bar" :class="{ 'mobile-open': isMobileMenuOpen }">
    <!-- Logo-ul, clickabil, direcționează către ruta de acasă -->
    <router-link to="/" class="logo-container">
      <img src="@/assets/Flag_of_Moldova.svg.png" alt="Logo" class="app-logo"/>
    </router-link>

    <h1 class="app-title">Caracușenii Vechi</h1>

    <!-- Butonul de meniu hamburger pentru vizualizarea mobilă -->
    <button class="hamburger" @click="toggleMobileMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Parcurge lista de linkuri și afișează fiecare link ca element de navigație -->
    <nav class="nav-links" :class="{ 'show': isMobileMenuOpen }">
      <router-link
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="nav-link"
          active-class="router-link-active"
          @click="closeMobileMenu"
      >
        {{ link.label }}
        <span class="nav-indicator"></span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppBar',
  data() {
    return {
      // Starea meniului mobil (deschis/închis)
      isMobileMenuOpen: false,
      // Lista de linkuri de navigație
      links: [
        {path: '/', label: 'PAGINA PRINCIPALĂ'},
        {path: '/school', label: 'ȘCOALA'},
        {path: '/location', label: 'LOCAȚII'},
        {path: '/history', label: 'ISTORIA'},
        {path: '/about', label: 'DESPRE'},
      ]
    }
  },
  methods: {
    // Metodă pentru a comuta meniul mobil (deschidere/închidere)
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      // Blochează scroll-ul paginii când meniul mobil este deschis
      document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
    },
    closeMobileMenu() {
      // Metodă pentru a închide meniul mobil
      this.isMobileMenuOpen = false;
      // Permite scroll-ul paginii după închiderea meniului
      document.body.style.overflow = '';
    }
  },
  mounted() {
    // Închide meniul mobil atunci când se schimbă ruta
    this.$router.afterEach(() => {
      this.closeMobileMenu();
    });
  }
}
</script>

<style scoped>
/* Bara de navigare a aplicației */
.app-bar {
  color: white; /* Setează culoarea textului la alb */
  position: fixed; /* Fixează bara de navigare în partea de sus a paginii */
  width: 100%; /* Ocupă întreaga lățime a ecranului */
  z-index: 10; /* Asigură că bara are prioritate peste alte elemente */
  display: flex; /* Folosește Flexbox pentru alinierea internă */
  align-items: center; /* Centrează elementele pe verticală */
  background-color: rgba(0, 0, 0, 0.8); /* Setează fundalul cu transparență */
  padding: 1rem; /* Adaugă spațiu în jurul conținutului din bară */
  backdrop-filter: blur(10px); /* Aplică un efect de blur pentru fundal */
  transition: all 0.3s ease; /* Trecere lină pentru modificări de stil */
}

/* Containerul pentru logo */
.logo-container {
  text-decoration: none; /* Înlătură sublinierea implicită */
  display: flex; /* Folosește Flexbox pentru a alinia logo-ul și textul */
  align-items: center; /* Centrează elementele pe verticală */
}

/* Imaginea logo-ului */
.app-logo {
  width: 70px; /* Lățimea logo-ului */
  height: auto; /* Păstrează proporțiile imaginii */
  margin-right: 1rem; /* Spațiu între logo și următorul element */
  transition: transform 0.3s ease; /* Efect de tranziție pentru transformări */
}

.app-logo:hover {
  transform: scale(1.1); /* Mărește ușor logo-ul la hover */
}

/* Titlul aplicației */
.app-title {
  font-size: 2rem; /* Dimensiunea textului */
  font-weight: bold; /* Grosimea textului */
  flex: 1; /* Se extinde pentru a ocupa spațiul liber */
  color: rgba(18, 131, 228, 0.68); /* Culoare cu transparență */
  text-align: left; /* Aliniere la stânga */
  margin-right: 1rem; /* Spațiu față de următorul element */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Umbră ușoară pentru text */
}

/* Link-urile de navigare */
.nav-links {
  display: flex; /* Aliniere flexibilă orizontală */
  gap: 1rem; /* Spațiu între link-uri */
  flex-wrap: wrap; /* Permite ca link-urile să se împacheteze pe mai multe rânduri */
  justify-content: center; /* Centrează link-urile pe orizontală */
}

/* Stilul pentru fiecare link */
.nav-link {
  color: white; /* Culoarea textului la alb */
  text-decoration: none; /* Înlătură sublinierea implicită */
  font-size: 1rem; /* Dimensiunea textului */
  transition: all 0.3s ease; /* Trecere lină pentru modificări */
  margin-right: 2rem; /* Spațiu între link-uri */
  position: relative; /* Poziționare relativă pentru indicatorul de navigare */
  padding: 0.5rem 1rem; /* Spațiu intern pentru link */
}

.nav-link:hover {
  color: #b1b103; /* Culoarea link-ului la hover */
  transform: translateY(-2px); /* Ușor ridicat la hover */
}

.nav-indicator {
  position: absolute; /* Poziționare absolută față de link */
  bottom: -2px; /* Așezat sub link */
  left: 0; /* Aliniat la stânga */
  width: 100%; /* Ocupă lățimea completă a link-ului */
  height: 2px; /* Înălțimea indicatorului */
  background-color: transparent; /* Culoare transparentă implicit */
  transition: all 0.3s ease; /* Trecere lină */
}

/* Stil pentru link-ul activ */
.router-link-active {
  color: #e11a1a; /* Culoare specifică pentru link-ul activ */
  font-weight: bold; /* Îngroașă textul link-ului activ */
}


/* Butonul pentru meniu (burger) */
.hamburger {
  display: none; /* Ascuns pe ecrane mari */
  flex-direction: column; /* Afișează liniile vertical */
  justify-content: space-around; /* Spațiu egal între liniile din burger */
  width: 2rem; /* Dimensiunea butonului burger */
  height: 2rem;
  background: transparent; /* Fundal transparent */
  border: none; /* Fără chenar */
  cursor: pointer; /* Cursor pointer */
  padding: 0;
  z-index: 10; /* Asigură afișarea deasupra meniului */
}

.hamburger span {
  width: 2rem; /* Lățimea liniilor din burger */
  height: 0.25rem; /* Grosimea liniilor */
  background: white; /* Culoarea liniilor */
  border-radius: 10px; /* Colțuri rotunjite */
  transition: all 0.3s linear; /* Trecere lină pentru transformări */
  position: relative; /* Poziționare relativă pentru animații */
  transform-origin: 1px; /* Punctul de origine pentru transformări */
}

/* Responsivitate pentru ecrane mici */
@media (max-width: 1024px) {
  .app-bar {
    height: 50px; /* Înălțime redusă pentru bara de navigare */
  }

  .app-title {
    font-size: 25px; /* Dimensiune mai mică pentru titlu */
  }
}

/* Stiluri pentru ecrane mici (sub 768px) */
@media (max-width: 768px) {
  .hamburger {
    margin-right: 3rem; /* Spațiu suplimentar la dreapta */
    display: flex; /* Afișează butonul burger */
  }

  .nav-links {
    position: fixed; /* Fixează meniul pe tot ecranul */
    top: 0; /* Susul paginii */
    right: -100%; /* Ascuns în afara ecranului */
    height: 100vh; /* Înălțime completă */
    width: 100%; /* Lățime completă */
    background: rgba(0, 0, 0, 0.9); /* Fundal întunecat */
    flex-direction: column; /* Link-urile pe coloana */
    padding-top: 5rem; /* Spațiu de sus */
    transition: all 0.3s ease; /* Trecere lină */
  }

  .nav-links.show {
    right: 0; /* Meniul apare pe ecran */
  }

  .nav-link {
    font-size: 1.2rem; /* Text mai mare pentru link-uri */
    margin: 1rem 0; /* Spațiu vertical între link-uri */
    text-align: center; /* Aliniere centrală */
  }

  /* Animația burgerului pentru meniul deschis */
  .mobile-open .hamburger span:first-child {
    transform: rotate(45deg); /* Prima linie devine diagonală */
  }

  .mobile-open .hamburger span:nth-child(2) {
    opacity: 0; /* A doua linie devine invizibilă */
  }

  .mobile-open .hamburger span:nth-child(3) {
    transform: rotate(-45deg); /* A treia linie devine diagonală inversă */
  }
}
</style>