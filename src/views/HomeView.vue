<template>
<div class>
  <div class="home">
    <p>Bonjour vous êtes sur la page home</p>
  </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
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
}
</script>

<style>

</style>