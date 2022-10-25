<template>
  <main>
    <Navbar />
    <router-view/>
  </main>
</template>

<script>

import Navbar from "./components/Navbar.vue"

export default {
  name: 'App',
  components: {
    Navbar,
  },

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
};
</script>

<style lang="scss">

main {
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
  padding-top: 1rem;
  background-color: #4E5166;
}

* {
   font-family: sans-serif;
   margin: 0;
   padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
