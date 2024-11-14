<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      form: {
        name: '',
        message: ''
      },
      messageSent: false
    };
  },
  methods: {
    sendEmail() {
      const currentDate = new Date();
      const date = currentDate.toLocaleString()

      const formData = {
        name: this.form.name,
        message: this.form.message,
        date: date
      };
      emailjs.send('service_kwc1vhq', 'template_w0qas74', formData, 'U-OJ5xsQ3hueZ1jOe')
          .then(response => {
            console.log("Mesajul a fost trimis", response)
            this.messageSent = true
          })
          .catch(error => {
            console.error('Error sending message', error);
          });
      this.form.message = '';
    }
  }
}
</script>

<template>
  <div class="section">
    <div class="about">
      Despre noi
    </div>
    <div class="collaboration">
      <h2>Colaboratori:</h2>
      <ul class="collaboration-list">
        <li><strong>Pricop Alexandru</strong></li>
        <li><strong>Bucatca Crinu</strong></li>
        <li><strong>Moldovan Laurențiu</strong></li>
      </ul>
    <p>Am lucrat împreună la crearea și dezvoltarea acestui site.</p>
    </div>
    <div class="contact">
      <p>Pentru contact trimite un mesaj:</p>
      <form @submit.prevent="sendEmail" class="contact-form">
        <!-- Name Input -->
        <div class="form-group">
          <label for="name">Numele tău (Opțional)</label>
          <input id="name" v-model="form.name" type="text" placeholder="Introduceți numele tău"/>
        </div>

        <!-- Message Input -->
        <div class="form-group">
          <label for="message">Mesajul</label>
          <textarea id="message" v-model="form.message" placeholder="Scrie mesajul" required></textarea>
        </div>

        <!-- Submit Button -->
        <button type="submit">Trimite</button>
      </form>

      <!-- Success Message -->
      <div v-if="messageSent" class="success-message">
        <p>Mesajul a fost trimis</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Main section style */
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  max-width: 1000px;
  margin: 0 auto;
}

/* About Section */
.about {
  font-size: 3rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
}

@media (max-width: 1024px) {
  .about {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .about {
    font-size: 2rem;
  }
}

@media (max-width: 450px) {
  .about {
    font-size: 1.8rem;
  }
}

.about {
  margin-top: 7rem;
}

/* Collaboration Section */
.collaboration {
  text-align: center;
  font-size: 1rem; /* Reduci dimensiunea fontului pentru a se potrivi */
  color: #555;
  background-color: #f9f9f9;
  border: 2px solid #ddd;
  border-radius: 12px;
  padding: 5px; /* Reduci padding-ul */
  width: 300px; /* Dimensiune mai mică pentru pătrat */
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.collaboration h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #00695c;
  margin-bottom: 1rem;
}

.collaboration-list {
  list-style-type: none;
  padding: 0;
  margin-bottom: 2rem;
}

.collaboration-list li {
  padding: 8px 0;
  font-size: 1.1rem;
  color: #333;
}

.collaboration-list li strong {
  color: #070606;
}

/* Contact Section */
.contact {
  font-size: 1.4rem;
  color: #333;
  text-align: center;
  margin-top: 3rem;
  width: 100%;
}

p {
  font-size: 1.2rem;
  color: #070606;
  margin-bottom: 1rem;
}

/* Form Styling */
.contact-form {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

.form-group label {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.5rem;
  display: block;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
}

.form-group textarea {
  min-height: 150px;
  resize: vertical;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

/* Success Message */
.success-message {
  margin-top: 20px;
  padding: 12px;
  background-color: #dff0d8;
  border: 1px solid #d0e9c6;
  border-radius: 6px;
  color: #3c763d;
  font-size: 1.2rem;
  text-align: center;
}
</style>
