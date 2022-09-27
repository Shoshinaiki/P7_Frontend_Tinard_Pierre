<template>
    <header>
        <img class="imgH1" src="../src/assets/icon-left-font.png" height="60" width="300" alt="logo">
        <div class="nav">
          <nav>
            <router-link v-if="currentUser" to="/profil">Profil</router-link> 
            <router-link v-if="!currentUser" to="/inscription">Signup</router-link> 
            <router-link v-if="!currentUser" to="/login">Login</router-link> 
            <router-link v-if="currentUser" to="/admin">Admin</router-link>
            <router-link v-if="currentUser" to= "/newpost">NewPost</router-link>
            <router-link v-if="currentUser" to= "/">Home</router-link>
            <button class="logout" @click="Logout" v-if="currentUser" >Logout</button>
          </nav>
        </div>
        <link rel="stylesheet" ref="https://fonts.googleapis.com/css?family=Lato">
    </header>
    <router-view/>
</template>

<script>
export default {
  name: 'App',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
   methods: {
    Logout() {
      this.$router.push("/login")
      this.$store.dispatch("auth/logout")
    },
  },
};
</script>

<style lang="scss">

* {
  font-family: 'Lato',serif;
  margin: 0;
  padding: 0;
}

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 2.5rem auto;
  background-color: white;
  height: 8rem;
  width: 65rem;
  font-size: 12px;
  border-radius: 15px;
  box-shadow: 10px 5px 5px #4E5166;
  border: solid 1px #4E5166;
}

.nav {
  display: flex;
  align-items: center;
  width: auto;
}

a {
  font-weight: bold;
  font-size: 1.2rem;
  align-items: center;
  color: #2c3e50;
  padding: 1rem;

  &.router-link-exact-active {
  color: #FD2001;
  }
}

.logout {
   margin: 1.5rem;
    padding: 0.5rem;
    border-radius: 10px;
    border: 1px solid #FFD707;
}

.titleLogo {
  display: flex;
  flex-direction: row;
}

.socialNetwork {
  margin-left: 2rem;
  padding-top: 3rem;
}

.imgH1 {
  margin: 0 2rem 0 1rem;
  padding-top: 2.3rem;
  align-items: center;
}

.group-name {
  color: #FD2001;
}

.socialNetwork {
    margin-left: 4rem;
}

a {
    padding: 0.5rem;
}

@media all and (max-width: 1100px) {

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40rem;
    height: auto;
  }

  .socialNetwork {
    margin-left: 6rem;
  }

  .imgH1 {
    margin: 0;
    object-fit: cover;
    padding-top: 2rem;
  }

  .group-name {
    color: #FD2001;
  }

  .nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    width: auto;
  }
}

@media all and (max-width: 1000px) {

.socialNetwork {
  display: flex;
  justify-content: flex-start;
  margin: 0rem 0rem 1rem 4rem;
  padding-left: 0;
}
  
.nav {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 0 0 2rem;
  padding: 0;
  width: auto;
  }
}

@media all and (max-width: 515px) {
  header {
    width: 20rem;
    height: 15rem;
    margin: 2rem auto;
  }

  .socialNetwork {
    margin: 1rem 0 1rem 2rem;
  }
  
  .imgH1 {
    margin: 0 0 0 0.2rem;

  }
  .nav {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 0 0 0.5rem;
  padding: 0;
  width: auto;
  }
}
</style>
