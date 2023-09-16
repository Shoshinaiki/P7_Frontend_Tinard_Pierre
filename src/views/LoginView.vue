<template>
  <div class="login">
    <div class="connexion"><h1>Connexion</h1></div>
    <div class="info"><p>Veuillez remplir tout les champs et valider :</p></div>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Votre e-mail</label>
        <input type="email" id="email" v-model="this.email" name="email" placeholder="  adresse@mail.com" required>
      </div>
      <div>
        <label for="password">Votre password</label>
        <input type="password" id="password" v-model="this.password" name="password" placeholder="  password" required>
      </div>
      <div>
        <button type="submit" class="button_validate">Valider</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'LoginView',
  data(){
        return{
            email: "",
            password: "",
        }
    },
  methods: {
    handleLogin() {
      let user = {
        email:  this.email,
        password: this.password
      }
      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/profil");
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

.login {
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

.connexion {
  margin-bottom: 1rem;
  font-size: 0.8rem;
}

.info {
  margin-bottom: 1.5rem;
}

#password, #email {
  display: flex;
  flex-direction: column;
  margin: 0.8rem;
  background-color: #f5f5f5;
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
  color: black;
  font-weight: bold;
}

@media all and (max-width: 1550px) {
  .login {
    height: 32rem;
  }
}

@media all and (max-width: 1000px) {
  .login {
    height: 25rem;
  }
  .info {
    margin: 0;
  }
}

@media all and (max-width: 500px) {
  .login {
    width: 22rem;
  }
}

</style>