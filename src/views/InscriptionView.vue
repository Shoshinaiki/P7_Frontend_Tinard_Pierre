<template>
  <div class="signup">
    <div class="inscription"><h1>Inscription</h1></div>
    <div class="info"><p>Veuillez remplir tout les champs et valider :</p></div>
    <form @submit.prevent="handleSignup">
      <div>
        <label for="lastname">Votre nom</label>
        <input type="text" id="lastname" v-model="this.lastName" name="nom" placeholder=" nom" required>
      </div>
      <div>
        <label for="firstname">Votre prénom</label>
        <input type="text" id="firstname" v-model="this.firstName" name="nom" placeholder=" prenom" required>
      </div>
      <div>
        <label for="email">Votre e-mail</label>
        <input type="email" id="email" v-model="this.email" name="email" placeholder=" adresse@mail.com" required>
      </div>
      <div>
        <label for="password">Votre password</label>
        <input type="password" id="password" v-model="this.password" name="password" placeholder=" password" required>
      </div>
      <div>
        <button type="submit" class="button_validate">Valider</button>      
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'InscriptionView',
  data(){
        return{
            lastName: "",
            firstName: "",
            email: "",
            password: ""
        }
    },
  methods: {
    handleSignup() {
      let user = {
        firstName: this.firstName,
        lastName: this.lastName,
        email:  this.email,
        password: this.password
      }
      this.$store.dispatch("auth/register", user).then(
        () => {
          this.$router.push("/login");
        },
        (error) => {
          console.log(error)
        }
      );
    },
  },
}
</script>

<style lang="scss" scoped>

.signup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #FFD7D7;
  border: 5px #FD2001;
  border-radius: 15px;
  border: solid 1px #4E5166;
  box-shadow: 10px 5px 5px #4E5166;
  height: 35rem;
  margin-left: auto;
  margin-right: auto;
  width: 30rem;
}

.inscription {
  justify-content: center;
  margin: 0.5rem;
}

.info {
  margin: 0.2rem;
}

#lastname, #firstname, #email, #password {
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  margin: 0.8rem;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #4E5166;
  height: 20px;
  border-radius: 5px;
}

.button_validate {
  margin: 1.5rem;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: #FD2D01;
  border: 1px solid #4E5166;
  color: white;
  font-weight: bold;
}  

@media all and (max-width: 1550px) {
  .signup {
    height: 32rem;
  }
}

@media all and (max-width: 1000px) {
  .signup {
    height: 25rem;
  }
  h1 {
    margin: 0;
  }
  label {
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
    margin-left: auto;
    margin-right: auto;
  }
}

@media all and (max-width: 500px) {
  .signup {
    width: 20rem;
  }
}
</style>