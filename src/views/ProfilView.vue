<template>
    <div class="profil">
      <div class="container">
        <div class="header">
        </div>
        <div class="body">
          <h1 class="infos">Informations personnelles</h1>
          <ul>
            <li><span>Nom: {{this.currentUser.lastName}}</span></li>
            <li><span>Prénom: {{this.currentUser.firstName}}</span></li>
            <li><span>E-mail: {{this.currentUser.email}}</span></li>
            <li><span>Admin: {{this.currentUser.role}}</span></li>
          </ul>
        </div>
        <div>
          <button type="button" @click="deleteUser" class="button_delete">Supprimer</button>
        </div>
      </div>
    </div>
</template>
<script>
// @ is an alias to /src

import userService from "../services/user.service"
export default {
  name: 'ProfilView',
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
    deleteUser() {
      userService.deleteUsersById(this.currentUser.userId)
      .then(() => {
        this.$router.push("/login")
        this.$store.dispatch("auth/logout")
      })
    },
  },
}
</script>

<style lang="scss" scoped>

  .container {
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 5px #FD2001;
    border-radius: 15px;
    border: solid 1px #4E5166;
    box-shadow: 10px 5px 5px #4e5166;
    height: 35rem;
    margin-left: auto;
    margin-right: auto;
    width: 30rem;
  }


  body {
    margin: 1.5rem;
  }

  .infos {
    margin: 5rem;
    font-size: 1.5rem;
  }

  ul ,li {
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
    margin-left: auto;
    margin-right: auto;
  }

  li {
    display: flex;
    justify-content: flex-start;
    margin-left: 6.5rem;
  }

  span {
    display: flex;
    justify-content: flex-end;
  }

  .button_modify, .button_delete {
    margin: 1.5rem;
    padding: 0.5rem;
    border-radius: 10px;
    border: 1px solid #FFD707;
  }

 @media all and (max-width: 1550px) {
  .container {
    height: 32rem;
  }
}

@media all and (max-width: 1000px) {
  
  .container {
    height: 25rem;
  }

  .infos {
    margin: 2rem;
  }
}

  @media all and (max-width: 515px) {
  .container {
    width: 20rem;
  }

  .button_delete, .button_modify {
    display: flex;
    margin-left: 6rem;
    border-radius: 10px;
    border: 1px solid #FFD707;
  }
}
</style>